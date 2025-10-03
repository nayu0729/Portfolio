import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { projects } from './data/projects';
import { skills } from './data/skills';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px',
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.values(sectionsRef.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="portfolio">
            {/* ナビゲーション部分 */}
            <nav className="navbar">
                <div className="nav-content">
                    <div className="nav-logo">Portfolio</div>
                    <ul className="nav-links">
                        <li className={activeSection === 'home' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('home')}>Home</button>
                        </li>
                        <li className={activeSection === 'about' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('about')}>About</button>
                        </li>
                        <li className={activeSection === 'skills' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('skills')}>Skills</button>
                        </li>
                        <li className={activeSection === 'projects' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('projects')}>Projects</button>
                        </li>
                        <li className={activeSection === 'contact' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('contact')}>Contact</button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* ヒーローセクション */}
            <section
                id="home"
                className="section hero-section"
                ref={(el) => {
                    sectionsRef.current['home'] = el;
                }}
            >
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="wave">👋</span>
                            <span>こんにちは、</span>
                            <br />
                            <span className="highlight">nayu</span>です
                        </h1>
                        <p className="hero-subtitle">情報工学科B3</p>
                        <p className="hero-description">
                            フロントエンドエンジニア志望の大学生です。
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => scrollToSection('projects')}
                            >
                                プロジェクトを見る
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => scrollToSection('contact')}
                            >
                                お問い合わせ
                            </button>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse"></div>
                </div>
            </section>

            {/* Aboutセクション */}
            <section
                id="about"
                className="section about-section"
                ref={(el) => {
                    sectionsRef.current['about'] = el;
                }}
            >
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                名城大学情報工学部の学生です。
                                フロントエンドからバックエンドまで、主に個人で開発を行っています。
                            </p>
                            <p>
                                ネットワークやセキュリティなど、まだまだ学習中の身ですが、思いついたアイデアを形にすることを大切にしています。
                            </p>
                            <p>
                                チーム開発においても、コミュニケーションを大切にし、
                                プロジェクトの成功に貢献できるよう心がけています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* スキルセクション */}
            <section
                id="skills"
                className="section skills-section"
                ref={(el) => {
                    sectionsRef.current['skills'] = el;
                }}
            >
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <SkillCard key={index} skillGroup={skillGroup} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* プロジェクトセクション */}
            <section
                id="projects"
                className="section projects-section"
                ref={(el) => {
                    sectionsRef.current['projects'] = el;
                }}
            >
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        製作中のプロジェクトの一部をご紹介します
                    </p>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* コンタクトセクション */}
            <section
                id="contact"
                className="section contact-section"
                ref={(el) => {
                    sectionsRef.current['contact'] = el;
                }}
            >
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <p className="section-subtitle">
                        ご連絡やソースコードをご覧になる際は以下を参照ください
                    </p>
                    <div className="contact-links">
                        <a href="mailto:231205023@ccmailg.meijo-u.ac.jp" className="contact-link">
                            <span className="contact-icon">📧</span>
                            <span>231205023@ccmailg.meijo-u.ac.jp</span>
                        </a>
                        <a
                            href="https://github.com/nayu0729"
                            className="contact-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="contact-icon">💻</span>
                            <span>GitHub/nayu0729</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* フッター */}
            <footer className="footer">
                <p>&copy; 2025 Nayuta Inaba. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;

import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <div className="project-card" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="project-image">
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div className="project-placeholder">{project.placeholder || '制作中'}</div>
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>
                {project.isValidDetail !== false ? (
                    <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        詳細を見る →
                    </a>
                ) : (
                    <span className="project-link-disabled">詳細を見る →</span>
                )}
            </div>
        </div>
    );
};

import type { SkillCategory } from '../types';

interface SkillCardProps {
    skillGroup: SkillCategory;
    index: number;
}

export const SkillCard = ({ skillGroup, index }: SkillCardProps) => {
    return (
        <div className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-tags">
                {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

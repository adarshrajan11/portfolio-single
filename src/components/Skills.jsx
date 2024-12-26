import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import ScrollReveal from '../hoc/ScrollReveal';

const skillsData = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Tailwind CSS', level: 70 },
];

const Skills = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {skillsData.map((skill) => (
                    <ScrollReveal key={skill.name}>
                        <SkillBar skill={skill} />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

const SkillBar = ({ skill }) => {
    const { name, level } = skill;

    const barAnimation = useSpring({
        width: `${level}%`,
        from: { width: '0%' },
        config: { duration: 1000 },
    });

    return (
        <div className="space-y-2">
            <p className="text-lg font-medium">{name}</p>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-4 rounded">
                <animated.div
                    className="h-4 bg-blue-500 rounded"
                    style={barAnimation}
                ></animated.div>
            </div>
        </div>
    );
};

export default Skills;

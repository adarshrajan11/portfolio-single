import React from "react";

const experiences = [
    {
        role: "Software Developer",
        company: "GBS Plus Pvt Ltd",
        location: "Thiruvananthapuram, Kerala",
        dates: "2.5 years",
        responsibilities: [
            "Provided technical support and development for C# and .NET WPF-based applications.",
            "Enhanced functionality for Club Management and Temple Management Software.",
            "Troubleshot and resolved application issues efficiently.",
            "Focused on React.js development for HRMS applications and the Trivandrum Wildlife Department ticket booking system.",
        ],
    },


    {
        role: "Web Developer",
        company: "Freelance/Various Projects",
        location: "Kollam, Kerala",
        dates: "",
        responsibilities: [
            "Delivered multiple frontend projects for clients using HTML, CSS, and JavaScript.",
            "Maintained a portfolio of hobby projects available on GitHub.",
        ],
    },
    {
        role: "Web Developer (Intern)",
        company: "Softzane Solutions",
        location: "Kollam, Kerala",
        dates: "3 months",
        responsibilities: [
            "Developed web and hybrid mobile applications using modern technologies.",
            "Collaborated with team members to design and deploy functional user interfaces.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
            <div className="max-w-5xl mx-auto space-y-8">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-2xl font-semibold">{experience.role}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {experience.company} | {experience.location}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {experience.dates}
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            {experience.responsibilities.map((responsibility, i) => (
                                <li key={i}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;

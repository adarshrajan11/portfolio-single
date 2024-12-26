import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "../data/projectData";

const ProjectShowcase = () => {
    const [filter, setFilter] = useState("All");

    // Filter projects based on the selected category
    const filteredProjects =
        filter === "All"
            ? projectData
            : projectData.filter((project) => project.category === filter);

    return (
        <div className="py-12 px-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
                {["All", "Web", "Design"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full ${filter === category
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            layout
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Category: {project.category}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectShowcase;

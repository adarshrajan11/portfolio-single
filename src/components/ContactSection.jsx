import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid email is required.";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        }
    };

    return (
        <div className="py-12 px-6 bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
            <motion.form
                className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`px-4 py-3 border text-black rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                            }`}
                        placeholder="Enter your name"
                    />
                    {errors.name && (
                        <motion.p
                            className="text-red-500 text-sm mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {errors.name}
                        </motion.p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`px-4 py-3 border text-black rounded-lg focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                            }`}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <motion.p
                            className="text-red-500 text-sm mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {errors.email}
                        </motion.p>
                    )}
                </div>
                <div className="flex flex-col md:col-span-2">
                    <label className="font-semibold mb-2">Message</label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`px-4 py-3 border text-black rounded-lg focus:outline-none focus:ring-2 ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                            }`}
                        rows="6"
                        placeholder="Write your message here"
                    ></textarea>
                    {errors.message && (
                        <motion.p
                            className="text-red-500 text-sm mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {errors.message}
                        </motion.p>
                    )}
                </div>
                <div className="md:col-span-2 text-center">
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
            </motion.form>
        </div>
    );
};

export default ContactSection;

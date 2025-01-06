import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
            {theme === 'light' ? (
                <>
                    <MdOutlineDarkMode className="text-xl" />
                    <span>Dark Mode</span>
                </>
            ) : (
                <>
                    <MdOutlineLightMode className="text-xl" />
                    <span>Light Mode</span>
                </>
            )}
        </button>
    );
};

export default ThemeToggle;

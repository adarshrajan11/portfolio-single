import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const { theme } = useTheme();

    return (
        <header
            className={`py-4 px-6 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Adarsh Rajan</div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#skills" className="hover:text-blue-400">Skills</a>
                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;

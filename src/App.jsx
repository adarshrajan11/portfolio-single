import './App.css';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import { useTheme } from './context/ThemeContext';
import withAnimation from './hoc/withAnimation';

function App() {
  const AnimatedHero = withAnimation(Hero);
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="p-4">
          <Header />
          <AnimatedHero />
          <Skills />
          <ExperienceSection />
          <ProjectShowcase />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;

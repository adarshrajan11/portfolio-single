
import './App.css'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import ProjectShowcase from './components/ProjectShowcase'
import Skills from './components/Skills'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './context/ThemeContext'
import withAnimation from './hoc/withAnimation'

function App() {
  const AnimatedHero = withAnimation(Hero)
  const theme = useTheme()
  // console.log('Current theme:', theme);


  return (
    <>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <div className="p-4">
            <ThemeToggle />

            {/* <AnimatedHero /> */}
            <AnimatedHero />
            <Skills />
            <ProjectShowcase />
            <ContactSection />
          </div>
        </div>
      </div>



    </>
  )
}

export default App

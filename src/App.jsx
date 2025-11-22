import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LayoutProvider, useLayout } from './context/LayoutContext';
import './index.css';
import './layouts.css';
import './new-layouts.css';

function AppContent() {
  const { currentLayout } = useLayout();
  const { currentTheme } = useTheme();

  return (
    <div className={`App layout-${currentLayout} theme-${currentTheme}`}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <LayoutProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LayoutProvider>
  );
}

export default App;

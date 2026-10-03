import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [darkMode, setDarkMode]   = useState(true);
  const [loaded, setLoaded]       = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleLoaded   = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen bg-[#0D0D11] text-slate-100 selection:bg-plum/30 selection:text-white">

      {/* Loading screen — shows until done, then onDone fires */}
      {!loaded && <LoadingScreen onDone={handleLoaded} />}

      {/* Custom cursor — desktop only */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Main content — fades in after loader exits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </motion.div>

    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { ease } from '../lib/motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: ease.expo, delay: 0.1 }}
      className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D0D11]/90 backdrop-blur-md border-white/[0.08]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
            className="text-2xl font-bold flex items-center gap-2 text-beige"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: ease.back }}
          >
            <Sparkles size={20} className="text-plum" />
            <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">AR</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative font-medium transition-all duration-300 pb-1 ${
                  activeSection === link.id ? 'text-plum' : 'text-beige/70 hover:text-beige'
                }`}
              >
                {link.name}
                {/* Animated active dot using layoutId */}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-plum"
                    transition={{ duration: 0.35, ease: ease.quart }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-beige/10 text-beige"
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={20} /></motion.span>
                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={20} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: ease.quart }}
              className="md:hidden bg-[#0F0F0F] border border-beige/10 rounded-2xl mt-2 mb-4"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25, ease: ease.expo }}
                    onClick={() => scrollTo(link.id)}
                    className={`py-2 px-4 rounded-lg text-left transition ${
                      activeSection === link.id ? 'bg-plum/20 text-plum' : 'text-beige/70 hover:text-beige hover:bg-beige/5'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
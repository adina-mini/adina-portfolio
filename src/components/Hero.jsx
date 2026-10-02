import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Download, Briefcase } from 'lucide-react';
import { fadeUp, scalePop, slideRight, staggerContainer, ease } from '../lib/motion';

// ─── Text Scramble ────────────────────────────────────────────────────────────
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*<>/\\|[]{}';

const ScrambleText = ({ text, startDelay = 0, className = '' }) => {
  const [display, setDisplay] = useState(() => text.split('').map(() => '?'));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;
    let iteration = 0;

    const scramble = () => {
      intervalId = setInterval(() => {
        setDisplay(
          text.split('').map((char, idx) => {
            if (char === ' ') return ' ';
            // Lock in characters from left as iterations progress
            if (idx < Math.floor(iteration / 2.5)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
        );
        iteration++;
        if (iteration > text.length * 2.5) {
          clearInterval(intervalId);
          setDisplay(text.split(''));
          setDone(true);
        }
      }, 35);
    };

    timeoutId = setTimeout(scramble, startDelay);
    return () => { clearTimeout(timeoutId); clearInterval(intervalId); };
  }, [text, startDelay]);

  return (
    <span className={className}>
      {display.map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            color: done || text[i] === char ? 'inherit' : 'rgba(139,94,124,0.7)',
            transition: 'color 0.1s',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

// ─── Magnetic Button ─────────────────────────────────────────────────────────
const MagneticButton = ({ children, className, onClick, strength = 0.28 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  const handleMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
      data-magnetic
    >
      {children}
    </motion.button>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Adina_rehman_resume.pdf';
    link.download = 'Adina_Rehman_CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12">
      <style>{`
        @keyframes softBreathe {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.22; transform: scale(1.02); }
        }
        .hero-halo { animation: softBreathe 6s ease-in-out infinite; }

        @keyframes spinRing { to { transform: rotate(360deg); } }
        .avatar-spin {
          animation: spinRing 9s linear infinite;
          background: conic-gradient(#8B5E7C, #6B8A6B, #E7D7C1, #8B5E7C);
        }


      `}</style>

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={scalePop(0)}
            className="inline-block px-3 py-1 bg-plum/20 text-plum rounded-full text-sm mb-6 border border-plum/30"
          >
            ✦ AI/ML Engineer
          </motion.div>

          {/* "Hi, I'm" */}
          <motion.p
            variants={fadeUp(0.1)}
            className="text-beige/60 text-xl font-light mb-1 tracking-wide"
          >
            Hi, I'm
          </motion.p>

          {/* Name — scramble effect */}
          <motion.h1
            variants={fadeUp(0.15)}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-none"
          >
            <ScrambleText
              text="Adina Rehman"
              startDelay={400}
              className="bg-gradient-to-r from-plum via-beige to-olive bg-clip-text text-transparent"
            />
          </motion.h1>

          {/* Subtitle with blinking cursor */}
          <motion.div
            variants={fadeUp(0.3)}
            className="text-lg text-beige/60 mb-8 leading-relaxed font-light"
          >
            <span>AI Engineer building Agentic AI &amp; LLM systems</span>
            <br />
            <span className="text-beige/40 text-sm tracking-widest">
              Python · LangGraph · RAG · LLMs
            </span>
          </motion.div>

          {/* Magnetic buttons */}
          <motion.div
            variants={staggerContainer(0.1, 0.5)}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.div variants={fadeUp()}>
              <MagneticButton
                onClick={() => scrollTo('projects')}
                className="px-7 py-3.5 bg-gradient-to-r from-plum to-plum/80 text-beige rounded-full font-semibold shadow-lg shadow-plum/20 flex items-center gap-2 hover:shadow-plum/40 transition-shadow duration-300"
              >
                <Briefcase size={17} /> View My Work
              </MagneticButton>
            </motion.div>

            <motion.div variants={fadeUp()}>
              <MagneticButton
                onClick={downloadCV}
                className="px-7 py-3.5 border-2 border-olive text-olive rounded-full font-semibold hover:bg-olive/10 flex items-center gap-2 transition-colors duration-300"
              >
                <Download size={17} /> Download CV
              </MagneticButton>
            </motion.div>

            <motion.div variants={fadeUp()}>
              <MagneticButton
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 bg-beige/8 text-beige rounded-full font-semibold hover:bg-beige/15 flex items-center gap-2 border border-beige/15 transition-colors duration-300"
              >
                Let's Talk →
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Subtle stat row */}
          <motion.div
            variants={fadeUp(0.7)}
            className="flex gap-8"
          >
            {[
              { num: '10+', label: 'AI Projects' },
              { num: '3+', label: 'Frameworks' },
              { num: '∞', label: 'Curiosity' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">{num}</div>
                <div className="text-xs text-beige/35 tracking-widest uppercase mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Avatar */}
        <motion.div
          variants={slideRight(0.3)}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Spinning conic ring */}
            <div
              className="absolute -inset-1.5 rounded-full avatar-spin opacity-50"
              style={{ borderRadius: '50%' }}
            />
            {/* Halo glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-plum to-olive rounded-full blur-xl hero-halo opacity-30" />
            {/* Photo */}
            <img
              src="/images/profile.jpg"
              alt="Adina Rehman"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-plum/20 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => { e.target.src = '/images/fallback.png'; }}
            />

          </div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="text-beige/30 hover:text-plum transition-colors" size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
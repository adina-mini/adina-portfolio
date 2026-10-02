import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onDone }) => {
  const [phase, setPhase] = useState('in');   // 'in' | 'hold' | 'out'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar 0→100 over 1.6s
    const start = performance.now();
    const duration = 1600;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(p * 100);
      if (p < 1) requestAnimationFrame(tick);
      else {
        // Small pause, then slide out
        setTimeout(() => {
          setPhase('out');
          setTimeout(onDone, 900);
        }, 200);
      }
    };
    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== 'out' ? (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#0B0B0B',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 40,
          }}
        >
          {/* Logo monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center' }}
          >
            {/* Rotating ring SVG */}
            <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto 20px' }}>
              <svg width="120" height="120" style={{ position: 'absolute', top: 0, left: 0 }}>
                <circle
                  cx="60" cy="60" r="54"
                  fill="none"
                  stroke="rgba(139,94,124,0.15)"
                  strokeWidth="1"
                />
                <motion.circle
                  cx="60" cy="60" r="54"
                  fill="none"
                  stroke="url(#loaderGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="339.3"
                  animate={{ strokeDashoffset: [339.3, 0], rotate: [0, 360] }}
                  transition={{
                    strokeDashoffset: { duration: 1.6, ease: 'easeInOut' },
                    rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                  }}
                  style={{ transformOrigin: '60px 60px' }}
                />
                <defs>
                  <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8B5E7C" />
                    <stop offset="100%" stopColor="#6B8A6B" />
                  </linearGradient>
                </defs>
              </svg>

              {/* AR monogram in center */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, fontWeight: 800, fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(135deg, #8B5E7C, #6B8A6B)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                AR
              </div>
            </div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                fontSize: 13, letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(231,215,193,0.35)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Adina Rehman
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: 180, height: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 999, overflow: 'hidden' }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #8B5E7C, #6B8A6B)',
                borderRadius: 999,
                width: `${progress}%`,
              }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              position: 'absolute', bottom: 40, right: 48,
              fontSize: 11, fontFamily: 'monospace',
              color: 'rgba(231,215,193,0.2)',
            }}
          >
            {Math.round(progress).toString().padStart(3, '0')}
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;

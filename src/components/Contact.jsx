import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeUp, slideLeft, slideRight, staggerContainer, scalePop, ease } from '../lib/motion';

const socialLinks = [
  { platform: 'github', label: 'github.com/adina-mini', url: 'https://github.com/adina-mini' },
  { platform: 'linkedin', label: 'Adina Rehman Z', url: 'https://linkedin.com/in/adina-rehman-z/' },
  { platform: 'twitter', label: '@adina61785', url: 'https://twitter.com/adina61785' },
  { platform: 'email', label: 'adinarehman018@gmail.com', url: 'mailto:adinarehman018@gmail.com' },
];

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      {/* Handwritten font — Caveat, loaded from Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&display=swap');

        .handwritten {
          font-family: 'Caveat', 'Brush Script MT', cursive;
          font-weight: 700;
          letter-spacing: 0.3px;
          line-height: 1.15;
        }
      `}</style>

      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="text-4xl font-bold mb-3 text-center"
      >
        <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
          Let's Connect
        </span>
      </motion.h2>
      <motion.p
        variants={fadeUp(0.1)}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="text-center text-beige/40 text-sm tracking-wide mb-16"
      >
        Reach out anytime
      </motion.p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          variants={slideLeft(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Handwritten line only */}
          <p className="handwritten text-plum text-3xl md:text-4xl mb-6">
            Let's create a World Worth Living-In!
          </p>

          {/* Tighter social links */}
          <motion.div
            variants={staggerContainer(0.07, 0.25)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-1"
          >
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.platform];
              return (
                <motion.a
                  key={link.platform}
                  variants={fadeUp(0, 10)}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, color: '#8B5E7C' }}
                  transition={{ duration: 0.2, ease: [0.25,1,0.5,1] }}
                  className="flex items-center gap-3 text-beige/70 px-3 py-1.5 rounded-lg hover:bg-beige/5"
                >
                  {Icon && <Icon size={18} />}
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.form
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <motion.input
            variants={fadeUp(0, 12)}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#16161F] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-plum/40 focus:border-transparent transition"
            disabled={loading}
          />
          <motion.input
            variants={fadeUp(0, 12)}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#16161F] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-plum/40 focus:border-transparent transition"
            disabled={loading}
          />
          <motion.textarea
            variants={fadeUp(0, 12)}
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#16161F] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-plum/40 focus:border-transparent transition resize-none"
            disabled={loading}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <motion.button
            variants={scalePop(0)}
            whileHover={{ y: -2, scale: 1.01, boxShadow: '0 8px 28px rgba(139,94,124,0.35)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.34, 1.56, 0.64, 1] }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-plum to-plum/80 text-beige rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
            <Send size={18} />
          </motion.button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-olive text-center"
            >
              ✨ Message sent! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
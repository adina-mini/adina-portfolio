import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
          Let's Connect
        </span>
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-beige/70 mb-6 leading-relaxed">
             Reach out anytime.Lets create a World Worth Living-In!
          </p>
          <div className="space-y-4">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-beige/70 hover:text-plum transition p-3 rounded-lg hover:bg-beige/5"
                >
                  {Icon && <Icon size={20} />}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-beige/20 text-beige focus:outline-none focus:ring-2 focus:ring-plum focus:border-transparent transition"
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-beige/20 text-beige focus:outline-none focus:ring-2 focus:ring-plum focus:border-transparent transition"
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-beige/20 text-beige focus:outline-none focus:ring-2 focus:ring-plum focus:border-transparent transition resize-none"
            disabled={loading}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-plum to-plum/80 text-beige rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-plum/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'} 
            <Send size={18} />
          </button>
          {submitted && (
            <p className="text-olive text-center">✨ Message sent! I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

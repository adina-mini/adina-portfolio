import React from 'react';
import { ArrowDown, Download, Briefcase } from 'lucide-react';

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
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="inline-block px-3 py-1 bg-plum/20 text-plum rounded-full text-sm mb-4 border border-plum/30">
            ✨ AI Specialist & Developer
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-beige">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-plum via-beige to-olive bg-clip-text text-transparent">
              Adina Rehman
            </span>
          </h1>
          <p className="text-xl text-beige/70 mb-6 leading-relaxed">
            AI Orchestration Specialist • Generative AI Engineer • Data Analyst
            <br />
            Building intelligent systems with creative precision.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-gradient-to-r from-plum to-plum/80 text-beige rounded-full font-semibold shadow-lg hover:shadow-plum/20 transition flex items-center gap-2"
            >
              <Briefcase size={18} /> View My Work
            </button>
            <button
              onClick={downloadCV}
              className="px-6 py-3 border-2 border-olive text-olive rounded-full font-semibold hover:bg-olive/10 transition flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 bg-beige/10 text-beige rounded-full font-semibold hover:bg-beige/20 transition flex items-center gap-2 border border-beige/20"
            >
              Let's Talk →
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-plum to-olive rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="/images/profile.jpg"
              alt="Adina Rehman"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-plum/30 shadow-2xl"
              onError={(e) => { e.target.src = '/images/fallback.png'; }}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollTo('about')}
      >
        <ArrowDown className="text-beige/40 hover:text-plum transition" />
      </div>
    </section>
  );
};

export default Hero;
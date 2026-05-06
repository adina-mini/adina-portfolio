import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';  // ← IMPORT from data file

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#0F0F0F] rounded-2xl overflow-hidden border border-beige/10 hover:border-plum/30 transition-all duration-300 shadow-xl hover:-translate-y-2">
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => { e.target.src = '/images/fallback.png'; }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-beige mb-2">{project.title}</h3>
        <p className="text-beige/60 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-plum/10 text-plum text-xs rounded-full border border-plum/20">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-beige/70 hover:text-plum transition"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-beige/70 hover:text-olive transition"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-plum to-olive bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Code, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectPreview } from './ProjectPreviews';
import { Project, ThemeMode } from '../types';

interface ProjectsProps {
  theme: ThemeMode;
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Mobile & Web', 'Full-Stack', 'Analytics', 'Systems & Network', 'Enterprise'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-neutral-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                theme === 'dark' ? 'bg-cyan-400' : 'bg-sky-600'
              }`}></span>
              <span>03 / SELECTED WORKS</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              Things I've built.
            </h2>
            <p className={`mt-2 text-base max-w-xl ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Interactive gallery of production-style applications, distributed systems, and analytics tools.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1 rounded-xl self-start md:self-auto backdrop-blur-md border ${
            theme === 'dark' ? 'bg-black/25 border-white/5' : 'bg-neutral-100 border-neutral-200 shadow-xs'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xs font-semibold'
                    : theme === 'dark'
                      ? 'text-neutral-400 hover:text-white hover:bg-white/5'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 group hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-[#0a0c13]/90 border-white/10 hover:border-cyan-500/40 hover:shadow-cyan-950/20'
                  : 'bg-white border-neutral-200 hover:border-sky-400 hover:shadow-sky-100/60 shadow-xs'
              }`}
            >
              {/* Interactive Visual Preview Area */}
              <div className="p-4 sm:p-6 pb-2">
                <div className="relative group/preview">
                  <ProjectPreview type={project.visualType} theme={theme} />
                  
                  {/* Subtle interactive hint overlay */}
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-mono text-cyan-300 border border-white/10 pointer-events-none opacity-0 group-hover/preview:opacity-100 transition-opacity">
                    Interactive Micro-UI
                  </div>
                </div>
              </div>

              {/* Project Content Card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Metadata Line */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className={`text-xs font-mono font-semibold tracking-wider uppercase ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
                    }`}>
                      {project.category}
                    </span>
                    <span className={`text-xs font-mono ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <h3 className={`text-2xl font-bold tracking-tight transition-colors ${
                      theme === 'dark' ? 'text-white group-hover:text-cyan-400' : 'text-neutral-900 group-hover:text-sky-600'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium italic mt-0.5 ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      "{project.tagline}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-5 ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                          theme === 'dark'
                            ? 'bg-[#0f121b] border-white/10 text-neutral-300'
                            : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className={`pt-4 border-t flex items-center justify-between gap-4 ${
                  theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                }`}>
                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                      theme === 'dark'
                        ? 'border-white/10 bg-white/5 text-neutral-200 hover:border-cyan-500/40 hover:text-white'
                        : 'border-neutral-300 bg-neutral-100 text-neutral-800 hover:border-neutral-400 hover:text-neutral-950'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {/* Explore Project Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-md shadow-cyan-600/25 transition-all duration-200 active:scale-95"
                  >
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Explore Project Deep-Dive Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className={`relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl z-10 ${
                theme === 'dark'
                  ? 'bg-[#0a0d15] border-white/10 text-white shadow-black/80'
                  : 'bg-white border-neutral-200 text-neutral-900 shadow-neutral-300/60'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-colors ${
                  theme === 'dark' ? 'border-white/10 hover:bg-white/10 text-neutral-400' : 'border-neutral-200 hover:bg-black/5 text-neutral-600'
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="pr-10 mb-6">
                <span className={`text-xs font-mono font-semibold tracking-wider uppercase block mb-1 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
                }`}>
                  {activeModalProject.category} · Project Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {activeModalProject.title}
                </h3>
                <p className={`text-sm font-medium italic mt-1 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  "{activeModalProject.tagline}"
                </p>
              </div>

              {/* Interactive Visual in Modal */}
              <div className="mb-6">
                <ProjectPreview type={activeModalProject.visualType} theme={theme} />
              </div>

              {/* Description & Highlights */}
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                  }`}>
                    System Description
                  </h4>
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {activeModalProject.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                  }`}>
                    Architectural Highlights
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
                        }`} />
                        <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                  }`}>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-mono px-3 py-1 rounded-md border ${
                          theme === 'dark' 
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                            : 'bg-sky-50 text-sky-800 border-sky-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
                  theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                }`}>
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white shadow-md shadow-cyan-600/30 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className={`text-xs font-medium ${
                      theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

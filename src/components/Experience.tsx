import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Calendar, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2,
  Cpu,
  Smartphone
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ExperienceProps {
  theme: ThemeMode;
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  return (
    <section id="experience" className="py-24 relative border-t border-neutral-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-sky-600'
            }`}></span>
            <span>02 / JOURNEY & INDUSTRY</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Experience
          </h2>
          <p className={`mt-3 text-base max-w-xl ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Hands-on software development across enterprise R&D environments and agile application engineering.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8">
          
          {/* Connecting Vertical Line with cyan-to-sapphire gradient */}
          <div 
            className="absolute top-4 bottom-4 left-[11px] sm:left-[15px] w-[2px] pointer-events-none"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(to bottom, #00f0ff, #2563eb 70%, rgba(255,255,255,0.1))'
                : 'linear-gradient(to bottom, #0284c7, #1d4ed8 70%, rgba(0,0,0,0.1))'
            }}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Animated Timeline Dot */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.isFeatured
                    ? 'bg-cyan-500 border-cyan-200 shadow-lg shadow-cyan-500/50'
                    : 'bg-neutral-800 border-neutral-600'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${exp.isFeatured ? 'bg-white animate-ping' : 'bg-neutral-400'}`} />
                </div>

                {/* Experience Card */}
                <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative ${
                  exp.isFeatured 
                    ? theme === 'dark'
                      ? 'bg-gradient-to-b from-[#0e121e] to-[#0a0d14] border-cyan-500/30 shadow-xl shadow-cyan-950/30'
                      : 'bg-gradient-to-b from-white to-sky-50/40 border-sky-200 shadow-xl shadow-sky-100'
                    : theme === 'dark'
                      ? 'bg-[#0a0c13]/90 border-white/10 hover:border-white/20'
                      : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}>
                  {/* Top Bar with Badges & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 border ${
                        exp.isFeatured
                          ? theme === 'dark'
                            ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                            : 'bg-sky-50 text-sky-800 border-sky-200'
                          : theme === 'dark'
                            ? 'bg-white/5 border-white/10 text-neutral-300'
                            : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                      }`}>
                        {exp.isFeatured 
                          ? <Cpu className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}`} /> 
                          : <Smartphone className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-sky-400' : 'text-sky-700'}`} />}
                        <span>{exp.role}</span>
                      </span>

                      {/* Featured / Completed Badge */}
                      {exp.badge && (
                        <span className={`text-[11px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 shadow-xs ${
                          exp.badge.includes('Completed')
                            ? theme === 'dark'
                              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : theme === 'dark'
                              ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            exp.badge.includes('Completed') ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
                          }`}></span>
                          <span>{exp.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className={`flex items-center gap-1.5 text-xs font-mono ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      <Calendar className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}`} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Company & Division */}
                  <div className="mb-4">
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className={`text-sm font-medium mt-0.5 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
                    }`}>
                      {exp.division}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t ${
                    theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                  }`}>
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
                        }`} />
                        <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className={`flex flex-wrap items-center gap-1.5 pt-4 mt-4 border-t ${
                      theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                    }`}>
                      <span className={`text-[11px] font-mono mr-1 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>Stack:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${
                            tech === 'React.js' || tech === 'Python' || tech === 'Full-Stack Web Dev'
                              ? theme === 'dark'
                                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 font-semibold'
                                : 'bg-sky-50 text-sky-800 border-sky-200 font-semibold'
                              : theme === 'dark'
                                ? 'bg-white/5 text-neutral-300 border-white/10'
                                : 'bg-neutral-100 text-neutral-700 border-neutral-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

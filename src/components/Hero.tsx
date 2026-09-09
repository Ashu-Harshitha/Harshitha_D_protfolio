import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';
import { DigitalWorkspace } from './DigitalWorkspace';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenResume }) => {
  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)' 
            : 'radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 text-xs font-mono tracking-wider uppercase backdrop-blur-md shadow-xs"
              style={{
                borderColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.35)' : 'rgba(14, 165, 233, 0.3)',
                backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.08)' : 'rgba(14, 165, 233, 0.05)',
                color: theme === 'dark' ? '#38bdf8' : '#0284c7'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>SOFTWARE ENGINEER · BUILDER · CREATIVE THINKER</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Turning ideas into <br />
              <span className={`bg-clip-text text-transparent ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white via-cyan-100 to-sky-400'
                  : 'bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-800'
              }`}>
                digital experiences.
              </span>
            </motion.h1>

            {/* Sub-headline with highlighted keywords */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-6 ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              I'm <strong className={theme === 'dark' ? 'text-white font-semibold' : 'text-neutral-900 font-semibold'}>Harshitha D</strong> — a Computer Science student and aspiring Software Engineer focused on building thoughtful, scalable web and mobile applications.
            </motion.p>

            {/* Highlight Keywords Pill Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              {['React', 'TypeScript', 'Java', 'Python', 'Full-Stack'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs font-mono font-medium rounded-md border transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-[#0f121d] border-white/10 text-neutral-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-xs'
                      : 'bg-black/5 border-neutral-200 text-neutral-800 hover:border-cyan-500 hover:text-cyan-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons & Secondary Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary 1: View My Work */}
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Primary 2: Let's Connect */}
              <a
                href="#contact"
                id="hero-lets-connect-btn"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                  theme === 'dark'
                    ? 'border-white/10 bg-[#0e111a] text-neutral-200 hover:border-cyan-400 hover:text-white hover:bg-[#131724]'
                    : 'border-neutral-300 bg-neutral-100 text-neutral-800 hover:border-neutral-400 hover:bg-neutral-200'
                }`}
              >
                <span>Let's Connect</span>
              </a>

              {/* Secondary Link: Download Resume */}
              <button
                onClick={onOpenResume}
                id="hero-download-resume-link"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors py-2 px-1 underline-offset-4 hover:underline ${
                  theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-700 hover:text-cyan-800'
                }`}
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Abstract Interactive Digital Workspace */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <DigitalWorkspace theme={theme} />
          </motion.div>

        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center"
        >
          <a
            href="#about"
            className={`inline-flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 ${
              theme === 'dark' ? 'text-neutral-400 hover:text-indigo-300' : 'text-neutral-500 hover:text-indigo-600'
            }`}
          >
            <span>SCROLL TO EXPLORE ↓</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 opacity-70" />
            </motion.div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

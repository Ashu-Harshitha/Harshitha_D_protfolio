import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-14 border-t transition-colors select-none ${
      theme === 'dark' ? 'bg-[#06080d] border-white/10 text-neutral-400' : 'bg-slate-50 border-neutral-200 text-neutral-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
        }`}>
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
              Harshitha D
            </h3>
            <p className={`text-xs font-mono mt-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Aspiring Software Engineer · Designed & built with curiosity.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors flex items-center gap-1.5 ${
                theme === 'dark' ? 'hover:text-cyan-400 text-neutral-300' : 'hover:text-cyan-700 text-neutral-700'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors flex items-center gap-1.5 ${
                theme === 'dark' ? 'hover:text-cyan-400 text-neutral-300' : 'hover:text-cyan-700 text-neutral-700'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`transition-colors flex items-center gap-1.5 ${
                theme === 'dark' ? 'hover:text-cyan-400 text-neutral-300' : 'hover:text-cyan-700 text-neutral-700'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className={`p-2.5 rounded-full border transition-all ${
              theme === 'dark'
                ? 'border-white/10 bg-[#0c0f18] hover:border-cyan-500/40 text-neutral-300 hover:text-white'
                : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          <p>© 2026 Harshitha D. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with React · TypeScript · Tailwind CSS · Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight, 
  Terminal,
  Code2
} from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenResume: () => void;
  onOpenBuildLog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  theme, 
  toggleTheme, 
  onOpenResume,
  onOpenBuildLog 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-[#0b0c10]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5' 
            : 'bg-[#fafafa]/85 backdrop-blur-md border-b border-neutral-200 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-wider transition-colors duration-200"
          id="nav-brand-link"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-xs shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-200">
            <span className="font-bold tracking-tight">HD</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
              HARSHITHA D
            </span>
            <span className="text-[10px] tracking-widest uppercase text-cyan-400 font-mono -mt-0.5">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-neutral-300 hover:text-cyan-300 hover:bg-white/5'
                  : 'text-neutral-600 hover:text-cyan-700 hover:bg-black/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Build Log, Theme, Resume) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Build Log Trigger */}
          <button
            onClick={onOpenBuildLog}
            id="nav-build-log-btn"
            title="Open Developer Build Log"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
              theme === 'dark'
                ? 'bg-[#0e111a] border-white/10 text-neutral-300 hover:border-cyan-500/50 hover:text-cyan-300 shadow-sm'
                : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:border-cyan-400 hover:text-cyan-700'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>BUILD LOG</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            id="nav-theme-toggle-btn"
            aria-label="Toggle light and dark mode"
            className={`p-2 rounded-full transition-all duration-200 border ${
              theme === 'dark'
                ? 'bg-[#0e111a] border-white/10 text-neutral-300 hover:text-white hover:border-cyan-500/40'
                : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-700" />
            )}
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white shadow-md shadow-cyan-600/30 hover:shadow-cyan-600/40 active:scale-95"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu & Theme Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            id="nav-theme-toggle-mobile"
            aria-label="Toggle theme"
            className={`p-2 rounded-lg border ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
                : 'bg-neutral-100 border-neutral-200 text-neutral-700'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-lg border ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-800 text-neutral-200'
                : 'bg-neutral-100 border-neutral-200 text-neutral-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden border-b overflow-hidden ${
              theme === 'dark'
                ? 'bg-[#0b0c10]/95 backdrop-blur-xl border-neutral-800 text-white'
                : 'bg-white/95 backdrop-blur-xl border-neutral-200 text-neutral-900'
            }`}
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'text-neutral-300 hover:text-white hover:bg-white/5'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 border-t border-neutral-800/40 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBuildLog();
                  }}
                  id="mobile-nav-build-log"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-mono border border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <Terminal className="w-4 h-4" />
                  <span>VIEW BUILD LOG</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  id="mobile-nav-resume"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30"
                >
                  <span>Download Resume</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

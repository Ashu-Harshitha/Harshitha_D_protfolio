import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Approach } from './components/Approach';
import { Leadership } from './components/Leadership';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Personal } from './components/Personal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BuildLog } from './components/BuildLog';
import { ResumeModal } from './components/ResumeModal';
import { ThemeMode } from './types';
import { Terminal } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('harshitha_theme');
    return (saved as ThemeMode) || 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isBuildLogOpen, setIsBuildLogOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('harshitha_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0b0c10] text-[#eaecef]' : 'bg-[#fafafa] text-[#1a1c22]'
    }`}>
      
      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenBuildLog={() => setIsBuildLogOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          theme={theme} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />

        <About theme={theme} />

        <Experience theme={theme} />

        <Projects theme={theme} />

        <Skills theme={theme} />

        <Approach theme={theme} />

        <Leadership theme={theme} />

        <Education theme={theme} />

        <Certifications theme={theme} />

        <Personal theme={theme} />

        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Special Creative Feature: Floating BUILD LOG Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsBuildLogOpen(true)}
          id="floating-build-log-btn"
          aria-label="Open Developer Build Log"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full shadow-xl transition-all duration-300 border bg-[#12141d]/90 backdrop-blur-md border-indigo-500/40 text-indigo-300 hover:border-indigo-400 hover:text-white hover:scale-105 active:scale-95 shadow-indigo-950/40"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <Terminal className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-mono font-semibold tracking-wider">
            BUILD LOG
          </span>
        </button>
      </div>

      {/* Build Log Terminal Modal */}
      <BuildLog
        isOpen={isBuildLogOpen}
        onClose={() => setIsBuildLogOpen(false)}
        theme={theme}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        theme={theme}
      />

    </div>
  );
}

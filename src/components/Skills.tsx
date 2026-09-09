import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  Binary, 
  Sparkles, 
  Network, 
  Radio, 
  CheckCircle2, 
  ArrowRight,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface SkillsProps {
  theme: ThemeMode;
}

// Association map for highlighting related skills on hover
const RELATED_SKILLS: Record<string, string[]> = {
  "React.js": ["TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  "React Native": ["TypeScript", "JavaScript", "React.js", "Tailwind CSS"],
  "TypeScript": ["JavaScript", "React.js", "React Native", "Node.js"],
  "JavaScript": ["TypeScript", "React.js", "HTML", "CSS", "Node.js"],
  "Node.js": ["JavaScript", "TypeScript", "MongoDB", "PostgreSQL", "Computer Networks"],
  "Java": ["Object-Oriented Programming", "Data Structures & Algorithms", "MySQL", "DBMS"],
  "Python": ["Data Structures & Algorithms", "Linux", "Computer Networks", "MySQL"],
  "C": ["Operating Systems", "Data Structures & Algorithms", "Computer Networks"],
  "Tailwind CSS": ["CSS", "HTML", "React.js", "React Native"],
  "MySQL": ["DBMS", "Java", "PHP", "PostgreSQL"],
  "PostgreSQL": ["DBMS", "Node.js", "MySQL"],
  "MongoDB": ["Node.js", "JavaScript", "DBMS"],
  "Git": ["Linux", "React.js", "TypeScript"],
  "Linux": ["Operating Systems", "Git", "Computer Networks", "Python"],
  "Data Structures & Algorithms": ["Java", "Python", "C", "Object-Oriented Programming"],
  "Object-Oriented Programming": ["Java", "Data Structures & Algorithms", "DBMS"],
  "DBMS": ["MySQL", "PostgreSQL", "MongoDB", "Java"],
  "Operating Systems": ["C", "Linux", "Computer Networks"],
  "Computer Networks": ["Node.js", "Python", "Operating Systems"]
};

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategoryName, setActiveCategoryName] = useState<string>('FRONTEND');
  const [viewMode, setViewMode] = useState<'constellation' | 'grid'>('constellation');

  // Category Icon & Accent Mapping
  const categoryConfig: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
    LANGUAGES: {
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30'
    },
    FRONTEND: {
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/30'
    },
    BACKEND: {
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30'
    },
    DATABASES: {
      icon: <Database className="w-4 h-4 text-amber-400" />,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30'
    },
    TOOLS: {
      icon: <Wrench className="w-4 h-4 text-teal-400" />,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'border-teal-500/30'
    },
    CORE: {
      icon: <Binary className="w-4 h-4 text-blue-400" />,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30'
    }
  };

  const isHighlighted = (skill: string) => {
    if (!hoveredSkill) return false;
    if (hoveredSkill === skill) return true;
    const related = RELATED_SKILLS[hoveredSkill] || [];
    return related.includes(skill);
  };

  const activeCategoryObj = SKILL_CATEGORIES.find(c => c.name === activeCategoryName) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className={`py-24 relative border-t ${theme === 'dark' ? 'border-neutral-800/20' : 'border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-3 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
              <span>04 / CAPABILITIES & ARCHITECTURE</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              Tools of the trade.
            </h2>
            <p className={`mt-2 text-base max-w-xl ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Interactive skill constellation centered around core engineering competencies. Hover over any technology to inspect interconnected systems.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className={`flex items-center gap-2 p-1.5 rounded-2xl border self-start md:self-auto backdrop-blur-md ${
            theme === 'dark' ? 'bg-black/20 border-white/10' : 'bg-neutral-100 border-neutral-200'
          }`}>
            <button
              onClick={() => setViewMode('constellation')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'constellation'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30 font-semibold'
                  : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Constellation System</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30 font-semibold'
                  : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Matrix Grid</span>
            </button>
          </div>
        </div>

        {/* Constellation Orbit System: Guaranteed Zero Overlapping Design */}
        {viewMode === 'constellation' ? (
          <div className={`rounded-3xl border transition-all duration-300 overflow-hidden relative ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0b0e17] via-[#090b12] to-[#07080d] border-white/10 shadow-2xl'
              : 'bg-white border-neutral-200 shadow-xl'
          }`}>
            
            {/* Top Hub Navigation Bar (Planetary Nodes) */}
            <div className={`p-4 sm:p-6 border-b backdrop-blur-md ${
              theme === 'dark' ? 'border-white/10 bg-black/25' : 'border-neutral-200 bg-neutral-50/80'
            }`}>
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Radio className={`w-4 h-4 animate-pulse ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'
                  }`}>
                    Orbit Hubs & Domain Sectors
                  </span>
                </div>
                <span className={`text-[11px] font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Select a domain to route constellation
                </span>
              </div>

              {/* 6 Category Pills - Responsive, Clickable, Non-overlapping */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {SKILL_CATEGORIES.map((cat) => {
                  const cfg = categoryConfig[cat.name];
                  const isActive = activeCategoryName === cat.name;

                  return (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategoryName(cat.name)}
                      className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex items-center gap-2.5 ${
                        isActive
                          ? `${cfg.bg} ${cfg.border} ring-1 ring-cyan-400/50 shadow-md ${theme === 'dark' ? '' : 'bg-cyan-50 border-cyan-400'}`
                          : theme === 'dark'
                            ? 'bg-white/5 border-white/5 hover:border-white/15 hover:bg-white/10'
                            : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg ${
                        isActive
                          ? 'bg-cyan-500/20'
                          : theme === 'dark' ? 'bg-black/20' : 'bg-neutral-200/60'
                      }`}>
                        {cfg.icon}
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[11px] font-mono font-bold tracking-wider block truncate ${
                          isActive
                            ? theme === 'dark' ? 'text-white' : 'text-cyan-900'
                            : theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                          {cat.name}
                        </span>
                        <span className={`text-[10px] font-mono ${
                          theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                          {cat.skills.length} skills
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Constellation Radar & Active Sector Deep Dive (Spacious Dual-Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
              
              {/* Left Column: Interactive Constellation Core with Harshitha and Radial SVG Beam Links */}
              <div className={`lg:col-span-5 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[380px] p-6 rounded-2xl border overflow-hidden ${
                theme === 'dark' ? 'bg-black/30 border-white/5' : 'bg-slate-50 border-neutral-200'
              }`}>
                
                {/* Background Concentric Radar Rings */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50%" cy="50%" r="60" fill="none" stroke={theme === 'dark' ? '#38bdf8' : '#0284c7'} strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50%" cy="50%" r="110" fill="none" stroke={theme === 'dark' ? '#2563eb' : '#2563eb'} strokeWidth="1" strokeDasharray="5 5" />
                  <circle cx="50%" cy="50%" r="155" fill="none" stroke={theme === 'dark' ? '#00f0ff' : '#0369a1'} strokeWidth="0.75" strokeDasharray="8 8" />
                  
                  {/* Energy connecting lines from center to perimeter hubs */}
                  <line x1="50%" y1="50%" x2="20%" y2="20%" stroke={theme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.35)'} strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="80%" y2="20%" stroke={theme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.35)'} strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="90%" y2="50%" stroke={theme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.35)'} strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="80%" y2="80%" stroke={theme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.35)'} strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="20%" y2="80%" stroke={theme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.35)'} strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="10%" y2="50%" stroke={theme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.35)'} strokeWidth="1.5" />
                </svg>

                {/* Central Node: Harshitha */}
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-xl shadow-cyan-500/30">
                    <div className={`w-full h-full rounded-full flex flex-col items-center justify-center text-center p-2 ${
                      theme === 'dark' ? 'bg-[#090b12]' : 'bg-white'
                    }`}>
                      <span className={`text-[10px] font-mono uppercase tracking-widest font-semibold ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
                      }`}>Core</span>
                      <span className={`text-sm font-bold tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                      }`}>Harshitha</span>
                      <span className={`text-[9px] font-mono mt-0.5 flex items-center gap-1 ${
                        theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700 font-semibold'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                        }`}></span>
                        Full-Stack
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* 6 Peripheral Satellites placed in fixed, clean coordinates */}
                <div className="absolute inset-0 pointer-events-auto">
                  {SKILL_CATEGORIES.map((cat, i) => {
                    const cfg = categoryConfig[cat.name];
                    const isSelected = activeCategoryName === cat.name;

                    // Fixed geometric quadrant placement around 300px box
                    const positions = [
                      { top: '12%', left: '12%' },    // LANGUAGES
                      { top: '12%', right: '12%' },   // FRONTEND
                      { top: '48%', right: '6%' },    // BACKEND
                      { bottom: '12%', right: '12%' },// DATABASES
                      { bottom: '12%', left: '12%' }, // TOOLS
                      { top: '48%', left: '6%' }      // CORE
                    ];

                    const pos = positions[i] || positions[0];

                    return (
                      <button
                        key={cat.name}
                        onClick={() => setActiveCategoryName(cat.name)}
                        style={pos}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-xl border text-[10px] font-mono font-bold transition-all duration-300 flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-cyan-500 text-white border-cyan-300 shadow-lg shadow-cyan-500/50 scale-110 z-30'
                            : theme === 'dark'
                              ? 'bg-[#10131e]/90 border-white/10 text-neutral-300 hover:border-cyan-400 hover:text-white'
                              : 'bg-white border-neutral-300 text-neutral-800 hover:border-cyan-500 shadow-xs'
                        }`}
                      >
                        {cfg.icon}
                        <span className="hidden sm:inline">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className={`absolute bottom-2 text-center text-[10px] font-mono ${
                  theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                }`}>
                  Click any satellite to focus cluster
                </div>
              </div>

              {/* Right Column: Active Domain's Constellation of Skills (Clean, Spacious, Zero Overlap) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Domain Title & Description */}
                  <div className={`flex items-center justify-between pb-3 mb-4 border-b ${
                    theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl ${categoryConfig[activeCategoryObj.name].bg} ${categoryConfig[activeCategoryObj.name].border} border`}>
                        {categoryConfig[activeCategoryObj.name].icon}
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-widest font-semibold block ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
                        }`}>
                          Domain Constellation
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                          theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                          {activeCategoryObj.name}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                      theme === 'dark'
                        ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                        : 'bg-cyan-50 text-cyan-800 border-cyan-200 font-semibold'
                    }`}>
                      {activeCategoryObj.skills.length} Verified Technologies
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm mb-6 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {activeCategoryObj.description}
                  </p>

                  {/* Skills Constellation Badges with Hover Association */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {activeCategoryObj.skills.map((skill) => {
                      const highlighted = isHighlighted(skill);
                      const isDirectHover = hoveredSkill === skill;
                      const related = RELATED_SKILLS[skill] || [];

                      return (
                        <div
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                            isDirectHover
                              ? theme === 'dark'
                                ? 'bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border-cyan-400 shadow-lg shadow-cyan-950/40 scale-[1.02]'
                                : 'bg-cyan-50 border-cyan-500 shadow-md scale-[1.02]'
                              : highlighted
                                ? theme === 'dark'
                                  ? 'bg-cyan-500/20 border-cyan-400/80 scale-[1.01]'
                                  : 'bg-cyan-50/80 border-cyan-400 scale-[1.01]'
                                : theme === 'dark'
                                  ? 'bg-white/5 border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.08]'
                                  : 'bg-neutral-50 border-neutral-200 hover:border-cyan-500'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`text-xs sm:text-sm font-mono font-bold ${
                              isDirectHover || highlighted
                                ? theme === 'dark' ? 'text-cyan-300' : 'text-cyan-800'
                                : theme === 'dark' ? 'text-white' : 'text-neutral-900'
                            }`}>
                              {skill}
                            </span>
                            <CheckCircle2 className={`w-3.5 h-3.5 ${
                              isDirectHover || highlighted
                                ? theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                                : theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                            }`} />
                          </div>

                          {related.length > 0 && (
                            <div className={`text-[10px] font-mono flex items-center gap-1 ${
                              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                              <span className={theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}>Links:</span>
                              <span className="truncate">{related.slice(0, 3).join(', ')}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Status & Ecosystem Feedback */}
                <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 text-xs font-mono ${
                  theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-neutral-100/70 border-neutral-200'
                }`}>
                  <div className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    <Sparkles className={`w-4 h-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span>
                      {hoveredSkill ? (
                        <>Highlighting interconnected nodes for <strong className={theme === 'dark' ? 'text-cyan-300' : 'text-cyan-800'}>{hoveredSkill}</strong></>
                      ) : (
                        "Hover any technology to see linked systems across the entire stack."
                      )}
                    </span>
                  </div>

                  {hoveredSkill && (
                    <span className={`font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'}`}>
                      Active: {hoveredSkill}
                    </span>
                  )}
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* Full Matrix Grid View - Beautiful, Responsive, Zero Overlap */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category) => {
              const cfg = categoryConfig[category.name];
              return (
                <div
                  key={category.name}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-[#0e111a]/90 border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20'
                      : 'bg-white border-neutral-200 hover:border-cyan-400 shadow-sm'
                  }`}
                >
                  <div className={`flex items-center justify-between mb-4 pb-3 border-b ${
                    theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl ${cfg.bg} ${cfg.border} border`}>
                        {cfg.icon}
                      </div>
                      <h3 className={`text-sm font-mono font-bold tracking-wider ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {category.name}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      theme === 'dark'
                        ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                        : 'text-cyan-800 bg-cyan-50 border-cyan-200 font-semibold'
                    }`}>
                      {category.skills.length}
                    </span>
                  </div>

                  <p className={`text-xs mb-5 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const highlighted = isHighlighted(skill);
                      const isDirectHover = hoveredSkill === skill;
                      return (
                        <span
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`px-3 py-1.5 text-xs font-mono rounded-xl border transition-all duration-200 cursor-pointer ${
                            isDirectHover
                              ? 'bg-cyan-600 text-white border-cyan-300 scale-105 shadow-md shadow-cyan-600/30'
                              : highlighted
                                ? theme === 'dark'
                                  ? 'bg-cyan-500/25 text-cyan-200 border-cyan-400'
                                  : 'bg-cyan-100 text-cyan-800 border-cyan-400 font-semibold'
                                : theme === 'dark'
                                  ? 'bg-white/5 border-white/10 text-neutral-300 hover:border-cyan-500/40 hover:text-white'
                                  : 'bg-neutral-100 border-neutral-200 text-neutral-800 hover:border-cyan-400'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

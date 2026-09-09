import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Database, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Pause,
  GitBranch,
  Terminal
} from 'lucide-react';
import { ThemeMode } from '../types';

interface DigitalWorkspaceProps {
  theme: ThemeMode;
}

export const DigitalWorkspace: React.FC<DigitalWorkspaceProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'system' | 'ui' | 'code'>('system');
  const [metricCounter, setMetricCounter] = useState(99.4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] flex items-center justify-center p-4 select-none perspective-[1000px]"
      id="hero-digital-workspace"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.35) 0%, rgba(37, 99, 235, 0.2) 60%, transparent 80%)',
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`
        }}
      />
      <div 
        className="absolute w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700 -z-10 bottom-10 right-10"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`
        }}
      />

      {/* Main Composite Stage */}
      <div className="relative w-full max-w-[500px] h-[400px]">
        
        {/* CARD 1: Code Fragment & Architecture Card (Top Left) */}
        <motion.div
          animate={{
            x: mousePos.x * -25,
            y: mousePos.y * -25,
            rotateZ: mousePos.x * 2,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className={`absolute -top-4 -left-2 sm:left-2 w-[280px] sm:w-[310px] rounded-2xl p-4 shadow-xl backdrop-blur-xl border transition-colors duration-300 z-20 ${
            theme === 'dark'
              ? 'bg-[#0c0f18]/90 border-white/10 shadow-black/60 text-neutral-200'
              : 'bg-white/90 border-neutral-200 shadow-neutral-300/40 text-neutral-800'
          }`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between pb-2.5 mb-2.5 border-b ${
            theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
          }`}>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className={`text-[11px] font-mono font-medium ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>pipeline.ts</span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold border ${
              theme === 'dark'
                ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20'
                : 'bg-sky-50 text-sky-800 border-sky-200'
            }`}>
              v2.6·prod
            </span>
          </div>

          {/* Syntax Code */}
          <div className="font-code text-[11px] leading-relaxed space-y-1">
            <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>
              <span className={theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}>interface</span>{' '}
              <span className={theme === 'dark' ? 'text-sky-300' : 'text-indigo-700 font-semibold'}>FullStackSystem</span> {'{'}
            </p>
            <p className={`pl-3 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
              frontend: <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}>'React'</span> | <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}>'Native'</span>;
            </p>
            <p className={`pl-3 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
              runtime: <span className={theme === 'dark' ? 'text-cyan-300' : 'text-sky-700'}>'TypeScript'</span>;
            </p>
            <p className={`pl-3 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
              state: <span className={theme === 'dark' ? 'text-amber-300' : 'text-amber-700'}>ReactiveStream</span>;
            </p>
            <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>{'}'}</p>
            <div className={`pt-1 flex items-center justify-between text-[10px] font-mono ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              <span className={`flex items-center gap-1 ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
              }`}>
                <CheckCircle2 className="w-3 h-3" /> compiled cleanly
              </span>
              <span className={theme === 'dark' ? 'text-cyan-400' : 'text-sky-700 font-semibold'}>18ms</span>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Central Interconnected Systems & Nodes Visualizer (Middle Ground) */}
        <motion.div
          animate={{
            x: mousePos.x * 18,
            y: mousePos.y * 18,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`absolute top-28 right-0 sm:right-2 w-[270px] sm:w-[290px] rounded-2xl p-4 shadow-xl backdrop-blur-xl border z-30 transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-[#0f1320]/90 border-white/10 shadow-black/60 text-neutral-200'
              : 'bg-white/90 border-neutral-200 shadow-neutral-300/40 text-neutral-800'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <Cpu className={`w-4 h-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}`} />
              <span className="text-xs font-semibold tracking-tight">System Interconnect</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-1 rounded-md transition-colors ${
                theme === 'dark' ? 'hover:bg-white/10 text-neutral-400' : 'hover:bg-neutral-100 text-neutral-600'
              }`}
              title={isPlaying ? "Pause simulation" : "Resume simulation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Connected Nodes Diagram */}
          <div className={`relative h-24 rounded-xl p-2 overflow-hidden flex items-center justify-around border ${
            theme === 'dark' ? 'bg-black/30 border-white/5' : 'bg-slate-50 border-neutral-200'
          }`}>
            {/* SVG Connecting Wire Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line x1="25%" y1="50%" x2="50%" y2="50%" stroke={theme === 'dark' ? "rgba(56, 189, 248, 0.4)" : "rgba(2, 132, 199, 0.4)"} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50%" y1="50%" x2="75%" y2="50%" stroke={theme === 'dark' ? "rgba(37, 99, 235, 0.4)" : "rgba(37, 99, 235, 0.4)"} strokeWidth="1.5" strokeDasharray="3 3" />
              {isPlaying && (
                <circle cx="37%" cy="50%" r="2" fill={theme === 'dark' ? "#38bdf8" : "#0284c7"}>
                  <animate attributeName="cx" values="25%;50%" dur="1.8s" repeatCount="indefinite" />
                </circle>
              )}
              {isPlaying && (
                <circle cx="62%" cy="50%" r="2" fill="#60a5fa">
                  <animate attributeName="cx" values="50%;75%" dur="1.8s" repeatCount="indefinite" />
                </circle>
              )}
            </svg>

            {/* Node 1: Client / UI */}
            <div className="relative z-10 flex flex-col items-center">
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-sm ${
                theme === 'dark'
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400'
                  : 'bg-sky-50 border-sky-300 text-sky-700'
              }`}>
                <Layers className="w-4 h-4" />
              </div>
              <span className={`text-[9px] font-mono mt-1 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>Client</span>
            </div>

            {/* Node 2: Core API / Socket */}
            <div className="relative z-10 flex flex-col items-center">
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-sm ${
                theme === 'dark'
                  ? 'bg-blue-500/15 border-blue-500/40 text-blue-400'
                  : 'bg-blue-50 border-blue-300 text-blue-700'
              }`}>
                <GitBranch className="w-4 h-4" />
              </div>
              <span className={`text-[9px] font-mono mt-1 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>Broker</span>
            </div>

            {/* Node 3: Database / Engine */}
            <div className="relative z-10 flex flex-col items-center">
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-sm ${
                theme === 'dark'
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                  : 'bg-emerald-50 border-emerald-300 text-emerald-700'
              }`}>
                <Database className="w-4 h-4" />
              </div>
              <span className={`text-[9px] font-mono mt-1 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>Store</span>
            </div>
          </div>

          <div className={`mt-2.5 flex items-center justify-between text-[10px] font-mono ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              UDP/WS Connected
            </span>
            <span className={theme === 'dark' ? 'text-cyan-400' : 'text-sky-700 font-semibold'}>Latency: 4ms</span>
          </div>
        </motion.div>

        {/* CARD 3: UI Component Preview & Interactive Control (Bottom Left) */}
        <motion.div
          animate={{
            x: mousePos.x * -15,
            y: mousePos.y * 15,
          }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
          className={`absolute bottom-2 left-4 sm:left-6 w-[260px] sm:w-[280px] rounded-2xl p-3.5 shadow-xl backdrop-blur-xl border z-40 transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-[#0b0e17]/90 border-white/10 shadow-black/60 text-neutral-200'
              : 'bg-white/95 border-neutral-200 shadow-neutral-300/40 text-neutral-800'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}`} />
              <span className="text-[11px] font-semibold">User Experience</span>
            </div>
            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
              theme === 'dark'
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            }`}>
              R&D Active
            </span>
          </div>

          {/* Interactive micro-tab switcher */}
          <div className={`grid grid-cols-3 gap-1 p-0.5 rounded-lg text-[10px] font-medium text-center mb-2.5 ${
            theme === 'dark' ? 'bg-black/20' : 'bg-neutral-100'
          }`}>
            {(['system', 'ui', 'code'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMetricCounter(prev => +(prev + 0.1).toFixed(1));
                }}
                className={`py-1 rounded capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs font-semibold'
                    : theme === 'dark' ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Metric Bar */}
          <div className={`flex items-center justify-between text-[10px] ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            <span>Responsiveness</span>
            <span className={`font-mono font-semibold ${
              theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'
            }`}>{metricCounter}%</span>
          </div>
          <div className={`w-full h-1.5 rounded-full mt-1 overflow-hidden ${
            theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
          }`}>
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              animate={{ width: `${Math.min(100, metricCounter)}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* FLOATING CHIPS & BADGES */}
        <motion.div
          animate={{
            x: mousePos.x * 30,
            y: mousePos.y * -20,
          }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className={`absolute -top-3 right-6 sm:right-16 z-30 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono flex items-center gap-1.5 shadow-lg ${
            theme === 'dark'
              ? 'bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 shadow-cyan-950/40'
              : 'bg-white border border-sky-300 text-sky-800 shadow-sky-100/80 shadow-md'
          }`}
        >
          <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
          <span>Full-Stack Architecture</span>
        </motion.div>

        <motion.div
          animate={{
            x: mousePos.x * -20,
            y: mousePos.y * 30,
          }}
          transition={{ type: "spring", stiffness: 110, damping: 18 }}
          className={`absolute bottom-6 right-4 sm:right-12 z-20 px-3 py-1.5 rounded-xl backdrop-blur-md text-[10px] font-mono flex items-center gap-2 shadow-lg ${
            theme === 'dark'
              ? 'bg-[#0d1017]/90 border border-white/10 text-neutral-300'
              : 'bg-white border border-neutral-200 text-neutral-800 shadow-md'
          }`}
        >
          <Terminal className={`w-3 h-3 ${theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}`} />
          <span>Creative Problem Solving</span>
        </motion.div>
      </div>
    </div>
  );
};

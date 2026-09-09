import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Compass, 
  Sun, 
  Wind, 
  Zap, 
  Activity, 
  Send, 
  CheckCircle, 
  Search, 
  ShoppingBag, 
  Calendar, 
  Users, 
  Radio, 
  FileCheck2, 
  TrendingUp,
  Flame,
  ShieldCheck,
  Building,
  DollarSign
} from 'lucide-react';
import { ThemeMode } from '../types';

interface PreviewProps {
  type: 'locora' | 'uniflow' | 'ecoecon' | 'comsis' | 'certverify';
  theme: ThemeMode;
}

export const ProjectPreview: React.FC<PreviewProps> = ({ type, theme }) => {
  // Locora interactive state
  const [selectedSpot, setSelectedSpot] = useState<'lake' | 'cafe' | 'craft'>('lake');

  // UniFlow interactive tab
  const [activeCampusTab, setActiveCampusTab] = useState<'market' | 'events' | 'mentors'>('market');

  // Eco-Econ interactive simulation
  const [solarCapacity, setSolarCapacity] = useState(15); // kW
  const [inflationRate, setInflationRate] = useState(4.5); // %

  // COMSIS interactive socket packets
  const [packetsSent, setPacketsSent] = useState(142);
  const [lastPacketLatency, setLastPacketLatency] = useState(3.2);

  // CertVerify interactive search
  const [certIdInput, setCertIdInput] = useState('CERT-2026-PU901');
  const [verifiedStatus, setVerifiedStatus] = useState<boolean | null>(true);

  if (type === 'locora') {
    return (
      <div className={`w-full h-72 sm:h-80 rounded-xl overflow-hidden border relative flex flex-col p-4 select-none ${
        theme === 'dark' ? 'bg-[#0e111a] border-white/10 text-white' : 'bg-slate-50 border-neutral-200 text-neutral-900'
      }`}>
        {/* Mobile Header Bar */}
        <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
        }`}>
          <div className="flex items-center gap-2">
            <Compass className={`w-4 h-4 animate-spin ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} style={{ animationDuration: '8s' }} />
            <span className="text-xs font-mono font-semibold">Locora · Urban Eco Explorer</span>
          </div>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
            theme === 'dark' ? 'bg-emerald-500/20 text-emerald-300 border-transparent' : 'bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold'
          }`}>
            GPS 360° Live
          </span>
        </div>

        {/* Map Simulation & Pins */}
        <div className={`relative flex-1 rounded-lg border p-3 overflow-hidden ${
          theme === 'dark' ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50/50 border-emerald-200'
        }`}>
          {/* Subtle Vector Road Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 Q100,20 200,80 T400,60" fill="none" stroke="#10b981" strokeWidth="2" />
            <path d="M80,0 Q120,100 90,200" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M220,0 Q260,120 320,200" fill="none" stroke="#059669" strokeWidth="1.5" />
          </svg>

          {/* Interactive Map Pins */}
          <button
            onClick={() => setSelectedSpot('lake')}
            className={`absolute top-6 left-12 p-1.5 rounded-full shadow-lg transition-transform ${
              selectedSpot === 'lake'
                ? 'scale-125 ring-2 ring-emerald-400 bg-emerald-500 text-white'
                : theme === 'dark'
                  ? 'bg-neutral-800 text-emerald-400'
                  : 'bg-white text-emerald-700 border border-emerald-300 shadow-xs'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setSelectedSpot('cafe')}
            className={`absolute top-16 right-20 p-1.5 rounded-full shadow-lg transition-transform ${
              selectedSpot === 'cafe'
                ? 'scale-125 ring-2 ring-emerald-400 bg-emerald-500 text-white'
                : theme === 'dark'
                  ? 'bg-neutral-800 text-emerald-400'
                  : 'bg-white text-emerald-700 border border-emerald-300 shadow-xs'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setSelectedSpot('craft')}
            className={`absolute bottom-8 left-28 p-1.5 rounded-full shadow-lg transition-transform ${
              selectedSpot === 'craft'
                ? 'scale-125 ring-2 ring-emerald-400 bg-emerald-500 text-white'
                : theme === 'dark'
                  ? 'bg-neutral-800 text-emerald-400'
                  : 'bg-white text-emerald-700 border border-emerald-300 shadow-xs'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
          </button>

          {/* Dynamic Floating Spot Card */}
          <motion.div 
            key={selectedSpot}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute bottom-2 right-2 left-2 sm:left-auto sm:w-64 p-3 rounded-xl backdrop-blur-md border shadow-lg ${
              theme === 'dark' ? 'bg-[#151926]/90 border-emerald-500/30' : 'bg-white border-emerald-200 text-neutral-900 shadow-md'
            }`}
          >
            <div className={`flex items-center justify-between text-[11px] font-mono mb-1 ${
              theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700 font-semibold'
            }`}>
              <span>{selectedSpot === 'lake' ? 'Eco-Reserve' : selectedSpot === 'cafe' ? 'Local Artisan Hub' : 'Heritage Workshop'}</span>
              <span className="flex items-center gap-0.5">★ 4.9</span>
            </div>
            <p className="text-xs font-bold leading-tight mb-1">
              {selectedSpot === 'lake' && "Sankey Tank Wetlands & Bio-Walk"}
              {selectedSpot === 'cafe' && "Terra Micro-Roasters & Community Cafe"}
              {selectedSpot === 'craft' && "Indigenous Clay Craft Collective"}
            </p>
            <div className="flex gap-1.5">
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                theme === 'dark' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
              }`}>
                Hidden Gem
              </span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                theme === 'dark' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-800'
              }`}>
                Verified Local
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (type === 'uniflow') {
    return (
      <div className={`w-full h-72 sm:h-80 rounded-xl overflow-hidden border relative flex flex-col p-4 select-none ${
        theme === 'dark' ? 'bg-[#0f121d] border-white/10 text-white' : 'bg-slate-50 border-neutral-200 text-neutral-900'
      }`}>
        {/* Top Navbar */}
        <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
        }`}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
              U
            </div>
            <span className="text-xs font-mono font-semibold">UniFlow · Unified Campus Hub</span>
          </div>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
            theme === 'dark' ? 'bg-indigo-500/20 text-indigo-300 border-transparent' : 'bg-indigo-50 text-indigo-800 border-indigo-200 font-semibold'
          }`}>
            SSO: Verified Student
          </span>
        </div>

        {/* Module Switcher Pills */}
        <div className={`grid grid-cols-3 gap-1.5 mb-3 p-1 rounded-lg text-xs font-medium ${
          theme === 'dark' ? 'bg-black/20' : 'bg-neutral-200/70'
        }`}>
          <button
            onClick={() => setActiveCampusTab('market')}
            className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1.5 transition-colors ${
              activeCampusTab === 'market'
                ? 'bg-indigo-600 text-white shadow-xs'
                : theme === 'dark'
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Marketplace</span>
          </button>
          <button
            onClick={() => setActiveCampusTab('events')}
            className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1.5 transition-colors ${
              activeCampusTab === 'events'
                ? 'bg-indigo-600 text-white shadow-xs'
                : theme === 'dark'
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Events</span>
          </button>
          <button
            onClick={() => setActiveCampusTab('mentors')}
            className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1.5 transition-colors ${
              activeCampusTab === 'mentors'
                ? 'bg-indigo-600 text-white shadow-xs'
                : theme === 'dark'
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mentoring</span>
          </button>
        </div>

        {/* Dynamic Campus Content */}
        <div className={`flex-1 rounded-lg border p-3 flex flex-col justify-center ${
          theme === 'dark' ? 'bg-black/10 border-white/5' : 'bg-white border-neutral-200 shadow-xs'
        }`}>
          {activeCampusTab === 'market' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
              <div className={`flex items-center justify-between p-2 rounded-md border text-xs ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-amber-500/20 text-amber-500 flex items-center justify-center text-xs font-mono">
                    📚
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px]">Database Management Systems (Korth 7th Ed)</span>
                    <span className={`text-[10px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Verified Peer: CS-Sem 5</span>
                  </div>
                </div>
                <span className={`font-mono font-bold text-xs ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>₹350</span>
              </div>
              <div className={`flex items-center justify-between p-2 rounded-md border text-xs ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-indigo-500/20 text-indigo-500 flex items-center justify-center text-xs font-mono">
                    📐
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px]">Casio FX-991CW Scientific Calculator</span>
                    <span className={`text-[10px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Verified Peer: EC-Sem 3</span>
                  </div>
                </div>
                <span className={`font-mono font-bold text-xs ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>₹600</span>
              </div>
            </motion.div>
          )}

          {activeCampusTab === 'events' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
              <div className={`p-2.5 rounded-md border ${
                theme === 'dark' ? 'bg-violet-500/10 border-violet-500/20' : 'bg-violet-50 border-violet-200'
              }`}>
                <div className={`flex items-center justify-between text-xs font-bold ${
                  theme === 'dark' ? 'text-violet-300' : 'text-violet-900'
                }`}>
                  <span>HackPresidency 2026</span>
                  <span className={`font-mono text-[10px] px-1.5 rounded ${
                    theme === 'dark' ? 'bg-violet-500/20' : 'bg-violet-100 text-violet-800'
                  }`}>48h Sprint</span>
                </div>
                <p className={`text-[10px] mt-1 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>Main Auditorium · 320 Teams Registered</p>
              </div>
              <div className={`p-2.5 rounded-md border ${
                theme === 'dark' ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-200'
              }`}>
                <div className={`flex items-center justify-between text-xs font-bold ${
                  theme === 'dark' ? 'text-indigo-300' : 'text-indigo-900'
                }`}>
                  <span>Tech Colloquium on Distributed Systems</span>
                  <span className={`font-mono text-[10px] px-1.5 rounded ${
                    theme === 'dark' ? 'bg-indigo-500/20' : 'bg-indigo-100 text-indigo-800'
                  }`}>Seminar</span>
                </div>
                <p className={`text-[10px] mt-1 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>Keynote Hall B · RSVP Confirmed</p>
              </div>
            </motion.div>
          )}

          {activeCampusTab === 'mentors' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
              <div className={`flex items-center justify-between p-2.5 rounded-md border ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    theme === 'dark' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    HD
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Harshitha D</span>
                    <span className={`text-[10px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Full-Stack & Systems · 12 Mentees</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  theme === 'dark' ? 'bg-emerald-500/20 text-emerald-400 border-transparent' : 'bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold'
                }`}>
                  Book Slot
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'ecoecon') {
    const lccSavings = Math.round(solarCapacity * 840 * (1 + inflationRate / 100));
    return (
      <div className={`w-full h-72 sm:h-80 rounded-xl overflow-hidden border relative flex flex-col p-4 select-none ${
        theme === 'dark' ? 'bg-[#0f1416] border-white/10 text-white' : 'bg-slate-50 border-neutral-200 text-neutral-900'
      }`}>
        <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
        }`}>
          <div className="flex items-center gap-2">
            <Zap className={`w-4 h-4 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-700'}`} />
            <span className="text-xs font-mono font-semibold">Eco-Econ · Life Cycle Cost Analysis</span>
          </div>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
            theme === 'dark' ? 'bg-amber-500/20 text-amber-300 border-transparent' : 'bg-amber-50 text-amber-800 border-amber-200 font-semibold'
          }`}>
            LCCA Engine
          </span>
        </div>

        {/* Live Simulation Controls */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className={`p-2.5 rounded-lg border ${
            theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-white border-neutral-200 shadow-xs'
          }`}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>Solar PV Capacity</span>
              <span className={`font-mono font-bold ${theme === 'dark' ? 'text-amber-400' : 'text-amber-700'}`}>{solarCapacity} kW</span>
            </div>
            <input
              type="range"
              min={5}
              max={50}
              value={solarCapacity}
              onChange={(e) => setSolarCapacity(Number(e.target.value))}
              className={`w-full h-1 rounded-lg appearance-none cursor-pointer accent-amber-500 ${
                theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-300'
              }`}
            />
          </div>

          <div className={`p-2.5 rounded-lg border ${
            theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-white border-neutral-200 shadow-xs'
          }`}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>Utility Inflation</span>
              <span className={`font-mono font-bold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>{inflationRate}%</span>
            </div>
            <input
              type="range"
              min={2}
              max={10}
              step={0.5}
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className={`w-full h-1 rounded-lg appearance-none cursor-pointer accent-emerald-500 ${
                theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-300'
              }`}
            />
          </div>
        </div>

        {/* Analytics Output Graph / Metrics */}
        <div className={`flex-1 rounded-lg border p-3 flex flex-col justify-between ${
          theme === 'dark' ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50/50 border-emerald-200 text-neutral-900'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Net 15-Year Projected Savings</span>
            <span className={`font-mono text-base font-bold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>₹{lccSavings.toLocaleString()}</span>
          </div>

          {/* Micro Bar Projection */}
          <div className="flex items-end gap-1.5 h-14 pt-2">
            {[40, 55, 65, 78, 92, 110, 125, 145].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className="w-full bg-gradient-to-t from-emerald-600 to-amber-500 rounded-t-xs"
                  style={{ height: `${(val * solarCapacity) / 50}%` }}
                />
                <span className={`text-[8px] font-mono ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>Y{i * 2 + 1}</span>
              </div>
            ))}
          </div>

          <div className={`flex items-center justify-between text-[10px] font-mono pt-1 border-t ${
            theme === 'dark' ? 'text-neutral-400 border-white/5' : 'text-neutral-600 border-neutral-200'
          }`}>
            <span>Payback Period: ~3.8 Years</span>
            <span className={theme === 'dark' ? 'text-amber-300' : 'text-amber-800 font-semibold'}>Degradation: 0.5%/yr</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'comsis') {
    return (
      <div className={`w-full h-72 sm:h-80 rounded-xl overflow-hidden border relative flex flex-col p-4 select-none ${
        theme === 'dark' ? 'bg-[#0a0d18] border-white/10 text-white' : 'bg-slate-50 border-neutral-200 text-neutral-900'
      }`}>
        <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
        }`}>
          <div className="flex items-center gap-2">
            <Radio className={`w-4 h-4 animate-pulse ${theme === 'dark' ? 'text-cyan-400' : 'text-sky-700'}`} />
            <span className="text-xs font-mono font-semibold">COMSIS · Real-Time UDP Socket</span>
          </div>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
            theme === 'dark' ? 'bg-cyan-500/20 text-cyan-300 border-transparent' : 'bg-sky-50 text-sky-800 border-sky-200 font-semibold'
          }`}>
            Python Server :9092
          </span>
        </div>

        {/* Network Nodes Grid */}
        <div className={`flex-1 rounded-lg border p-3 flex flex-col justify-between font-mono ${
          theme === 'dark' ? 'bg-black/30 border-cyan-500/20' : 'bg-white border-sky-200 shadow-xs'
        }`}>
          <div className="flex items-center justify-around py-2">
            <div className="text-center">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mx-auto text-xs font-bold ${
                theme === 'dark' ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-400' : 'bg-sky-50 border-sky-300 text-sky-800'
              }`}>
                Client A
              </div>
              <span className={`text-[9px] mt-1 block ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>React.js</span>
            </div>

            <div className="flex flex-col items-center">
              <span className={`text-[9px] mb-1 font-semibold ${theme === 'dark' ? 'text-cyan-300' : 'text-sky-700'}`}>UDP Datagrams</span>
              <div className={`w-24 h-1 rounded-full overflow-hidden relative ${
                theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
              }`}>
                <div className={`w-6 h-full rounded-full animate-pulse ${
                  theme === 'dark' ? 'bg-cyan-400' : 'bg-sky-600'
                }`} />
              </div>
              <span className={`text-[9px] mt-1 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>{lastPacketLatency} ms</span>
            </div>

            <div className="text-center">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mx-auto text-xs font-bold ${
                theme === 'dark' ? 'bg-indigo-500/10 border-indigo-400/40 text-indigo-400' : 'bg-indigo-50 border-indigo-300 text-indigo-800'
              }`}>
                Host Svr
              </div>
              <span className={`text-[9px] mt-1 block ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Python Socket</span>
            </div>
          </div>

          {/* Interactive Ping/Packet Dispatcher */}
          <div className={`p-2 rounded border flex items-center justify-between text-xs ${
            theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <span className={`text-[11px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Packets Streamed: <strong className={theme === 'dark' ? 'text-cyan-300' : 'text-sky-800'}>{packetsSent}</strong>
            </span>
            <button
              onClick={() => {
                setPacketsSent(p => p + 1);
                setLastPacketLatency(+(2.4 + Math.random() * 1.5).toFixed(1));
              }}
              className="px-2.5 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-mono flex items-center gap-1 active:scale-95 transition-transform"
            >
              <Send className="w-3 h-3" />
              <span>Send Datagram</span>
            </button>
          </div>

          <div className={`text-[10px] flex justify-between ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
            <span>Buffer: 64 KB</span>
            <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700 font-semibold'}>Zero Packet Loss</span>
          </div>
        </div>
      </div>
    );
  }

  // CertVerify
  return (
    <div className={`w-full h-72 sm:h-80 rounded-xl overflow-hidden border relative flex flex-col p-4 select-none ${
      theme === 'dark' ? 'bg-[#10121a] border-white/10 text-white' : 'bg-slate-50 border-neutral-200 text-neutral-900'
    }`}>
      <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
        theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
      }`}>
        <div className="flex items-center gap-2">
          <ShieldCheck className={`w-4 h-4 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`} />
          <span className="text-xs font-mono font-semibold">CertVerify · Credential Trust Engine</span>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
          theme === 'dark' ? 'bg-emerald-500/20 text-emerald-300 border-transparent' : 'bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold'
        }`}>
          Java Servlet DAO
        </span>
      </div>

      {/* Interactive Verification Search Input */}
      <div className="relative mb-3">
        <input
          type="text"
          value={certIdInput}
          onChange={(e) => {
            setCertIdInput(e.target.value);
            setVerifiedStatus(e.target.value.length > 5);
          }}
          placeholder="Enter Certificate ID..."
          className={`w-full px-3 py-2 pl-8 rounded-lg border text-xs font-mono focus:outline-hidden focus:border-indigo-500 ${
            theme === 'dark' ? 'bg-black/20 border-white/10 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}
        />
        <Search className={`w-3.5 h-3.5 absolute left-2.5 top-2.5 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`} />
      </div>

      {/* Certificate Validation Card */}
      <div className={`flex-1 rounded-lg border p-3.5 flex flex-col justify-between ${
        theme === 'dark' ? 'bg-neutral-950/40 border-emerald-500/30' : 'bg-white border-emerald-200 shadow-xs'
      }`}>
        <div className="flex items-start justify-between">
          <div>
            <span className={`text-[10px] font-mono uppercase tracking-wider block ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
            }`}>Certificate Of Completion</span>
            <p className={`text-xs font-bold mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Full-Stack & Systems Engineering</p>
            <span className={`text-[10px] font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Issued to: Harshitha D</span>
          </div>
          {verifiedStatus ? (
            <div className={`flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${
              theme === 'dark'
                ? 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30'
                : 'text-emerald-800 bg-emerald-50 border-emerald-200'
            }`}>
              <CheckCircle className="w-3 h-3" />
              <span>VERIFIED</span>
            </div>
          ) : (
            <div className="text-[10px] font-mono text-amber-500 font-bold">
              PENDING
            </div>
          )}
        </div>

        <div className={`grid grid-cols-2 gap-2 text-[10px] font-mono pt-2 border-t ${
          theme === 'dark' ? 'text-neutral-400 border-white/5' : 'text-neutral-600 border-neutral-200'
        }`}>
          <div>
            <span className={`block ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>Record Digest</span>
            <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800 font-medium'}>SHA256: 8f2a...910b</span>
          </div>
          <div>
            <span className={`block ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>Registry Store</span>
            <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800 font-medium'}>MySQL Enterprise DAO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

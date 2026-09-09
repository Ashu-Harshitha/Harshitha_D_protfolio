export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  exploreUrl?: string;
  category: 'Full-Stack' | 'Mobile & Web' | 'Systems & Network' | 'Analytics' | 'Enterprise';
  highlights: string[];
  visualType: 'locora' | 'uniflow' | 'ecoecon' | 'comsis' | 'certverify';
}

export interface ExperienceItem {
  company: string;
  role: string;
  division: string;
  period: string;
  isFeatured?: boolean;
  badge?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface BuildLogEntry {
  id: string;
  date: string;
  tag: 'FOCUS' | 'SYSTEM' | 'EXPLORATION';
  content: string;
}

export type ThemeMode = 'dark' | 'light';

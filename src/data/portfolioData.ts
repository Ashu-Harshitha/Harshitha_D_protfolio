import { Project, ExperienceItem, SkillCategory, BuildLogEntry } from '../types';

export const PERSONAL_INFO = {
  name: "Harshitha D",
  roleLabel: "SOFTWARE ENGINEER · BUILDER · CREATIVE THINKER",
  headline: "Turning ideas into\ndigital experiences.",
  subheadline: "I'm Harshitha D — a Computer Science student and aspiring Software Engineer focused on building thoughtful, scalable web and mobile applications.",
  email: "dharshitha2712@gmail.com",
  linkedin: "https://linkedin.com/in/harshitha-d-1063722a1",
  github: "https://github.com/Ashu-Harshitha",
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    university: "Presidency University, Bangalore",
    graduation: "Expected Graduation: 2027",
    milestones: [
      { year: "2023", title: "Commenced B.Tech in CSE", detail: "Core fundamentals: Data Structures, OOP, Computer Architecture" },
      { year: "2024", title: "Full-Stack & Systems Focus", detail: "Advanced algorithms, web systems, database design, mobile tech" },
      { year: "2025", title: "Frontend Internship at TruTech", detail: "Responsive React.js & React Native mobile interfaces with collaborative Git workflows" },
      { year: "2026", title: "Full-Stack Internship at BEL", detail: "Engineered an end-to-end web platform (React.js & Python) while building strong professional work ethics and industry standards (Completed Aug 2026)" },
      { year: "2027", title: "Expected Graduation", detail: "Prepared for high-impact software engineering and product development roles" },
    ]
  },
  currently: {
    status: "Completed Aug 2026",
    role: "Full-Stack R&D Intern",
    company: "Bharat Electronics Limited (BEL)",
    period: "Jul 2026 – Aug 2026 (Completed)",
    detail: "Completed an R&D internship at BEL in August 2026, delivering an end-to-end web platform with React.js and Python while cultivating strong professional work ethics and engineering discipline."
  },
  philosophy: "I care about how things work — and how they feel to use."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Bharat Electronics Limited (BEL)",
    role: "R&D Intern · Full-Stack Developer",
    division: "Product Development & Innovation Wing",
    period: "Jul 2026 – Aug 2026",
    isFeatured: true,
    description: "Engineered an end-to-end full-stack web platform using React.js for the frontend and Python for backend services. Contributed to BEL's Product Development & Innovation Wing, delivering production-grade solutions while cultivating strong professional work ethics, accountability, and engineering discipline.",
    highlights: [
      "Full-Stack Web Engineering: Developed a complete responsive web application with React.js frontend and Python backend services",
      "API & Service Integration: Architected RESTful endpoints for efficient client-server communication and structured data processing",
      "Component Architecture: Implemented modular, reusable UI components with clean state management and responsive styling",
      "Professional Work Ethics: Maintained high technical integrity, punctual delivery, and structured documentation in an enterprise R&D environment"
    ],
    technologies: ["React.js", "Python", "Full-Stack Architecture", "REST APIs", "Workplace Ethics", "Component Design"]
  },
  {
    company: "TruTech Labs",
    role: "Frontend Developer Intern",
    division: "Web & Mobile Applications",
    period: "Jun 2025 – Aug 2025",
    description: "Engineered responsive web interfaces using React.js and TypeScript and built cross-platform mobile interfaces using React Native. Worked with backend teams to integrate APIs and followed Git-based collaborative development practices.",
    highlights: [
      "Responsive web interfaces with React.js and TypeScript",
      "Cross-platform mobile interfaces with React Native",
      "Backend API integration and asynchronous data flow",
      "Git-based collaborative development practices"
    ],
    technologies: ["React.js", "TypeScript", "React Native", "REST APIs", "Git", "Tailwind CSS"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "locora",
    title: "Locora",
    tagline: "Your city, reimagined.",
    technologies: ["React Native", "Node.js", "Tailwind CSS", "Firebase Auth", "Google Maps API"],
    description: "A 360° travel experience that helps users discover hidden gems, local businesses, and eco-tourism spots through personalized, community-driven recommendations.",
    githubUrl: "https://github.com/Ashu-Harshitha/locora-app",
    category: "Mobile & Web",
    highlights: [
      "360° travel and urban exploration architecture",
      "Interactive map discovery with personalized location pins",
      "Community-driven recommendations for eco-tourism and local businesses",
      "Firebase authentication and cloud-synced user itineraries"
    ],
    visualType: "locora"
  },
  {
    id: "uniflow",
    title: "UniFlow",
    tagline: "One login. Infinite campus possibilities.",
    technologies: ["React.js", "Next.js", "Java", "Supabase", "PostgreSQL", "Clerk"],
    description: "A unified student ecosystem combining a verified marketplace, campus event discovery, and peer mentoring into one platform.",
    githubUrl: "https://github.com/SakshamGiri202/uniflow",
    category: "Full-Stack",
    highlights: [
      "Single sign-on unified student campus ecosystem",
      "Verified marketplace for secure peer-to-peer student transactions",
      "Real-time campus event discovery and attendance management",
      "Structured peer mentoring network and session matching"
    ],
    visualType: "uniflow"
  },
  {
    id: "ecoecon",
    title: "Eco-Econ Analyst",
    tagline: "Sustainability meets financial intelligence.",
    technologies: ["JavaScript", "HTML", "CSS", "PHP"],
    description: "A Life Cycle Cost Analysis tool for evaluating sustainable energy investments such as solar, wind, EV charging, and HVAC while considering utility inflation and equipment degradation.",
    githubUrl: "https://github.com/Ashu-Harshitha/EcoEcon",
    category: "Analytics",
    highlights: [
      "Comprehensive Life Cycle Cost Analysis (LCCA) computation",
      "Multi-asset modeling: Solar PV, Wind turbines, EV stations, and HVAC",
      "Compound utility inflation and annualized equipment degradation formulas",
      "ROI projections and financial payback break-even visualization"
    ],
    visualType: "ecoecon"
  },
  {
    id: "comsis",
    title: "COMSIS",
    tagline: "Fast. Real-time. Connected.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "Axios", "Python", "UDP", "Firebase Auth"],
    description: "A real-time communication system using UDP for low-latency client communication, with a React frontend and Python socket server.",
    githubUrl: "https://github.com/Ashu-Harshitha",
    category: "Systems & Network",
    highlights: [
      "Low-latency UDP socket architecture for real-time throughput",
      "Python socket server managing packet dispatch and client sessions",
      "Modern React frontend displaying telemetry and active channels",
      "Secure authentication and packet serialization layer"
    ],
    visualType: "comsis"
  },
  {
    id: "certverify",
    title: "CertVerify",
    tagline: "Trust, verified.",
    technologies: ["Java", "Jakarta Servlet API", "JSP", "DAO", "MySQL", "Bootstrap"],
    description: "A certificate verification platform allowing administrators to register credentials and users to instantly verify authenticity using certificate IDs.",
    githubUrl: "https://github.com/Ashu-Harshitha",
    category: "Enterprise",
    highlights: [
      "Enterprise DAO architecture with Jakarta Servlet API and MySQL",
      "Instant tamper-evident certificate ID verification portal",
      "Administrative credential registry and lifecycle issuance",
      "Clean status validation with audit trail transparency"
    ],
    visualType: "certverify"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "LANGUAGES",
    description: "Core programming languages",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"]
  },
  {
    name: "FRONTEND",
    description: "User interfaces & client architecture",
    skills: ["React.js", "React Native", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    name: "BACKEND",
    description: "Server environments & protocols",
    skills: ["Node.js", "PHP", "Python"]
  },
  {
    name: "DATABASES",
    description: "Relational & document stores",
    skills: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    name: "TOOLS",
    description: "Development workflow & platforms",
    skills: ["Git", "Linux"]
  },
  {
    name: "CORE",
    description: "Computer science foundation",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks"
    ]
  }
];

export const APPROACH_STEPS = [
  {
    num: "01",
    title: "Understand",
    description: "Break the problem down before writing the solution.",
    details: "Analyze requirements, map out data flow, define constraints, and identify edge cases before committing to an architectural approach."
  },
  {
    num: "02",
    title: "Design",
    description: "Think about the user, system, and experience together.",
    details: "Architect cohesive data schemas, establish clear API contracts, and design intuitive, accessible user interfaces in tandem."
  },
  {
    num: "03",
    title: "Build",
    description: "Turn ideas into maintainable, working software.",
    details: "Write modular, strongly typed, cleanly documented code with separation of concerns and robust error handling."
  },
  {
    num: "04",
    title: "Refine",
    description: "Test, improve, simplify, and keep learning.",
    details: "Profile performance, verify responsiveness, polish micro-interactions, and iterate based on real feedback and evolving standards."
  }
];

export const LEADERSHIP_ITEMS = [
  {
    role: "TEAM LEAD",
    stat: "Teams Led",
    metric: "100%",
    description: "Led teams across group projects.",
    subtext: "Guiding project milestones, code reviews, and cross-functional alignment."
  },
  {
    role: "EVENT HOST",
    stat: "Attendees Hosted",
    metric: "1,000+",
    description: "Hosted and led college fest events with audiences ranging from 60 to 1,000+ attendees.",
    subtext: "Orchestrated large-scale stages, technical competitions, and cultural celebrations."
  },
  {
    role: "COMMUNITY",
    stat: "Active Contributor",
    metric: "Active",
    description: "Active in technical and university activities.",
    subtext: "Collaborating in hackathons, engineering clubs, and campus tech initiatives."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Machine Learning",
    issuer: "Internshala",
    focus: "Supervised & unsupervised algorithms, regression models, feature engineering, and model evaluation."
  },
  {
    title: "Web Development",
    issuer: "Coincent",
    focus: "Modern responsive web architecture, DOM manipulation, asynchronous communication, and full-stack integration."
  }
];

export const PERSONAL_PASSIONS = [
  {
    id: "reading",
    icon: "BookOpen",
    emoji: "📖",
    title: "Reading",
    caption: "Deep-diving into literature, tech perspectives, and analytical writing to broaden mental models."
  },
  {
    id: "music",
    icon: "Music",
    emoji: "🎵",
    title: "Music",
    caption: "Finding rhythm and creative inspiration through ambient tracks and diverse soundscapes."
  },
  {
    id: "writing",
    icon: "PenTool",
    emoji: "✍️",
    title: "Content Writing",
    caption: "Expressing ideas clearly through structured articles, technical summaries, and storytelling."
  }
];

export const BUILD_LOG_NOTES: BuildLogEntry[] = [
  {
    id: "bl-1",
    date: "Aug 2026",
    tag: "SYSTEM",
    content: "Wrapped up BEL R&D internship: delivered a complete full-stack web platform using React.js and Python backend."
  },
  {
    id: "bl-2",
    date: "Current Focus",
    tag: "FOCUS",
    content: "Exploring AI, distributed systems, and deepening full-stack engineering practices."
  },
  {
    id: "bl-3",
    date: "Mindset",
    tag: "EXPLORATION",
    content: "Learning something new every day and building with curiosity."
  }
];

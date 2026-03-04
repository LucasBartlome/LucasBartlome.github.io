/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Code2, 
  Users, 
  Terminal, 
  ChevronRight, 
  ExternalLink,
  Cpu,
  Globe,
  MessageSquare,
  BarChart3,
  Search,
  X,
  Shield,
  Phone,
  Image as ImageIcon,
  Info,
  ChevronLeft,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
  Gamepad2
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: React.ReactNode;
  images: string[];
}

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'analytics' | 'soft';
}

// --- Components ---

const Navbar = ({ onOpenResume }: { onOpenResume: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs">LB</div>
          <span>Lucas Bartlome</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#analytics" className="hover:text-slate-900 transition-colors">Analytics</a>
          <a href="#service" className="hover:text-slate-900 transition-colors">Service</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <button 
            onClick={onOpenResume}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Resume
          </button>
          <a 
            href="mailto:lukebartlome@gmail.com" 
            className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, id }: { children: React.ReactNode, subtitle?: string, id?: string }) => (
  <div className="mb-12" id={id}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 mb-2"
    >
      <div className="h-px w-8 bg-slate-300" />
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{subtitle}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl font-bold tracking-tight text-slate-900"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<{ name: string, description: string } | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery'>('overview');
  const [activeLightboxImageIndex, setActiveLightboxImageIndex] = useState<number | null>(null);

  // Reset tab when closing modal
  useEffect(() => {
    if (!selectedProject) {
      setActiveTab('overview');
      setActiveLightboxImageIndex(null);
    }
  }, [selectedProject]);

  const projects: Project[] = [
    {
      title: "AI Podcast Generator",
      description: "Developed a prototype that uses OpenAI APIs to transform text content into structured podcast scripts and audio.",
      longDescription: "During my internship at Motivation Technologies, my team developed an AI Podcast Generator prototype. We used Python and OpenAI APIs to automate the creation of podcast scripts from various text sources. The project involved complex API integration, prompt engineering to ensure high-quality script generation, and designing a user-friendly interface for content creators to manage their generated audio.",
      tags: ["Python", "OpenAI API", "UI Design"],
      icon: <MessageSquare className="w-6 h-6" />,
      images: [
        "/images/Podcast1.png",
        "/images/Podcast2.png",
        "/images/Podcast3.png"
      ]
    },
    {
      title: "Fishing Game (Python)",
      description: "A custom-built fishing simulation exploring game mechanics and interactive storytelling using Pygame.",
      longDescription: "I've always been fascinated by how lines of code transform into interactive experiences. This fishing game was a deep dive into Python and the Pygame library. I focused on the problem-solving aspect of game design—figuring out how to make systems interact smoothly, managing game states, and creating rewarding feedback loops for players.",
      tags: ["Python", "Pygame", "Game Design"],
      icon: <Gamepad2 className="w-6 h-6" />,
      images: [
        "/images/fishinggame1.png",
        "/images/fishinggame2.png",
        "/images/fishinggame3.png",
        "/images/fishinggame4.png",
        "/images/fishinggame5.png"
      ]
    },
    {
      title: "Database & Systems Analysis",
      description: "Technical implementations of database structures and systems analysis for optimized data handling.",
      longDescription: "Beyond software development, I have a strong foundation in database management. I've worked on designing and analyzing complex data systems to ensure integrity and performance. These projects showcase my ability to structure raw data into meaningful, accessible architectures.",
      tags: ["SQL", "Databases", "Systems Analysis"],
      icon: <Database className="w-6 h-6" />,
      images: [
        "/images/Database1.png"
      ]
    }
  ];

  const analyticsSkills = [
    { 
      name: "SQL & Database Management", 
      icon: <Database className="w-5 h-5" />,
      description: "Beyond basic classroom exercises, I've implemented full-stack database solutions. This includes designing relational schemas, merging databases with web frontends to create real-time dashboards, and optimizing queries for large datasets to ensure seamless data flow between the server and the user interface."
    },
    { 
      name: "Python for Data Analysis", 
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Proficient in using Python libraries like Pandas, NumPy, and Matplotlib for data manipulation. I've also explored Machine Learning models in Google Colab, focusing on predictive analytics and pattern recognition to extract actionable insights from raw data."
    },
    { 
      name: "Cyber Security & Network Analysis", 
      icon: <Shield className="w-5 h-5" />,
      description: "Experienced in network traffic analysis using Wireshark and implementing information security protocols. I focus on identifying vulnerabilities, monitoring for anomalies, and ensuring the integrity of data across complex network infrastructures."
    },
    { 
      name: "Data Visualization", 
      icon: <Globe className="w-5 h-5" />,
      description: "Expertise in transforming complex datasets into intuitive visual stories using Power BI and custom web-based charts. I focus on creating interactive visualizations that allow stakeholders to explore data and make informed decisions at a glance."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar onOpenResume={() => setShowResume(true)} />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              Building with <br />
              <span className="text-slate-400 italic font-serif">Precision & Purpose.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              I'm Lucas Bartlome, a Software Developer and IT Professional focused on bridging the gap between complex data and human-centric solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group bg-slate-900 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-slate-800 transition-all"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/lucasbartlome" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/lucasbartlome/" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:lukebartlome@gmail.com" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        
        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="The Story">Professional Summary</SectionHeading>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am an aspiring Software Developer and IT professional with a strong foundation in programming, database management, and systems analysis. 
              </p>
              <p>
                My journey started in Arnold, Missouri, inspired by my father's work as a developer. From Scratch in middle school to Python in high school and complex systems in college, I've always been fascinated by how code transforms our world.
              </p>
              <p>
                With experience in <span className="text-slate-900 font-medium">Python, Java, C++, and SQL</span>, I specialize in creating efficient, scalable solutions that solve real-world problems.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative group"
          >
            <img 
              src="/images/ProfileImg.jpeg" 
              alt="Lucas Bartlome" 
              className="object-cover w-full h-full transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
          </motion.div>
        </section>

        {/* Data Analytics Section */}
        <section id="analytics" className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-200 shadow-sm">
          <div className="max-w-3xl">
            <SectionHeading subtitle="Analytical Mindset">Data Analytics</SectionHeading>
            <p className="text-lg text-slate-600 mb-12">
              Data is more than just numbers—it's the narrative of a system. I leverage analytical tools to uncover insights, optimize performance, and drive informed decision-making.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedSkill(skill)}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-slate-900 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-900">{skill.name}</h3>
                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  Click to learn more <ChevronRight className="w-3 h-3" />
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-xl font-bold mb-2">Systems Analysis & Optimization</h4>
              <p className="text-slate-400">
                Specializing in the optimization of technical architectures and the streamlining of data workflows to drive organizational efficiency.
              </p>
            </div>
            <div className="text-4xl font-mono font-bold text-slate-700">
              01011001
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeading subtitle="Selected Work">Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 rounded-md text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Customer Service Section */}
        <section id="service" className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 bg-slate-200 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/service1/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="h-64 bg-slate-900 rounded-2xl flex items-center justify-center p-6 text-center">
                <Users className="w-12 h-12 text-white opacity-20 absolute" />
                <p className="text-white font-medium relative z-10">"Empathy is the core of effective problem solving."</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-slate-300 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/service2/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="h-48 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden">
                <img src="https://picsum.photos/seed/tech-banner/400/400" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <SectionHeading subtitle="The Human Element">Customer Service & Communication</SectionHeading>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Technology doesn't exist in a vacuum. My background in client-facing roles has instilled a deep understanding of user needs and the importance of clear, empathetic communication.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong className="text-slate-900">Active Listening:</strong> Translating vague user requirements into concrete technical specifications.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong className="text-slate-900">Conflict Resolution:</strong> Maintaining professionalism and clarity in high-pressure technical environments.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong className="text-slate-900">Collaboration:</strong> Thriving in cross-functional teams where communication is the primary bridge.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold tracking-tight">{selectedProject.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 rounded-md text-slate-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex p-1 bg-slate-100 rounded-xl self-start md:self-center">
                      <button
                        onClick={() => setActiveTab('overview')}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                          activeTab === 'overview' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        )}
                      >
                        <Info className="w-4 h-4" />
                        Overview
                      </button>
                      <button
                        onClick={() => setActiveTab('gallery')}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                          activeTab === 'gallery' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        )}
                      >
                        <ImageIcon className="w-4 h-4" />
                        Gallery
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' ? (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-3xl"
                      >
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Project Overview</h4>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {selectedProject.longDescription}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="gallery"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Visual Gallery</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {selectedProject.images.map((img, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              onClick={() => setActiveLightboxImageIndex(i)}
                              className="rounded-2xl overflow-hidden bg-slate-100 aspect-video group relative cursor-zoom-in"
                            >
                              <img 
                                src={img} 
                                alt={`${selectedProject.title} screenshot ${i + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {activeLightboxImageIndex !== null && selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveLightboxImageIndex(null)}
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
              />
              
              <button
                onClick={() => setActiveLightboxImageIndex(null)}
                className="absolute top-8 right-8 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightboxImageIndex((prev) => 
                      prev !== null ? (prev - 1 + selectedProject.images.length) % selectedProject.images.length : null
                    );
                  }}
                  className="absolute left-0 md:-left-16 z-10 p-4 text-white/50 hover:text-white transition-all"
                >
                  <ChevronLeft className="w-12 h-12" />
                </button>

                <motion.img
                  key={activeLightboxImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  src={selectedProject.images[activeLightboxImageIndex]}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLightboxImageIndex((prev) => 
                      prev !== null ? (prev + 1) % selectedProject.images.length : null
                    );
                  }}
                  className="absolute right-0 md:-right-16 z-10 p-4 text-white/50 hover:text-white transition-all"
                >
                  <ChevronRight className="w-12 h-12" />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 font-mono text-sm">
                {activeLightboxImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Resume Modal */}
        <AnimatePresence>
          {showResume && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowResume(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
              >
                <button
                  onClick={() => setShowResume(false)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto p-8 md:p-16">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-slate-100 pb-12">
                    <div>
                      <h2 className="text-5xl font-bold tracking-tighter mb-2">Lucas Bartlome</h2>
                      <p className="text-xl text-slate-500 font-medium">Software Developer & IT Professional</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                      <p className="flex items-center gap-2">
                        <Globe className="w-4 h-4" /> 5545 Terrace View Ct., St. Louis, MO 63128
                      </p>
                      <a href="tel:3146622218" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                        <Phone className="w-4 h-4" /> 314-662-2218
                      </a>
                      <a href="mailto:lukebartlome@gmail.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                        <Mail className="w-4 h-4" /> lukebartlome@gmail.com
                      </a>
                      <a href="https://www.linkedin.com/in/lucasbartlome/" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                        <Linkedin className="w-4 h-4" /> linkedin.com/in/lucasbartlome
                      </a>
                      <a href="https://github.com/lucasbartlome" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                        <Github className="w-4 h-4" /> github.com/lucasbartlome
                      </a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-[1fr_2fr] gap-16">
                    <div className="space-y-12">
                      <section>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                          <GraduationCap className="w-4 h-4" /> Education
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <p className="font-bold text-slate-900">Missouri University of Science and Technology</p>
                            <p className="text-sm text-slate-500 italic">B.S. in Information Science & Technology</p>
                            <p className="text-xs text-slate-400 mt-1">GPA: 3.38 | Graduated: May 2025</p>
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">Seckman High School</p>
                            <p className="text-sm text-slate-500 italic">High School Diploma</p>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                          <GraduationCap className="w-4 h-4" /> Relevant Courses
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {["Database Management", "Advanced Python", "Intro to C++", "Coding In Java", "Intro to Data Science", "Privacy & Info Security Law", "Coding in Java 2", "Advanced SAP"].map(course => (
                            <span key={course} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-medium text-slate-500">
                              {course}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                          <Award className="w-4 h-4" /> Core Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {["Python", "Java", "C++", "SQL", "JavaScript", "HTML", "CSS", "Wireshark", "SAP", "RStudio", "React", "Node.js", "Tailwind CSS", "Excel", "Access", "Microsoft 365", "Linux", "Raspberry Pi", "API Integration", "Database Design", "Systems Analysis", "IT Project Management", "Data Management"].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                          <Globe className="w-4 h-4" /> Languages
                        </h3>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><span className="font-bold text-slate-900">English:</span> Native</p>
                          <p><span className="font-bold text-slate-900">German:</span> Conversational / Family Heritage</p>
                        </div>
                      </section>
                    </div>

                    <div className="space-y-12">
                      <section>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                          <Briefcase className="w-4 h-4" /> Experience
                        </h3>
                        <div className="space-y-10">
                          <div className="relative pl-8 border-l border-slate-100">
                            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900" />
                            <div className="mb-2 flex justify-between items-start">
                              <h4 className="font-bold text-lg">Motivation Technologies</h4>
                              <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">Nov 2024 - Jan 2025</span>
                            </div>
                            <p className="text-slate-600 mb-4 font-medium">Software Development Intern (Remote)</p>
                            <ul className="space-y-2 text-sm text-slate-500 list-disc pl-4">
                              <li>Developed an AI Podcast Generator prototype using Python and OpenAI APIs (GPT and TTS).</li>
                              <li>Created a custom UI for granular control over podcast parameters (hosts, voices, scripts).</li>
                              <li>Engineered JSON-based script outputs and MP3 fragment generation using AI APIs.</li>
                              <li>Collaborated in a VS Code environment to solve complex logic and integration problems.</li>
                            </ul>
                          </div>

                          <div className="relative pl-8 border-l border-slate-100">
                            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <div className="mb-2 flex justify-between items-start">
                              <h4 className="font-bold text-lg">Sigma Pi (Missouri S&T)</h4>
                              <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">Aug 2022 - Present</span>
                            </div>
                            <p className="text-slate-600 mb-4 font-medium">New Member Education / IT Chairman</p>
                            <ul className="space-y-2 text-sm text-slate-500 list-disc pl-4">
                              <li>Managed network infrastructure, ensuring consistent connectivity and troubleshooting issues.</li>
                              <li>Led a comprehensive system upgrade, installing new routers, servers, and network ports.</li>
                              <li>Guided incoming freshmen, providing support and addressing technical/academic questions.</li>
                            </ul>
                          </div>

                          <div className="relative pl-8 border-l border-slate-100">
                            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <div className="mb-2 flex justify-between items-start">
                              <h4 className="font-bold text-lg">Titan Pest Control</h4>
                              <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">May 2023 - Present</span>
                            </div>
                            <p className="text-slate-600 mb-4 font-medium">Pest Control Technician</p>
                            <ul className="space-y-2 text-sm text-slate-500 list-disc pl-4">
                              <li>Provide commercial and residential services, including inspections and preventative solutions.</li>
                              <li>Engage with clients to assess issues and offer tailored recommendations for resolution.</li>
                              <li>Strengthened communication and problem-solving skills through direct client interaction.</li>
                            </ul>
                          </div>

                          <div className="relative pl-8 border-l border-slate-100">
                            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <div className="mb-2 flex justify-between items-start">
                              <h4 className="font-bold text-lg">Jacks Electric</h4>
                              <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">May 2022 - Aug 2022</span>
                            </div>
                            <p className="text-slate-600 mb-4 font-medium">Electrician</p>
                            <ul className="space-y-2 text-sm text-slate-500 list-disc pl-4">
                              <li>Wired residential and commercial properties, collaborating in a team to achieve objectives.</li>
                              <li>Engaged in complex problem-solving to determine effective wiring solutions for entire properties.</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                          <FileText className="w-4 h-4" /> Summary
                        </h3>
                        <p className="text-slate-600 leading-relaxed italic">
                          "Motivated Information Science & Technology student with a strong foundation in Python, Java, and C++. Passionate about software development, machine learning, and creating innovative tech solutions. Eager to apply classroom knowledge and internship experience in a dynamic entry-level programming role."
                        </p>
                      </section>

                      <div className="pt-8 flex justify-center">
                        <a 
                          href="/resume.pdf" 
                          target="_blank"
                          className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
                        >
                          <Download className="w-5 h-5" />
                          Download PDF Version
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSkill(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-2xl font-bold mb-4 pr-8">{selectedSkill.name}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Contact CTA */}
        <section className="relative rounded-[3rem] bg-slate-900 py-20 px-8 md:px-16 overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Let's build something <br /> meaningful together.
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Whether you're looking for a developer, a data enthusiast, a technical customer support specialist, or just want to talk tech—my inbox is always open.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:lukebartlome@gmail.com" 
                className="w-full sm:w-auto bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/lucasbartlome/" 
                className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Lucas Bartlome. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/lucasbartlome" className="hover:text-slate-900 transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/lucasbartlome/" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          <button 
            onClick={() => setShowResume(true)}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Resume
          </button>
        </div>
      </footer>
    </div>
  );
}

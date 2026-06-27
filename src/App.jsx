import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = [
    { category: "Frontend", items: ["React.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Angular", "Vue.js", "Ionic"] },
    { category: "State Management", items: ["Redux", "Context API", "Redux Toolkit"] },
    { category: "Backend & DB", items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"] },
    { category: "Architecture & Performance", items: ["Component-Based Architecture", "Micro frontends", "Code Splitting", "Lazy Loading", "Memory Optimization"] }
  ];

  const experiences = [
    {
      role: "Senior Software Developer",
      company: "Facile Consulting Pvt Ltd",
      duration: "2016 – Present",
      location: "Bangalore, India",
      points: [
        "Architected and led development of scalable React.js applications using modular, reusable component architectures.",
        "Optimized state management solutions (Redux, Context API) to improve workflow efficiency and maintainability.",
        "Improved application performance by identifying bottlenecks, optimizing rendering cycles, and reducing memory usage.",
        "Spearheaded code reviews across 50,000+ lines of code, resolving 150+ critical bugs and reducing production defects by 30%.",
        "Mentored a team of 5 frontend developers, enforcing coding standards and architectural best practices."
      ]
    },
    {
      role: "Software Developer",
      company: "SoftServe Global",
      duration: "Feb 2015 – Mar 2016",
      location: "Bangalore, India",
      points: [
        "Developed scalable frontend modules using JavaScript and Angular to meet internal product and client requirements.",
        "Collaborated with 5 cross-functional teams to deliver projects on time, improving delivery speed by 15%.",
        "Assisted in database integration and backend API consumption."
      ]
    }
  ];

  const projects = [
    {
      title: "Start Hub Application",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      desc: "Architected reusable React components and optimized rendering performance. Ensured responsive UI, managed sprint planning, and coordinated secure API integration."
    },
    {
      title: "CYA – Cover Your Ass",
      tech: ["React Native", "Node.js", "JavaScript", "HTML"],
      desc: "Developed a mobile-first asset management application enabling real-time barcode-based equipment tracking with geolocation support."
    },
    {
      title: "Hello spoke",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
      desc: "Built a VoIP-based communication platform with call reports, recordings, internal presence, texting, and centralized contact management."
    },
    {
      title: "Mentorz",
      tech: ["React Native", "Tailwind CSS"],
      desc: "Developed a mentorship platform connecting mentees with expert mentors, featuring real-time collaboration and session management."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Background Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            VASANTA B K
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col justify-center items-start min-h-[80vh]">
        <span className="text-teal-400 font-mono text-sm mb-4">Hi, my name is</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-4">
          Vasanta B K
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          I build high-performance web & mobile interfaces.
        </h2>
        <p className="max-w-2xl text-slate-400 text-lg mb-8 leading-relaxed">
          I am a <strong className="text-slate-200">Senior Frontend Developer</strong> with 9+ years of experience architecting scalable, components-driven applications. Specializing in React, React Native, and performance optimization to deliver seamless user experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 bg-linear-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-slate-950 font-semibold rounded-lg transition-all shadow-lg shadow-teal-500/20">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-slate-700 hover:border-teal-400 text-slate-300 hover:text-teal-400 rounded-lg transition-all">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <h3 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-teal-400 font-mono text-xl mr-2">01.</span> Tech Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors">
              <h4 className="text-lg font-bold text-teal-400 mb-4">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <h3 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-teal-400 font-mono text-xl mr-2">02.</span> Professional Journey
        </h3>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-800 group hover:border-teal-500 transition-colors">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-800 group-hover:bg-teal-400 transition-colors"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-200">{exp.role}</h4>
                  <span className="text-teal-400 font-medium">{exp.company}</span>
                </div>
                <span className="text-sm text-slate-500 font-mono">{exp.duration}</span>
              </div>
              <ul className="space-y-2 text-slate-400 text-sm leading-relaxed max-w-4xl">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start">
                    <span className="text-teal-400 mr-2">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <h3 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-teal-400 font-mono text-xl mr-2">03.</span> Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="p-6 bg-slate-900/30 border border-slate-800/80 rounded-xl hover:-translate-y-1 hover:border-teal-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl">📁</span>
                </div>
                <h4 className="text-xl font-bold text-slate-200 mb-2">{proj.title}</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{proj.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-teal-400/80">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center border-t border-slate-900">
        <span className="text-teal-400 font-mono text-sm mb-2 block">What's Next?</span>
        <h3 className="text-4xl font-bold mb-4 text-slate-200">Get In Touch</h3>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="mailto:vasanta.kari1@gmail.com" className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg transition-all">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/vasanta-b-k-0b921b92/" target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition-all">
            LinkedIn Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-600 text-xs border-t border-slate-900">
        <p>© {new Date().getFullYear()} Vasanta B K. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
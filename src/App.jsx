import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Web Development",
      desc: "React.js, Next.js, and modern CSS frameworks.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Mobile App Dev",
      desc: "Cross-platform mobile apps with React Native & Ionic.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "State Management",
      desc: "Redux, Context API, Zustand and scalable application architectures.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Performance Optimization",
      desc: "Code splitting, lazy loading, and asset optimization.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const projects = [
    { title: "Start Hub", tech: "React.js, Node.js", desc: "Collaborated on architectural design and UI layout." },
    { title: "CYA – Cover Your Ass", tech: "React Native, Geolocation", desc: "Real-time barcode-based tracking mobile-first design." },
    { title: "Hello Spoke", tech: "React.js, Tailwind CSS", desc: "VoIP communication system dashboard configuration." },
    { title: "Mentorz", tech: "React Native, Tailwind", desc: "Real-time collaborative connection application." }
  ];

  return (
    <div className="min-h-screen bg-amber-500 p-2 sm:p-4 md:p-8 flex items-center justify-center font-sans">
      {/* Main Container mirroring the custom frame */}
      <div className="w-full max-w-7xl bg-[#F0F0F6] rounded-[24px] sm:rounded-[32px] shadow-2xl flex flex-col lg:flex-row overflow-hidden relative border border-white/20">

        {/* ================= LEFT SIDEBAR (Profile info) ================= */}
        <aside className="w-full lg:w-[310px] bg-white p-6 flex flex-col justify-between border-r border-slate-100 flex-shrink-0">
          <div className="text-center">
            {/* Profile Frame with status badge */}
            <div className="relative w-36 h-36 mx-auto mb-4">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Vasanta B K"
                className="w-full h-full object-cover rounded-full border-4 border-slate-50"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"; // Fallback placeholder
                }}
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <h2 className="text-xl font-bold text-slate-800">Vasanta B K</h2>
            <p className="text-sm text-slate-400 font-medium mt-1">Senior Frontend Developer</p>

            {/* Social Links */}
            <div className="flex justify-center gap-2 mt-4">
              <a href="https://www.linkedin.com/in/vasanta-b-k-0b921b92/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 transition-all flex items-center justify-center text-slate-900 shadow-sm">
                <span className="text-xs font-bold">In</span>
              </a>
              <a href="https://github.com/vasantak?tab=repositories" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 transition-all flex items-center justify-center text-slate-900 shadow-sm">
                <span className="text-xs font-bold">GH</span>
              </a>
              <a href="mailto:vasanta.kari1@gmail.com" className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 transition-all flex items-center justify-center text-slate-900 shadow-sm">
                <span className="text-xs font-bold">@</span>
              </a>
            </div>

            <hr className="my-5 border-slate-100" />

            {/* Meta Data */}
            <div className="space-y-3 text-xs text-left">
              <div className="flex justify-between"><span className="bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded font-semibold">Experience:</span><span className="text-slate-600 font-medium">9+ Years</span></div>
              <div className="flex justify-between"><span className="bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded font-semibold">Residence:</span><span className="text-slate-600 font-medium">India</span></div>
              <div className="flex justify-between"><span className="bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded font-semibold">Freelance:</span><span className="text-green-600 font-bold">Available</span></div>
              <div className="flex justify-between"><span className="bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded font-semibold">Address:</span><span className="text-slate-600 font-medium text-right">Bangalore, IN</span></div>
            </div>

            <hr className="my-5 border-slate-100" />

            {/* Languages Section */}
            <div className="text-left mb-5">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Languages</h4>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1"><span>English</span><span>90%</span></div>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden"><div className="bg-amber-500 h-full rounded-full" style={{ width: '90%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1"><span>Kannada / Hindi</span><span>100%</span></div>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden"><div className="bg-amber-500 h-full rounded-full" style={{ width: '100%' }}></div></div>
                </div>
              </div>
            </div>

            {/* Core Tech Skills (with Progress Bars) */}
            <div className="text-left">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Core Skills</h4>
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>React.js / React Native</span>
                    <span className="font-semibold text-amber-600">95%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>JavaScript (ES6+) / TypeScript</span>
                    <span className="font-semibold text-amber-600">90%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>HTML5 / CSS3 / Tailwind CSS</span>
                    <span className="font-semibold text-amber-600">95%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Node.js / Express / REST APIs</span>
                    <span className="font-semibold text-amber-600">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Angular / Vue.js / Ionic</span>
                    <span className="font-semibold text-amber-600">80%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-5 border-slate-100" />

            {/* Extra Skills & Architecture (Bullet Points from your Resume) */}
            <div className="text-left">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Specialized Areas</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 font-bold">⚬</span>
                  <span><strong>State Management:</strong> Redux, Context API, Zustand ,Redux Toolkit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 font-bold">⚬</span>
                  <span><strong>Architecture:</strong> Micro frontends, Component-Based Design, UI/UX, Cross-Browser Compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 font-bold">⚬</span>
                  <span><strong>Performance:</strong> Code Splitting, Lazy Loading, Memory Optimization, Production Debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 font-bold">⚬</span>
                  <span><strong>Security:</strong> Input Validation, Secure APIs, Auth Flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 font-bold">⚬</span>
                  <span><strong>DevOps & Database:</strong> Git, CI/CD, Agile/Scrum, MongoDB, Bootstrap</span>
                </li>
              </ul>
            </div>

          </div>

          <a
            href={`${import.meta.env.BASE_URL}Vasanta_B_K_Resume.pdf`}
            download="Vasanta_B_K_Resume.pdf"
            className="mt-6 w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/10 cursor-pointer text-center"
          >
            DOWNLOAD CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </aside>

        {/* ================= MIDDLE PANEL (Main Content Area) ================= */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:h-[85vh] lg:overflow-y-auto space-y-8 scrollbar-thin">

          {/* Hero Section */}
          <section id="home" className="bg-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between min-h-[340px]">
            {/* Dynamic, bouncing background decorative shapes */}
            <div className="absolute top-4 left-4 w-4 h-4 border-2 border-amber-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-12 w-3 h-3 bg-blue-400 rounded-sm transform rotate-45 animate-pulse hidden md:block"></div>
            <div className="absolute bottom-6 right-1/3 w-4 h-4 border border-green-400 transform rotate-12 animate-[spin_5s_linear_infinite] hidden md:block"></div>

            <div className="z-10 max-w-lg text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
                I'm Vasanta B K <br />
                <span className="text-amber-500">Front-end</span> Developer
              </h1>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed font-medium">
                Designing, building, and optimizing modern interfaces. Over 9 years of active experience architecting components and solving state flow challenges.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all text-xs flex items-center gap-2 shadow-lg shadow-amber-500/15 mx-auto md:mx-0 group"
              >
                HIRE ME
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Profile Frame Right side */}
            <div className="mt-8 md:mt-0 relative flex-shrink-0 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-slate-50 border border-slate-100 p-2 overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80";
                  }}
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800">My Specializations</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto mt-2 leading-relaxed">
                Core engineering focuses driving production performance and intuitive user flows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((svc, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-amber-50 rounded-xl mb-4">{svc.icon}</div>
                    <h4 className="font-bold text-slate-800 text-base mb-2">{svc.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects Section */}
          <section id="projects" className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800">Featured Projects</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto mt-2 leading-relaxed">
                A selection of application solutions constructed across different architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-50 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-colors">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-500 tracking-wide uppercase">{proj.tech}</span>
                    <h4 className="text-lg font-bold text-slate-800 mt-1 mb-2">{proj.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-white p-8 rounded-2xl border border-slate-50 text-center shadow-sm">
            <h3 className="text-xl font-bold text-slate-800">Ready to build something unique?</h3>
            <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto">
              Connect with me to review system design pipelines, agile processes, or frontend integration setups.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:vasanta.kari1@gmail.com" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold rounded-lg transition-all">
                Send Email
              </a>
              <a href="https://www.linkedin.com/in/vasanta-b-k-0b921b92/" target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-slate-200 text-slate-500 hover:border-amber-400 hover:text-amber-500 text-xs font-bold rounded-lg transition-all">
                LinkedIn Detail
              </a>
            </div>
          </section>

        </main>

        {/* ================= RIGHT SIDEBAR (Sticky Navigation Dock) ================= */}
        <nav className="w-full lg:w-20 bg-white border-l border-slate-100 flex lg:flex-col justify-around lg:justify-center items-center py-4 lg:py-0 lg:space-y-6 flex-shrink-0">

          <button
            onClick={() => scrollToSection('home')}
            className={`p-3 rounded-full transition-all group relative ${activeTab === 'home' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-400 hover:bg-amber-50 hover:text-amber-500'}`}
          >
            {/* Home Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span className="absolute right-12 top-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">Home</span>
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className={`p-3 rounded-full transition-all group relative ${activeTab === 'services' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-400 hover:bg-amber-50 hover:text-amber-500'}`}
          >
            {/* Services Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            <span className="absolute right-12 top-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">Services</span>
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className={`p-3 rounded-full transition-all group relative ${activeTab === 'projects' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-400 hover:bg-amber-50 hover:text-amber-500'}`}
          >
            {/* Projects Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span className="absolute right-12 top-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">Projects</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`p-3 rounded-full transition-all group relative ${activeTab === 'contact' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-400 hover:bg-amber-50 hover:text-amber-500'}`}
          >
            {/* Contact/Message Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <span className="absolute right-12 top-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block">Contact</span>
          </button>

        </nav>

      </div>
    </div>
  );
}
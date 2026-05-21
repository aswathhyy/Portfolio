import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* 1. MODERN GLASSMORPHIC NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900 px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo/Name with subtle gradient */}
        <h2 className="text-xl font-black tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text hover:opacity-80 transition cursor-pointer">
          STUDENT
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <li>
            <a href="#about" className="hover:text-slate-100 transition-colors duration-200 flex items-center gap-1">
              <span className="text-indigo-400 font-mono text-xs">01.</span> About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-slate-100 transition-colors duration-200 flex items-center gap-1">
              <span className="text-indigo-400 font-mono text-xs">02.</span> Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-slate-100 transition-colors duration-200 flex items-center gap-1">
              <span className="text-indigo-400 font-mono text-xs">03.</span> Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-slate-100 transition-colors duration-200 flex items-center gap-1">
              <span className="text-indigo-400 font-mono text-xs">05.</span> Contact
            </a>
          </li>
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-4 py-2 text-xs font-mono font-medium text-indigo-400 border border-indigo-500/30 rounded hover:bg-indigo-500/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </nav>

     
      <header className="relative min-h-[calc(100vh-72px)] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Subtle Grid overlay for a developer feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          
          {/* Profile Image with Cyber Border Wrap */}
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/20 group animate-fadeIn">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="https://mooddp.com/wp-content/uploads/2025/11/pretty-girl-dp.jpg"
              alt="Aswathy B Nair Profile"
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-950"
            />
          </div>

          {/* Subheader / Tagline */}
          <span className="mt-8 px-3 py-1 text-xs font-mono tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full uppercase">
            Hi, my name is
          </span>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black mt-3 tracking-tight text-white">
            ASWATHY B NAIR
          </h1>
          {/* Context/Bio snippet */}
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            I'm a computer science <span className="text-purple-400 font-medium">Student</span> & aspiring developer focused on engineering elegant, clean, and highly performant web applications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            
              
            
            <a 
              href="#contact" 
              className="px-8 py-3 text-sm font-semibold text-slate-300 border border-slate-800 rounded-lg hover:bg-slate-900/60 hover:text-white hover:border-slate-700 transition duration-300"
            >
              Get In Touch
            </a>
          </div>

        </div>

        {/* Decorative Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-slate-600">
          <span>Scroll down</span>
          <div className="w-1 h-4 bg-slate-800 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-400 h-1/2 w-full animate-bounce"></div>
          </div>
        </div>

      </header>

    </div>
  );
}

export default Home;
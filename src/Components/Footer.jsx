import React from "react";

function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden px-6 py-10
      bg-[#020617] border-t border-white/10"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0b1120] to-black"></div>

      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo + Tagline */}
        <div className="text-center md:text-left">
          <h1
            className="text-2xl font-black tracking-wider
            bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
            text-transparent bg-clip-text"
          >
            STUDENT
          </h1>

          <p className="text-xs text-zinc-500 mt-2 max-w-xs">
            Built with passion for learning, growth, and creativity. Keep improving every day.
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap items-center justify-center gap-5 text-sm">
          {[
            { name: "Home", link: "#" },
            { name: "About", link: "#about" },
            { name: "Education", link: "#education" },
            { name: "Skills", link: "#skills" },
            { name: "Contact", link: "#contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-zinc-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-zinc-400 text-xs">
            © 2026 Aswathy. All rights reserved.
          </p>
          <p className="text-zinc-600 text-[11px] mt-1">
            Designed with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
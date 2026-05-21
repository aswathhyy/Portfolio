import React, { useState } from "react";

function Footer() {
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer
      className="relative w-full overflow-hidden px-6 py-10
      bg-gradient-to-br from-[#1a0f08] via-[#2a140a] to-black
      border-t border-orange-500/10"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="text-center md:text-left">
          <h1
            className="text-2xl font-black tracking-wider
            bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300
            text-transparent bg-clip-text"
          >
            STUDENT
          </h1>

          <p className="text-xs text-zinc-400 mt-2 max-w-xs">
            Built with passion for learning, growth, and creativity.
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap items-center justify-center gap-5 text-sm">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => setActive(item.name)}
                className={`transition-all duration-300 hover:scale-105
                  ${
                    active === item.name
                      ? "text-green-400 font-semibold"
                      : "text-zinc-400 hover:text-orange-400"
                  }`}
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
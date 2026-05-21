import React from "react";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden text-white selection:bg-orange-400/30 selection:text-white bg-gradient-to-br from-[#0b0b0b] via-[#1a120d] to-[#120a05]">

      {/* ORANGE GLOW BACKGROUNDS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fb923c_0%,transparent_40%),radial-gradient(circle_at_bottom_right,#f97316_0%,transparent_40%),radial-gradient(circle_at_center,#ea580c_0%,transparent_55%)] opacity-25"></div>

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1a10_1px,transparent_1px),linear-gradient(to_bottom,#2a1a10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-orange-500/10 px-6 md:px-12 py-4 flex justify-between items-center">

        <h2 className="text-2xl font-black tracking-[0.2em] bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent cursor-pointer">
          STUDENT
        </h2>

        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-black font-semibold hover:scale-105 transition shadow-lg shadow-orange-500/20"
        >
          Resume
        </a>
      </nav>

      {/* HERO */}
      <header className="relative min-h-[calc(100vh-72px)] flex items-center justify-center px-6 text-center overflow-hidden">

        {/* ORANGE GLOWS */}
        <div className="absolute top-20 left-20 w-[320px] h-[320px] bg-orange-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-amber-500/20 rounded-full blur-[120px]"></div>

        <div className="relative z-10 flex flex-col items-center max-w-3xl">

          {/* PROFILE */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-yellow-300 blur-2xl opacity-70 group-hover:opacity-100 transition"></div>

            <div className="relative p-1 rounded-full bg-gradient-to-tr from-orange-400 via-amber-500 to-yellow-400">
              <img
                src="https://mooddp.com/wp-content/uploads/2025/11/pretty-girl-dp.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-black"
              />
            </div>
          </div>

          {/* INTRO */}
          <span className="mt-8 px-4 py-1 text-xs uppercase tracking-[0.3em] font-mono text-orange-200 border border-orange-400/20 rounded-full bg-orange-500/10">
            Hi,MY NAME IS
          </span>

          {/* NAME */}
          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-orange-300 via-white to-amber-300 bg-clip-text text-transparent">
            ASWATHY B NAIR
          </h1>

          {/* TEXT */}
          <p className="mt-6 text-slate-300 text-lg max-w-2xl">
            I’m a{" "}
            <span className="text-orange-300 font-semibold">
              Computer Science Student
            </span>{" "}
            passionate about building modern, responsive web applications with beautiful UI/UX.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-black font-semibold hover:scale-105 transition shadow-lg shadow-orange-500/30"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-orange-500/30 text-orange-200 hover:bg-orange-500/10 hover:border-orange-400 transition"
            >
              Contact Me
            </a>

          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
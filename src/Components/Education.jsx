import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden px-6 py-24 flex items-center justify-center
      bg-gradient-to-br
      from-[#020617]
      via-[#0b1120]
      to-black
      transition-colors duration-500"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Main Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0b1120] to-black"></div>

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

      {/* Indigo Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"></div>

      {/* Cyan Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-5xl w-full">
        
        {/* Heading */}
        <div className="text-center mb-20">

          <span
            className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase
            bg-white/5
            border border-white/10
            text-cyan-300
            backdrop-blur-xl shadow-lg"
          >
            Academic Journey
          </span>

          <h1
            className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight
            bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
            text-transparent bg-clip-text"
          >
            Education
          </h1>

          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Building strong foundations in computer engineering,
            programming, and modern technology development.
          </p>
        </div>

        
        <div className="relative ml-4 md:ml-10 border-l border-cyan-500/20">

          
          <div className="relative pl-10 pb-12 group">

          
            <div
              className="absolute -left-[14px] top-5 w-7 h-7 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              border-4 border-[#020617]
              shadow-[0_0_30px_rgba(34,211,238,0.7)]
              group-hover:scale-125 transition duration-500"
            ></div>

            {/* Outer Glow */}
            <div className="absolute -left-[22px] top-0 w-12 h-12 rounded-full bg-cyan-500/20 blur-xl"></div>

            {/* CARD */}
            <div
              className="relative overflow-hidden rounded-[2rem] p-[1px]
              bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/20
              hover:scale-[1.02] transition duration-500"
            >

              {/* Glass Card */}
              <div
                className="relative rounded-[2rem] p-8 md:p-10
                bg-[#0f172a]/80
                backdrop-blur-2xl
                border border-blue-500/10
                shadow-[0_0_40px_rgba(37,99,235,0.15)]"
              >

                {/* Card Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

                  <div>
                    <h2
                      className="text-3xl md:text-4xl font-bold
                      text-white
                      group-hover:text-cyan-400
                      transition-colors duration-300"
                    >
                      Diploma in Computer Engineering
                    </h2>

                    <p className="mt-3 text-lg font-semibold text-blue-300">
                      Govt Women's Polytechnic College, Trivandrum
                    </p>
                  </div>

                  {/* Year Badge */}
                  <div
                    className="self-start md:self-center px-6 py-3 rounded-full
                    bg-gradient-to-r from-blue-500/20 to-cyan-500/20
                    border border-cyan-400/20
                    text-cyan-300
                    font-bold tracking-widest uppercase text-xs
                    backdrop-blur-xl"
                  >
                    2025 - 2027
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                  Focusing on software engineering principles, full-stack web
                  development, programming methodologies, databases,
                  algorithms, UI/UX systems, and scalable application
                  architecture with practical project implementation.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-8">

                  {[
                    "React",
                    "JavaScript",
                    "Tailwind CSS",
                    "Database",
                    "Programming",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm
                      bg-white/5
                      text-cyan-300
                      border border-white/10
                      hover:bg-cyan-500
                      hover:text-white
                      transition duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
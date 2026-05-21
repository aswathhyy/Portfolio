import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden px-6 py-24 flex items-center justify-center
      bg-gradient-to-br from-[#1a0f08] via-[#2a140a] to-black
      transition-colors duration-500"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Main Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f08] via-[#2a140a] to-black"></div>

      {/* Orange Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/25 rounded-full blur-[120px]"></div>

      {/* Amber Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px]"></div>

      {/* Warm Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-orange-300/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-5xl w-full">

        {/* Heading */}
        <div className="text-center mb-20">

          <span
            className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase
            bg-white/5 border border-white/10
            text-orange-300 backdrop-blur-xl shadow-lg"
          >
            Academic Journey
          </span>

          <h1
            className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight
            bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300
            text-transparent bg-clip-text"
          >
            Education
          </h1>

          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Building strong foundations in computer engineering,
            programming, and modern technology development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-10 border-l border-orange-500/20">

          <div className="relative pl-10 pb-12 group">

            {/* Node */}
            <div
              className="absolute -left-[14px] top-5 w-7 h-7 rounded-full
              bg-gradient-to-r from-orange-400 to-amber-500
              border-4 border-[#1a0f08]
              shadow-[0_0_30px_rgba(249,115,22,0.7)]
              group-hover:scale-125 transition duration-500"
            ></div>

            {/* Outer Glow */}
            <div className="absolute -left-[22px] top-0 w-12 h-12 rounded-full bg-orange-500/20 blur-xl"></div>

            {/* CARD */}
            <div
              className="relative overflow-hidden rounded-[2rem] p-[1px]
              bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-yellow-500/20
              hover:scale-[1.02] transition duration-500"
            >

              {/* Glass Card */}
              <div
                className="relative rounded-[2rem] p-8 md:p-10
                bg-[#1f120b]/80
                backdrop-blur-2xl
                border border-orange-500/10
                shadow-[0_0_40px_rgba(249,115,22,0.15)]"
              >

                {/* Card Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

                  <div>
                    <h2
                      className="text-3xl md:text-4xl font-bold text-white
                      group-hover:text-orange-300 transition-colors duration-300"
                    >
                      Diploma in Computer Engineering
                    </h2>

                    <p className="mt-3 text-lg font-semibold text-orange-300">
                      Govt Women's Polytechnic College, Trivandrum
                    </p>
                  </div>

                  {/* Year Badge */}
                  <div
                    className="self-start md:self-center px-6 py-3 rounded-full
                    bg-gradient-to-r from-orange-500/20 to-amber-500/20
                    border border-orange-400/20
                    text-orange-300 font-bold tracking-widest uppercase text-xs
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
                      text-orange-300
                      border border-white/10
                      hover:bg-orange-500
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
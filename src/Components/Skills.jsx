import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "C Programming", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden px-6 py-24
      bg-gradient-to-br from-[#1a0f08] via-[#2a140a] to-black"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Main Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-orange-500/25 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-orange-300/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]
        bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]
        bg-[size:60px_60px]"
      ></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <span
            className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase
            bg-white/5 border border-white/10
            text-orange-300 backdrop-blur-xl"
          >
            Technical Skills
          </span>

          <h1
            className="mt-8 text-5xl md:text-7xl font-black
            bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300
            text-transparent bg-clip-text"
          >
            Skills
          </h1>

          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about building modern websites, learning new
            technologies, and improving development skills every day.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl p-[1px]
              bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-yellow-500/20
              hover:scale-105 transition duration-500"
            >

              {/* Card */}
              <div
                className="relative h-full rounded-3xl p-8
                bg-[#1f120b]/80
                backdrop-blur-2xl
                border border-orange-500/10
                shadow-[0_0_40px_rgba(249,115,22,0.15)]"
              >

                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>

                {/* Icon Circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center
                  bg-gradient-to-r from-orange-400 to-amber-500
                  text-white text-2xl font-bold shadow-lg shadow-orange-500/30"
                >
                  {skill.name.charAt(0)}
                </div>

                {/* Skill Name */}
                <h3
                  className="mt-6 text-2xl font-bold text-white
                  group-hover:text-orange-300 transition duration-300"
                >
                  {skill.name}
                </h3>

                {/* Level Badge */}
                <div className="mt-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide
                    ${
                      skill.level === "Advanced"
                        ? "bg-green-500/20 text-green-300 border border-green-400/20"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/20"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500
                      ${
                        skill.level === "Advanced"
                          ? "w-[90%]"
                          : "w-[70%]"
                      }`}
                    ></div>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
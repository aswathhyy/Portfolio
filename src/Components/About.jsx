import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-6 py-24
      flex items-center justify-center
      bg-gradient-to-br
      from-[#020617]
      via-[#0b1120]
      to-black"
    >
      

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

      {/* Indigo Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"></div>

      {/* Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:60px_60px]"
      ></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE ================= */}

        <div className="relative group mx-auto">

          {/* Glow Border */}
          <div
            className="absolute -inset-1 rounded-[2rem]
            bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500
            blur-lg opacity-70 group-hover:opacity-100
            transition duration-700"
          ></div>

          {/* Glass Card */}
          <div
            className="relative overflow-hidden rounded-[2rem]
            bg-[#0f172a]/80
            backdrop-blur-2xl
            border border-white/10
            shadow-[0_0_60px_rgba(37,99,235,0.2)]"
          >

            {/* Floating Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80"
              alt="Developer"
              className="w-full h-[450px] object-cover rounded-[2rem]
              grayscale hover:grayscale-0
              scale-100 hover:scale-105
              transition duration-700"
            />
          </div>
        </div>

        

        <div className="space-y-8">

          {/* Small Tag */}
          <span
            className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase
            bg-white/5
            border border-white/10
            text-cyan-300
            backdrop-blur-xl"
          >
            Who I Am
          </span>

          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl font-black leading-tight
            bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
            text-transparent bg-clip-text"
          >
            About Me
          </h1>

          {/* Paragraphs */}
          <p className="text-zinc-300 text-lg leading-relaxed">
            I am a passionate and hardworking developer who enjoys
            exploring modern technologies and creating beautiful,
            user-friendly digital experiences.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed">
            My focus is not only on writing clean code but also on
            designing creative interfaces that feel smooth, modern,
            and interactive for users.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed">
            I love learning new frameworks, improving my problem-solving
            skills, and building real-world projects that combine
            creativity with technology.
          </p>

          

          <div className="flex flex-wrap gap-4 pt-4">

            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Python",
              "Web Development",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full text-sm font-medium
                bg-white/5
                border border-white/10
                text-cyan-300
                hover:bg-cyan-500 hover:text-white
                hover:scale-105
                transition duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}

          </div>

          

          <div className="pt-6">

            <button
              className="px-8 py-4 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
              transition duration-500"
            >
              Explore More →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
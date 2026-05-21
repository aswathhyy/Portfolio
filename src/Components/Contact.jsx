import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-24
      flex items-center justify-center
      bg-gradient-to-br
      from-[#020617]
      via-[#0b1120]
      to-black"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

      {/* Indigo Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"></div>

      {/* Cyan Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:60px_60px]"
      ></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-4xl w-full text-center">

        {/* Small Tag */}
        <span
          className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase
          bg-white/5
          border border-white/10
          text-cyan-300
          backdrop-blur-xl"
        >
          Get In Touch
        </span>

        {/* Heading */}
        <h1
          className="mt-8 text-5xl md:text-7xl font-black
          bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
          text-transparent bg-clip-text"
        >
          Contact Me
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Feel free to contact me for collaborations, freelance work,
          internships, or exciting opportunities in web development and
          software engineering.
        </p>

        {/* ================= CONTACT CARD ================= */}

        <div
          className="relative mt-16 overflow-hidden rounded-[2rem] p-[1px]
          bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/20"
        >

          {/* Glass Card */}
          <div
            className="relative rounded-[2rem] p-10 md:p-14
            bg-[#0f172a]/80
            backdrop-blur-2xl
            border border-white/10
            shadow-[0_0_50px_rgba(37,99,235,0.15)]"
          >

            {/* Card Glow */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl"></div>

            {/* Contact Items */}
            <div className="space-y-8">

              {/* Email */}
              <div
                className="group flex flex-col md:flex-row items-center justify-between
                gap-4 p-6 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-cyan-400/30 hover:bg-cyan-500/5
                transition duration-500"
              >
                <div className="flex items-center gap-4">

                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-cyan-400 to-blue-500
                    flex items-center justify-center
                    text-2xl shadow-lg shadow-cyan-500/30"
                  >
                    📧
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg">
                      Email
                    </h3>

                    <p className="text-zinc-400">
                      aswathybinu2006@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="group flex flex-col md:flex-row items-center justify-between
                gap-4 p-6 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-blue-400/30 hover:bg-blue-500/5
                transition duration-500"
              >
                <div className="flex items-center gap-4">

                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-blue-500 to-indigo-500
                    flex items-center justify-center
                    text-2xl shadow-lg shadow-blue-500/30"
                  >
                    📞
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg">
                      Phone
                    </h3>

                    <p className="text-zinc-400">
                      +91 9746520731
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className="group flex flex-col md:flex-row items-center justify-between
                gap-4 p-6 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-indigo-400/30 hover:bg-indigo-500/5
                transition duration-500"
              >
                <div className="flex items-center gap-4">

                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-indigo-500 to-purple-500
                    flex items-center justify-center
                    text-2xl shadow-lg shadow-indigo-500/30"
                  >
                    📍
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg">
                      Location
                    </h3>

                    <p className="text-zinc-400">
                      Kerala, India
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
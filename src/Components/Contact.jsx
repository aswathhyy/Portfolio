import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-24
      flex items-center justify-center
      bg-gradient-to-br from-[#1a0f08] via-[#2a140a] to-black"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Orange Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/25 rounded-full blur-[120px]"></div>

      {/* Amber Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px]"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-orange-300/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]
        bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]
        bg-[size:60px_60px]"
      ></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-4xl w-full text-center">

        {/* Tag */}
        <span
          className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase
          bg-white/5 border border-white/10
          text-orange-300 backdrop-blur-xl"
        >
          Get In Touch
        </span>

        {/* Heading */}
        <h1
          className="mt-8 text-5xl md:text-7xl font-black
          bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300
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
          bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-yellow-500/20"
        >
          {/* Glass Card */}
          <div
            className="relative rounded-[2rem] p-10 md:p-14
            bg-[#1f120b]/80
            backdrop-blur-2xl
            border border-orange-500/10
            shadow-[0_0_50px_rgba(249,115,22,0.15)]"
          >
            {/* Card Glow */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-orange-500/10 rounded-full blur-3xl"></div>

            {/* Contact Items */}
            <div className="space-y-8">

              {/* Email */}
              <div
                className="group flex flex-col md:flex-row items-center justify-between
                gap-4 p-6 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-orange-400/30 hover:bg-orange-500/5
                transition duration-500"
              >
                <div className="flex items-center gap-4">

                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-orange-400 to-amber-500
                    flex items-center justify-center
                    text-2xl shadow-lg shadow-orange-500/30"
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
                hover:border-amber-400/30 hover:bg-amber-500/5
                transition duration-500"
              >
                <div className="flex items-center gap-4">

                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-amber-500 to-yellow-500
                    flex items-center justify-center
                    text-2xl shadow-lg shadow-amber-500/30"
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
                hover:border-yellow-400/30 hover:bg-yellow-500/5
                transition duration-500"
              >
                <div className="flex items-center gap-4">

                  <div
                    className="w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-yellow-500 to-orange-500
                    flex items-center justify-center
                    text-2xl shadow-lg shadow-yellow-500/30"
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
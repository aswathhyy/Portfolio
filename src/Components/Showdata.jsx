import React from "react";

function Showdata({ users }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 py-10 px-4">
      
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg">
          Photo Gallery
        </h1>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {users.map((user) => (
            <div
              key={user.id}
              className="relative bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-1"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>

              {/* Image */}
              <img src={`https://picsum.photos/id/${user.id}/300/200`}
                alt={user.title}
                loading="lazy"
                className="w-full h-52 object-cover"
                />
                            {/* Content */}
              <div className="relative p-4">

                <h2 className="text-sm font-semibold text-cyan-300 line-clamp-2">
                  {user.title}
                </h2>

                <p className="text-xs text-gray-400 mt-3">
                  Photo ID: {user.id}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Showdata;
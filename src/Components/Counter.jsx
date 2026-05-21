import React, { useState,useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [multi,setMulti] =useState(2);
  useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
  function Increment() {
    if (count < 20) 
      setCount(count + multi*multi);
  }

  function Decrement() {
    if (count > 0)
       setCount(count -multi*multi);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      
      {/* Black background layer */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-80"></div>

      {/* Main Card */}
      <div className="relative p-10 rounded-2xl shadow-2xl flex flex-col items-center overflow-hidden">
        
        {/* Light glass effect */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center">
          
          <h2 className="text-white text-2xl font-semibold tracking-widest mb-4">
            COUNTER
          </h2>

          <h1 className="text-7xl font-extrabold text-white mb-8 uppercase">
            {count}
          </h1>

          <div className="flex gap-4">
            <button
              onClick={Increment}
              className="px-6 py-2 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 active:scale-95 transition"
            >
              Increment
            </button>

            <button
              onClick={Decrement}
              className="px-6 py-2 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 active:scale-95 transition"
            >
              Decrement
            </button>

            <button
              onClick={Reset}
              className="px-6 py-2 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-black active:scale-95 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
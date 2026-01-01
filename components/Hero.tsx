import React from 'react';
import phoneImage from '../images/photo_2025-12-31_13-03-49.jpg?url';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-[10px] font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Waitlist Open
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8 text-white">
            Lightweight COO <br /> <span className="text-gray-500">in your Pocket.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg font-medium leading-relaxed mb-10 tracking-tight">
            An intelligent operating layer that translates intent into coordinated action. Maintain momentum, effortlessly.
          </p>
          <div className="w-full max-w-sm relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <form className="relative flex w-full items-center bg-[#0A0A0A] rounded-2xl p-1.5 ring-1 ring-white/10 focus-within:ring-white/20 transition-all duration-300" onSubmit={(e) => e.preventDefault()}>
              <div className="pl-4 pr-3 text-gray-500">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <input 
                className="w-full bg-transparent border-none text-white placeholder:text-gray-600 focus:ring-0 py-3 text-[15px] font-medium" 
                placeholder="Email address" 
                required 
                type="email" 
              />
              <button 
                className="whitespace-nowrap rounded-xl bg-white hover:bg-gray-100 text-black px-5 py-2.5 text-sm font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95" 
                type="submit"
              >
                Get Access
              </button>
            </form>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
            <div className="flex -space-x-2">
              <div className="size-6 rounded-full bg-gray-800 border border-black ring-1 ring-white/5"></div>
              <div className="size-6 rounded-full bg-gray-700 border border-black ring-1 ring-white/5"></div>
              <div className="size-6 rounded-full bg-gray-600 border border-black ring-1 ring-white/5"></div>
            </div>
            <p>Join 2,000+ people on the waitlist</p>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-[360px] h-[720px] z-10 transform transition-transform hover:scale-[1.01] duration-500">
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-black rounded-[3.5rem] border-[8px] border-[#1a1a1a] shadow-[0_0_0_4px_#333,0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Metallic shine on bezel */}
              <div className="absolute inset-0 rounded-[3rem] ring-1 ring-white/20 pointer-events-none z-50"></div>
              
              {/* Dynamic Island / Notch Area */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-40"></div>
          
              {/* Screen Content - Image */}
              <div 
                className="h-full w-full rounded-[3rem] overflow-hidden relative bg-black"
                style={{
                  backgroundImage: `url(${phoneImage})`,
                  backgroundSize: '350px 710px',
                  backgroundPosition: '50% 15%',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Glass Reflection Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30 pointer-events-none z-30"></div>
              </div>
            </div>
            
            {/* Physical Buttons */}
            <div className="absolute top-[160px] -left-[4px] w-[4px] h-[32px] bg-[#2a2a2a] rounded-l-md border-l border-y border-white/20"></div>
            <div className="absolute top-[210px] -left-[4px] w-[4px] h-[60px] bg-[#2a2a2a] rounded-l-md border-l border-y border-white/20"></div>
            <div className="absolute top-[280px] -left-[4px] w-[4px] h-[60px] bg-[#2a2a2a] rounded-l-md border-l border-y border-white/20"></div>
            <div className="absolute top-[230px] -right-[4px] w-[4px] h-[90px] bg-[#2a2a2a] rounded-r-md border-r border-y border-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import phoneImage from '../images/photo_2025-12-31_13-03-49.jpg?url';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Waitlist Open
          </div>

          <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight leading-[1] mb-8 text-white">
            Lightweight COO<br />
            <span className="font-serif italic font-normal text-gray-500">in your pocket.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-md font-normal leading-relaxed mb-10">
            Praxa sits between your intent and your execution — translating chaotic days into coordinated action, without the overhead.
          </p>

          <div className="w-full max-w-sm relative">
            <form
              className="flex w-full items-center bg-[#0d0d0d] rounded-2xl p-1.5 ring-1 ring-white/10 focus-within:ring-white/25 transition-all duration-300"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="pl-4 pr-3 text-gray-600">
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </div>
              <input
                className="w-full bg-transparent border-none text-white placeholder:text-gray-600 focus:ring-0 py-3 text-sm font-medium"
                placeholder="Email address"
                required
                type="email"
              />
              <button
                className="whitespace-nowrap rounded-xl bg-white hover:bg-gray-100 text-black px-5 py-2.5 text-sm font-semibold transition-all active:scale-95"
                type="submit"
              >
                Get Access
              </button>
            </form>
            <p className="text-xs text-gray-700 mt-4 text-center lg:text-left">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[640px] z-10 transition-transform hover:scale-[1.01] duration-700">
            <div className="absolute inset-0 bg-black rounded-[3rem] border-[7px] border-[#1c1c1c] shadow-[0_0_0_3px_#2a2a2a,0_50px_120px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute inset-0 rounded-[2.6rem] ring-1 ring-white/10 pointer-events-none z-50"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-40"></div>
              <div
                className="h-full w-full rounded-[2.6rem] overflow-hidden relative bg-black"
                style={{
                  backgroundImage: `url(${phoneImage})`,
                  backgroundSize: '314px 626px',
                  backgroundPosition: '50% 15%',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-transparent pointer-events-none z-30"></div>
              </div>
            </div>
            <div className="absolute top-[140px] -left-[4px] w-[4px] h-[28px] bg-[#252525] rounded-l-md"></div>
            <div className="absolute top-[188px] -left-[4px] w-[4px] h-[52px] bg-[#252525] rounded-l-md"></div>
            <div className="absolute top-[252px] -left-[4px] w-[4px] h-[52px] bg-[#252525] rounded-l-md"></div>
            <div className="absolute top-[200px] -right-[4px] w-[4px] h-[80px] bg-[#252525] rounded-r-md"></div>
          </div>

          <div className="absolute -bottom-4 left-4 lg:left-0 bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-2xl backdrop-blur-sm max-w-[220px]">
            <div className="size-9 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-green-400 text-sm">call</span>
            </div>
            <div>
              <p className="text-white text-xs font-semibold leading-tight">AI Ops Agent</p>
              <p className="text-gray-600 text-[10px] leading-tight mt-0.5">Incoming · 09:07 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

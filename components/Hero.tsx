import React from 'react';

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
            {/* Removed the background floating box as requested */}
          
          <div className="relative border-[#1a1a1a] bg-black border-[10px] rounded-[3.5rem] h-[720px] w-[360px] shadow-2xl ring-1 ring-white/10 z-10 transform transition-transform hover:scale-[1.01] duration-500">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>
            
            <div className="h-full w-full bg-[#000000] rounded-[3rem] overflow-hidden relative font-sans flex flex-col">
              {/* Status Bar */}
              <div className="h-14 w-full flex items-center justify-between px-7 pt-4 z-20 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold text-white tracking-tight">1:03</span>
                  <div className="flex gap-0.5 items-center bg-white/10 px-1.5 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-[10px] text-green-400">check_circle</span>
                    <span className="text-[10px] text-white/80 font-medium">0-2</span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-white">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-[16px] text-white">wifi</span>
                  <span className="material-symbols-outlined text-[16px] text-white">battery_full</span>
                </div>
              </div>

              {/* App Content */}
              <div className="flex-1 px-5 flex flex-col bg-gradient-to-b from-[#1C1C1E] to-black">
                <div className="pt-8 mb-6 shrink-0">
                  <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">Wednesday, Dec 31</p>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Good afternoon</h3>
                </div>

                {/* Insights Bar */}
                <div className="w-full bg-[#2C2C2E] rounded-2xl p-4 flex items-center justify-between mb-8 border border-white/5 shadow-lg active:scale-[0.98] transition-all cursor-pointer shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded bg-indigo-500/20 text-indigo-400">
                         <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    </div>
                    <span className="text-[14px] text-white font-medium">Praxa Insights: 0</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-500 text-xl">expand_more</span>
                </div>

                {/* Sprint Header */}
                <div className="flex justify-between items-center mb-4 px-1 shrink-0">
                  <div>
                    <h4 className="text-[18px] font-bold text-white tracking-tight">This Week's Sprint</h4>
                    <p className="text-[13px] text-gray-500 font-medium mt-0.5">2 of 5 completed</p>
                  </div>
                  <div className="relative size-12 flex items-center justify-center">
                    <svg className="transform -rotate-90 w-12 h-12">
                      <circle cx="24" cy="24" fill="transparent" r="18" stroke="#333" strokeWidth="4"></circle>
                      <circle cx="24" cy="24" fill="transparent" r="18" stroke="white" strokeDasharray="113" strokeDashoffset="68" strokeWidth="4" strokeLinecap="round"></circle>
                    </svg>
                    <span className="absolute text-[10px] font-bold text-white">40%</span>
                  </div>
                </div>

                {/* Task List - STATIC NO SCROLL */}
                <div className="flex flex-col gap-3 relative">
                  
                  {/* Task 1 - Incomplete */}
                  <div className="bg-[#1C1C1E] p-4 rounded-3xl flex items-center gap-4 border border-white/5 shadow-sm">
                    <div className="size-5 rounded-full border-2 border-red-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white truncate">Do 10 Mile run</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10">
                        <div className="size-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[10px] text-red-400 font-bold uppercase tracking-wide">Health</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Dec 29</span>
                  </div>

                  {/* Task 2 - Complete */}
                  <div className="bg-[#1C1C1E] p-4 rounded-3xl flex items-center gap-4 border border-white/5 opacity-50">
                    <div className="size-5 rounded-full bg-red-500 border-2 border-red-500 flex items-center justify-center flex-shrink-0 text-black">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white line-through text-gray-500 truncate">Deep Work Session</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10">
                        <div className="size-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[10px] text-red-400 font-bold uppercase tracking-wide">Health</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Dec 29</span>
                  </div>

                  {/* Task 3 - Incomplete Today */}
                  <div className="bg-[#1C1C1E] p-4 rounded-3xl flex items-center gap-4 border border-white/5">
                    <div className="size-5 rounded-full border-2 border-red-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white truncate">Review Q4 Analytics</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10">
                        <div className="size-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[10px] text-red-400 font-bold uppercase tracking-wide">Health</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-black bg-white px-2 py-0.5 rounded uppercase tracking-wide">Today</span>
                  </div>

                </div>

                {/* Bottom Section (Pinned to bottom) */}
                <div className="mt-auto pb-6">
                    {/* Floating Input Bar */}
                  <div className="bg-[#2C2C2E] rounded-full p-1.5 flex items-center gap-2 border border-white/5 shadow-2xl mb-6 mx-2">
                    <div className="flex-1 bg-black/40 rounded-full h-10 px-4 flex items-center text-gray-500 text-[14px]">
                      Ask me anything...
                    </div>
                    <div className="size-10 flex items-center justify-center text-gray-400 hover:text-white rounded-full transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[20px]">mic</span>
                    </div>
                    <div className="size-10 flex items-center justify-center text-gray-400 hover:text-white rounded-full transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
                    </div>
                    <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg cursor-pointer">
                      <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                    </div>
                  </div>
                  
                  {/* Bottom Nav - SOLID BLACK BACKGROUND */}
                  <div className="bg-black pt-4 pb-2 border-t border-white/5 -mx-5 px-5 flex justify-around items-end">
                    <div className="flex flex-col items-center gap-1.5 text-white">
                      <span className="material-symbols-outlined text-[26px] fill-current">home</span>
                      <span className="text-[10px] font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[26px]">check_circle</span>
                      <span className="text-[10px] font-medium">Initiatives</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[26px]">person</span>
                      <span className="text-[10px] font-medium">Profile</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
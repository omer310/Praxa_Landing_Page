import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/90 text-[11px] font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Waitlist Open
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            Lightweight COO <br /> in your Pocket.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl font-normal leading-relaxed mb-10 tracking-tight">
            An intelligent operating layer that translates intent into coordinated action. Maintain momentum, effortlessly.
          </p>
          <div className="w-full max-w-md relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <form className="relative flex w-full items-center bg-[#050505] rounded-2xl p-1.5 ring-1 ring-white/10 focus-within:ring-primary/50 transition-all duration-300" onSubmit={(e) => e.preventDefault()}>
              <div className="pl-4 pr-2 text-gray-500">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <input 
                className="w-full bg-transparent border-none text-white placeholder:text-gray-600 focus:ring-0 py-3 text-base font-medium" 
                placeholder="Email address" 
                required 
                type="email" 
              />
              <button 
                className="whitespace-nowrap rounded-xl bg-white hover:bg-gray-100 text-black px-6 py-3 font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                type="submit"
              >
                Get Access
              </button>
            </form>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              <div className="size-8 rounded-full bg-gray-800 border-2 border-black ring-1 ring-white/10"></div>
              <div className="size-8 rounded-full bg-gray-700 border-2 border-black ring-1 ring-white/10"></div>
              <div className="size-8 rounded-full bg-gray-600 border-2 border-black ring-1 ring-white/10"></div>
            </div>
            <p>Join 2,000+ people on the waitlist</p>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end perspective-1000">
          <div className="absolute top-20 -left-10 w-64 h-80 bg-gradient-to-br from-gray-800/20 to-black/40 backdrop-blur-3xl border border-white/5 rounded-3xl -z-10 animate-float-delayed transform rotate-[-6deg]"></div>
          
          <div className="relative border-gray-900 bg-black border-[8px] rounded-[3.5rem] h-[680px] w-[340px] shadow-2xl animate-float ring-1 ring-white/20 z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>
            
            <div className="h-full w-full bg-[#111111] rounded-[3rem] overflow-hidden relative font-sans">
              {/* Status Bar */}
              <div className="h-12 w-full flex items-center justify-between px-7 pt-3 z-20 absolute top-0">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-white tracking-tight">1:03</span>
                  <div className="flex gap-0.5">
                    <span className="material-symbols-outlined text-[12px] text-green-500">check_circle</span>
                    <span className="text-[10px] text-white">0-2</span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-white">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-[16px] text-white">wifi</span>
                  <span className="material-symbols-outlined text-[16px] text-white">battery_full</span>
                </div>
              </div>

              {/* App Content */}
              <div className="h-full w-full pt-16 px-5 bg-gradient-to-b from-[#161618] to-[#0d0d0d] flex flex-col">
                <div className="mb-6">
                  <p className="text-xs text-gray-400 font-medium mb-1">Wednesday, Dec 31</p>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Good afternoon</h3>
                </div>

                {/* Insights Bar */}
                <div className="w-full bg-[#242426] rounded-xl p-3 flex items-center justify-between mb-8 border border-white/5 shadow-sm active:bg-[#2C2C2E] transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-white text-lg">auto_awesome</span>
                    <span className="text-[14px] text-white font-medium">Praxa Insights: 0</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-500 text-xl">expand_more</span>
                </div>

                {/* Sprint Header */}
                <div className="flex justify-between items-center mb-4 px-1">
                  <div>
                    <h4 className="text-[17px] font-semibold text-white tracking-tight">This Week's Sprint</h4>
                    <p className="text-[13px] text-gray-400 font-medium mt-0.5">2 of 5 completed</p>
                  </div>
                  <div className="relative size-12 flex items-center justify-center">
                    <svg className="transform -rotate-90 w-12 h-12">
                      <circle cx="24" cy="24" fill="transparent" r="18" stroke="#333" strokeWidth="4"></circle>
                      <circle cx="24" cy="24" fill="transparent" r="18" stroke="white" strokeDasharray="113" strokeDashoffset="68" strokeWidth="4" strokeLinecap="round"></circle>
                    </svg>
                    <span className="absolute text-[10px] font-bold text-white">40%</span>
                  </div>
                </div>

                {/* Task List */}
                <div className="flex-1 overflow-y-auto space-y-3 relative no-scrollbar pb-32">
                  
                  {/* Task 1 - Incomplete */}
                  <div className="bg-[#1C1C1E] p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                    <div className="size-5 rounded-full border-2 border-red-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white truncate">Do 10 Mile run</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10">
                        <div className="size-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[11px] text-red-400 font-medium">Health</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Dec 29</span>
                  </div>

                  {/* Task 2 - Complete */}
                  <div className="bg-[#1C1C1E] p-4 rounded-2xl flex items-center gap-4 border border-white/5 opacity-60">
                    <div className="size-5 rounded-full bg-red-500 border-2 border-red-500 flex items-center justify-center flex-shrink-0 text-black">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white line-through text-gray-500 truncate">Deep Work Session</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10">
                        <div className="size-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[11px] text-red-400 font-medium">Health</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Dec 29</span>
                  </div>

                  {/* Task 3 - Incomplete Today */}
                  <div className="bg-[#1C1C1E] p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                    <div className="size-5 rounded-full border-2 border-red-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white truncate">Review Q4 Analytics</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10">
                        <div className="size-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[11px] text-red-400 font-medium">Health</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-white/80 bg-white/10 px-1.5 py-0.5 rounded uppercase tracking-wide">Today</span>
                  </div>

                  {/* Task 4 - Incomplete */}
                  <div className="bg-[#1C1C1E] p-4 rounded-2xl flex items-center gap-4 border border-white/5">
                    <div className="size-5 rounded-full border-2 border-red-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white truncate">Do 1000 push ups</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10">
                        <div className="size-1.5 rounded-full bg-red-500"></div>
                        <span className="text-[11px] text-red-400 font-medium">Health</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Dec 28</span>
                  </div>

                  {/* Task 5 - Complete Teal */}
                  <div className="bg-[#1C1C1E] p-4 rounded-2xl flex items-center gap-4 border border-white/5 opacity-60">
                    <div className="size-5 rounded-full bg-teal-500 border-2 border-teal-500 flex items-center justify-center flex-shrink-0 text-black">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[15px] font-medium text-white line-through text-gray-500 truncate">Create a better resume</h5>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-teal-500/10">
                        <div className="size-1.5 rounded-full bg-teal-500"></div>
                        <span className="text-[11px] text-teal-400 font-medium">Career</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Tomorrow</span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-6 left-4 right-4 z-20">
                  <div className="bg-[#242426]/90 backdrop-blur-xl rounded-[2rem] p-1.5 flex items-center gap-2 border border-white/5 shadow-2xl mb-6">
                    <div className="flex-1 bg-black/20 rounded-full h-11 px-5 flex items-center text-gray-500 text-[15px]">
                      Ask me anything...
                    </div>
                    <div className="size-11 flex items-center justify-center text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[24px]">mic</span>
                    </div>
                    <div className="size-11 flex items-center justify-center text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[24px]">graphic_eq</span>
                    </div>
                    <div className="size-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shadow-lg cursor-pointer">
                      <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
                    </div>
                  </div>
                  
                  {/* Bottom Nav */}
                  <div className="flex justify-around items-end pb-2 text-[10px] font-medium text-gray-500">
                    <div className="flex flex-col items-center gap-1 text-white">
                      <span className="material-symbols-outlined text-[24px] fill-current">home</span>
                      <span>Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[24px]">check_circle</span>
                      <span>Initiatives</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[24px]">person</span>
                      <span>Profile</span>
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
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-black/50 py-10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-8 justify-center lg:justify-between">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="size-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(10,132,255,0.15)] group-hover:shadow-[0_0_25px_rgba(10,132,255,0.25)] transition-all">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">94%</p>
              <p className="text-sm text-gray-500 font-medium">Retention Rate</p>
            </div>
          </div>
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent h-12 self-center"></div>
          <div className="flex items-center gap-4 group cursor-default">
            <div className="size-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(94,92,230,0.15)] group-hover:shadow-[0_0_25px_rgba(94,92,230,0.25)] transition-all">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">1.2k</p>
              <p className="text-sm text-gray-500 font-medium">Daily Voice Intents</p>
            </div>
          </div>
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent h-12 self-center"></div>
          <div className="flex items-center gap-4 group cursor-default">
            <div className="size-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.15)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">15k+</p>
              <p className="text-sm text-gray-500 font-medium">Actions Executed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
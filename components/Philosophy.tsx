import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 px-6 relative" id="philosophy">
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-900/20 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">The Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            More than a task manager. <br /> An <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Operating Layer</span>.
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              Most apps are just lists where tasks go to die. Praxa is an active operating layer that sits between your intent and your execution. It proactively engages you to ensure momentum is maintained.
            </p>
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-colors">
              <div className="size-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Intent Translation</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Speak roughly into the app, and our models convert chaotic thoughts into structured, executable specs.</p>
            </div>
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-colors">
              <div className="size-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Momentum Guardrails</h4>
              <p className="text-text-secondary text-sm leading-relaxed">The system detects when you're slipping and intervenes with smaller steps to get you back on track.</p>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card h-full rounded-3xl p-10 border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-20 -bottom-20 opacity-5 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                <span className="material-symbols-outlined text-[240px]">support_agent</span>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 text-primary shadow-[0_0_20px_rgba(10,132,255,0.2)]">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">The AI COO Call</h4>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    Every time you use your setup, your AI agent calls you to review yesterday's output and lock in today's plan. It's like a standup with a super-intelligent partner that knows your calendar, your goals, and your excuses.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <div className="size-10 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                    <span className="material-symbols-outlined text-white">call</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Incoming call...</p>
                    <p className="text-primary text-xs">AI Operations Agent</p>
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

export default Philosophy;
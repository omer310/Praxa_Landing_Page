import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 relative" id="features">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Mobile Execution</h2>
          <p className="text-text-secondary text-lg">Manage your entire operation from your pocket with features designed for speed and clarity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">record_voice_over</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Proactive AI Agent</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Don't open the app? The app calls you. Our AI agent ensures you never lose sight of your weekly goals.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">PREMIUM</div>
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">calendar_today</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Calendar Integration</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Two-way sync with Google Calendar. Praxa knows when you are busy and schedules execution blocks.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">PREMIUM</div>
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Intelligence</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Connect your inbox. Praxa scans for action items and deadlines, converting them into pending intents.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">speed</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Weekly Momentum</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Visual analytics that track your shipping velocity. Gamify your output and spot burnout patterns.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">mic_none</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Brain Dump Mode</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Tap once and talk. Praxa captures your stream of consciousness and extracts actionable tickets instantly.</p>
          </div>
          <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="size-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">layers</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Stack Integration</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Push tasks to Linear, GitHub, or Notion with a single swipe. We connect to your existing desktop tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
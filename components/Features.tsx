import React from 'react';

const emailItems = [
  { from: 'David Kim', subject: 'Contract renewal — action needed', tag: 'Action', color: 'text-orange-400 bg-orange-400/10 border-orange-400/20' },
  { from: 'Sarah (Team)', subject: 'Q2 review — confirm attendance', tag: 'Reply', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
  { from: 'Stripe', subject: '$2,400 payment received', tag: 'Done', color: 'text-green-400 bg-green-400/10 border-green-400/20' },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 relative" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Built for<br />
            <span className="font-serif italic font-normal text-gray-500">Mobile Execution</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-xs md:text-right leading-relaxed">
            Every feature designed to reduce friction between thought and output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Row 1 — Large: AI Agent (2 col) + Calendar (1 col) */}
          <div className="md:col-span-2 bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl p-8 relative overflow-hidden min-h-[280px] group hover:border-[#2a2a2a] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-primary/60 mb-4 block">01 — Core</span>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Proactive AI Agent</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Don't open the app? The app calls you. Your AI agent checks in daily to review goals and lock in your plan.
            </p>
            <div className="absolute bottom-6 right-6 bg-black/60 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 w-60 backdrop-blur-md shadow-xl">
              <div className="size-9 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-green-400 text-base">call</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-white text-xs font-semibold">AI Operations Agent</p>
                <p className="text-gray-500 text-[10px] mt-0.5">Incoming call · 09:07 AM</p>
              </div>
              <div className="flex gap-1.5 shrink-0">
                <div className="size-7 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400 text-xs">call_end</span>
                </div>
                <div className="size-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400 text-xs">call</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl p-8 min-h-[280px] relative overflow-hidden group hover:border-[#2a2a2a] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400/60 mb-4 block">02 — Premium</span>
            <div className="absolute top-4 right-4 border border-white/10 bg-white/5 text-white/50 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest">PREMIUM</div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Calendar Sync</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Two-way sync with Google Calendar. Praxa knows when you're busy and schedules execution blocks around it.
            </p>
            <div className="absolute bottom-6 left-8 right-8 bg-black/50 border border-[#1f1f1f] rounded-xl p-3 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-2 rounded-full bg-primary"></div>
                <span className="text-gray-400 text-[10px] font-medium">Today · 3 blocks free</span>
              </div>
              <div className="space-y-1.5">
                {['9–10 AM · Deep Work', '2–3 PM · Review', '4–5 PM · Open'].map((slot, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`h-1.5 rounded-full ${i === 2 ? 'bg-primary/40 w-8' : 'bg-white/10 w-12'}`}></div>
                    <span className="text-gray-600 text-[9px]">{slot}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — Brain Dump (1 col) + Email Intelligence (2 col) */}
          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl p-8 min-h-[260px] relative overflow-hidden group hover:border-[#2a2a2a] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-orange-400/60 mb-4 block">03 — Input</span>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Brain Dump</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tap once and talk. Praxa captures your stream of consciousness and extracts actionable tickets instantly.
            </p>
            <div className="absolute bottom-6 left-8 right-8 flex items-center gap-3 bg-black/50 border border-[#1f1f1f] rounded-xl px-3 py-2.5 backdrop-blur-md">
              <div className="size-6 rounded-full bg-orange-500/15 border border-orange-500/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-orange-400 text-xs">mic</span>
              </div>
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-3/5 bg-gradient-to-r from-orange-500/50 to-orange-400/30 rounded-full"></div>
              </div>
              <span className="text-gray-600 text-[10px] shrink-0">0:42</span>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#0d0d0d] border border-[#1f1f1f] rounded-3xl p-8 relative overflow-hidden min-h-[260px] group hover:border-[#2a2a2a] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent pointer-events-none"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-pink-400/60 mb-4 block">04 — Premium</span>
            <div className="absolute top-4 right-4 border border-white/10 bg-white/5 text-white/50 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest">PREMIUM</div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Email Intelligence</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Connect your inbox. Praxa scans for action items and deadlines, converting them into pending intents.
            </p>
            <div className="absolute bottom-5 right-6 space-y-1.5 w-72">
              {emailItems.map((email, i) => (
                <div key={i} className="bg-black/60 border border-[#1f1f1f] rounded-xl px-3 py-2 flex items-center gap-2.5 backdrop-blur-md">
                  <div className="min-w-0 flex-1">
                    <p className="text-white/80 text-[10px] font-semibold truncate">{email.from}</p>
                    <p className="text-gray-600 text-[9px] truncate">{email.subject}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${email.color} shrink-0`}>{email.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 — Two compact cards */}
          <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-6 flex items-start gap-4 group hover:border-[#2a2a2a] transition-colors duration-500">
            <div className="size-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-green-400 text-base">speed</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Weekly Momentum</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Visual analytics that track your shipping velocity and surface burnout patterns early.</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-6 flex items-start gap-4 group hover:border-[#2a2a2a] transition-colors duration-500">
            <div className="size-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-teal-400 text-base">layers</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Stack Integration</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Push tasks to Linear, GitHub, or Notion with a single swipe. Connect your existing desktop workflow without changing how you work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Voice Agent',
    label: 'Talk to Praxa. It handles the rest.',
    body: 'Open the panel and speak freely. The LiveKit-powered voice agent understands your context, updates your sprint in real time, and can act on your email and calendar — all without you switching apps.',
  },
  {
    number: '02',
    title: 'Smart Insights',
    label: 'AI surfaces what actually matters.',
    body: "Every day, Praxa scans your tasks, inbox, and calendar and surfaces the 17 types of actions that need a decision: reschedule this, deprioritize that, follow up here. Swipe yes or no — done.",
  },
  {
    number: '03',
    title: 'Check-In Calls',
    label: 'Your agent calls your phone.',
    body: "On a schedule you set, Praxa calls your actual phone number. It reviews what you completed, what stalled, and locks in a prioritized plan for the day. Post-call, a full session brief lands in the app.",
  },
];

const Philosophy: React.FC = () => {
  return (
    <section className="px-5 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-8" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 border-b border-rim pb-8 sm:pb-10">
          <h2
            className="font-display font-semibold text-cream leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.8vw, 3.2rem)' }}
          >
            How it works
          </h2>
          <p className="text-sm text-soft max-w-xs leading-relaxed">
            Three interlocking layers that replace friction with forward motion.
          </p>
        </div>

        <div>
          {steps.map((step) => (
            <div
              key={step.number}
              className="group grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] md:grid-cols-[100px_1fr_1fr] gap-4 sm:gap-6 md:gap-0 py-8 sm:py-10 md:py-12 border-b border-rim -mx-5 sm:-mx-8 md:-mx-12 px-5 sm:px-8 md:px-12 hover:bg-surface/25 transition-colors duration-300"
            >
              <div className="pt-1">
                <span className="font-display text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] font-semibold text-rim leading-none select-none group-hover:text-accent/25 transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              <div className="md:pr-16 md:border-r md:border-rim">
                <h3
                  className="font-display font-semibold text-cream leading-tight mb-1.5"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-[12px] font-medium text-accent/80 tracking-[0.12em] uppercase">
                  {step.label}
                </p>
              </div>

              <div className="col-span-2 md:col-span-1 md:pl-16 flex items-start pt-1 md:pt-0">
                <p className="text-[13px] sm:text-[14px] text-soft leading-[1.75] max-w-lg">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

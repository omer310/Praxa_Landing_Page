import React from 'react';

const features = [
  {
    name: 'Check-In Calls',
    desc: 'Praxa calls your actual phone number on a schedule you set — weekly for Pro, monthly on Free. It reviews yesterday, locks in today, and sends a full session brief back to the app.',
    tag: 'Core',
  },
  {
    name: 'Voice Agent',
    desc: "Tap the panel and talk. The LiveKit-powered agent adds tasks, reshuffles your sprint, and queries your email or calendar — all from a single live conversation. No switching apps.",
    tag: 'Core',
  },
  {
    name: 'Daily Brief',
    desc: 'Every morning, a curated AI summary lands in the app: what needs action from your inbox, what conflicts exist in your calendar, and which tasks are at risk. One screen, full picture.',
    tag: 'Core',
  },
  {
    name: 'Smart Insights',
    desc: 'Praxa continuously monitors your sprint and surfaces 17 types of actionable suggestions — reschedule, deprioritize, follow up, mark done. Swipe yes or no on your Home tab.',
    tag: 'Core',
  },
  {
    name: 'Email Mode',
    desc: 'Connect Gmail. Praxa classifies your inbox into what needs a reply vs. FYI, drafts responses in your voice, and extracts tasks and meetings directly from threads.',
    tag: 'Pro',
  },
  {
    name: 'Calendar Mode',
    desc: 'Connect Google Calendar. Praxa detects conflicts, finds free execution slots, and auto-schedules your sprint tasks into your real calendar with two-way sync.',
    tag: 'Pro',
  },
  {
    name: 'CRM Mode',
    desc: 'Track professional relationships with health scores, follow-up timing, full email and calendar history per contact, and AI-generated relationship insights.',
    tag: 'Pro',
  },
  {
    name: 'Notion + Slack',
    desc: 'The agent can push to Notion pages and send Slack messages on your behalf. Every action goes through your approval — you stay in control of what gets sent.',
    tag: 'Pro',
  },
];

const Features: React.FC = () => {
  return (
    <section className="px-5 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-8 border-t border-rim" id="features">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 border-b border-rim pb-8 sm:pb-10">
          <h2
            className="font-display font-semibold text-cream leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.8vw, 3.2rem)' }}
          >
            Everything you need
          </h2>
          <p className="text-sm text-soft max-w-xs leading-relaxed">
            Every feature is in the app today, not on a roadmap.
          </p>
        </div>

        <div>
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group py-6 sm:py-8 border-b border-rim grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-2 sm:gap-3 md:gap-12 md:items-baseline -mx-5 sm:-mx-8 md:-mx-12 px-5 sm:px-8 md:px-12 hover:bg-surface/50 transition-colors duration-200"
            >
              <div className="flex items-start justify-between md:block">
                <h3
                  className="font-display font-semibold text-cream leading-tight"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.6rem)' }}
                >
                  {feature.name}
                </h3>
                <div className="md:hidden flex items-center">
                  <span
                    className={`text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 border whitespace-nowrap ${
                      feature.tag === 'Pro'
                        ? 'border-accent/35 text-accent bg-accent/5'
                        : 'border-rim text-soft'
                    }`}
                  >
                    {feature.tag}
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-soft leading-[1.75]">{feature.desc}</p>
              <div className="hidden md:flex justify-end">
                <span
                  className={`text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 border whitespace-nowrap ${
                    feature.tag === 'Pro'
                      ? 'border-accent/35 text-accent bg-accent/5'
                      : 'border-rim text-soft'
                  }`}
                >
                  {feature.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

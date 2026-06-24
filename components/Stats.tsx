import React from 'react';

const stats = [
  { value: '94%', label: 'Weekly Retention', sub: 'across active users' },
  { value: '1.2k', label: 'Daily Voice Intents', sub: 'captured & processed' },
  { value: '15k+', label: 'Actions Executed', sub: 'since private beta' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start px-8 py-6 md:py-4 first:pl-0 last:pr-0">
              <p className="text-4xl font-bold text-white tracking-tight tabular-nums">{stat.value}</p>
              <p className="text-sm font-semibold text-white/70 mt-1">{stat.label}</p>
              <p className="text-xs text-gray-600 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

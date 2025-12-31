import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-500 cursor-default">
            <div className="mb-4 size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined">trending_up</span>
            </div>
            <p className="text-3xl font-bold text-white tracking-tight mb-1">94%</p>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Retention Rate</p>
          </div>
          
          <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-500 cursor-default">
             <div className="mb-4 size-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                <span className="material-symbols-outlined">record_voice_over</span>
            </div>
            <p className="text-3xl font-bold text-white tracking-tight mb-1">1.2k</p>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Daily Voice Intents</p>
          </div>
          
          <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-500 cursor-default">
             <div className="mb-4 size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <span className="material-symbols-outlined">bolt</span>
            </div>
            <p className="text-3xl font-bold text-white tracking-tight mb-1">15k+</p>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Actions Executed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
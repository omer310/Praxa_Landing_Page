import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A84FF]/5 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto rounded-[3rem] bg-[#0A0A0A] border border-white/10 p-8 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="size-20 rounded-3xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-[0_0_40px_rgba(10,132,255,0.3)] mb-4 animate-float">
            <span className="material-symbols-outlined text-5xl">track_changes</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Ready to upgrade your<br /> personal operating system?
          </h2>
          <p className="text-xl text-gray-400 max-w-xl font-medium">
            Join the waitlist for iOS and Android beta. Spots are rolling out weekly.
          </p>
          <div className="w-full max-w-md mt-6">
            <form className="flex w-full flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm transition-all" 
                placeholder="Enter your email" 
                required 
                type="email" 
              />
              <button 
                className="rounded-2xl bg-white hover:bg-gray-100 transition-all px-8 py-4 text-base font-bold text-black shadow-lg shadow-white/10 whitespace-nowrap active:scale-95" 
                type="submit"
              >
                Join Waitlist
              </button>
            </form>
            <p className="text-xs text-gray-600 mt-6 font-medium">
              By joining, you agree to our Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
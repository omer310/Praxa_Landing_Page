import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="border border-white/8 rounded-3xl bg-[#0d0d0d] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold tracking-widest uppercase text-primary/60 mb-4">Early Access</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Ready to upgrade your<br />
                <span className="font-serif italic font-normal text-gray-500">personal operating system?</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Join the waitlist for iOS and Android beta. Spots rolling out weekly.
              </p>
            </div>

            <div className="w-full md:w-auto md:min-w-[320px] shrink-0">
              <form
                className="flex w-full flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-600 px-5 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
                <button
                  className="w-full rounded-xl bg-white hover:bg-gray-100 transition-all px-8 py-3.5 text-sm font-bold text-black active:scale-[0.98]"
                  type="submit"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="text-[11px] text-gray-700 mt-3 text-center">
                By joining, you agree to our{' '}
                <a href="/terms" className="underline underline-offset-2 hover:text-gray-500 transition-colors">Terms of Service</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

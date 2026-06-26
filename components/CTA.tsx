import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="px-8 md:px-12 pt-24 pb-28 border-t border-rim relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-soft mb-10">
            Early Access
          </p>

          <h2
            className="font-display font-semibold text-cream leading-[0.88] mb-10"
            style={{ fontSize: 'clamp(3rem, 7.5vw, 8rem)' }}
          >
            Your call
            <br />
            is incoming.
          </h2>

          <p className="text-[15px] text-soft leading-[1.75] max-w-md mb-12">
            Join the waitlist for iOS and Android beta. Spots roll out weekly. The earlier you're in, the more it shapes what gets built.
          </p>

          <form
            className="flex items-stretch gap-0 max-w-[480px] ring-1 ring-rim focus-within:ring-accent/40 transition-all duration-300"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="flex-1 bg-surface text-cream placeholder:text-soft/50 px-5 py-4 text-sm focus:outline-none min-w-0"
              placeholder="your@email.com"
              required
              type="email"
            />
            <button
              className="bg-accent text-black px-8 py-4 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-accent/85 transition-colors whitespace-nowrap shrink-0"
              type="submit"
            >
              Join Waitlist
            </button>
          </form>

          <p className="text-[11px] text-soft/40 mt-4">
            By joining, you agree to our{' '}
            <a href="/terms" className="underline underline-offset-2 hover:text-soft/70 transition-colors">
              Terms of Service
            </a>
            .
          </p>
        </div>

        <div
          className="absolute right-0 bottom-0 pointer-events-none select-none hidden xl:block"
          aria-hidden="true"
        >
          <span
            className="font-display font-semibold text-rim leading-none"
            style={{ fontSize: 'clamp(8rem, 14vw, 16rem)' }}
          >
            PX
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;

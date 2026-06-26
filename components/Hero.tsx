import React from 'react';
import phoneImage from '../images/photo_2025-12-31_13-03-49.jpg?url';

const marqueeItems = [
  'Proactive AI Calls',
  'Calendar Intelligence',
  'Brain Dump',
  'Email Triage',
  'Weekly Momentum',
  'Stack Integration',
  'Intent Translation',
  'Momentum Guardrails',
];

const Hero: React.FC = () => {
  return (
    <>
      <section className="pt-28 md:pt-36 pb-16 px-8 md:px-12 relative overflow-hidden">
        <div
          className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-24 items-end"
          style={{ minHeight: 'calc(100vh - 10rem)' }}
        >
          <div className="flex flex-col justify-end pb-12 lg:pb-24">
            <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-soft mb-10">
              AI Operating Layer &middot; Now Accepting Applications
            </p>

            <h1
              className="font-display font-semibold text-cream leading-[0.86] mb-10"
              style={{ fontSize: 'clamp(3.8rem, 8.5vw, 9rem)' }}
            >
              Think loud.
              <br />
              <span className="italic font-normal text-soft/80">Execute fast.</span>
            </h1>

            <p className="text-[15px] text-soft max-w-[400px] leading-[1.75] mb-12 font-normal">
              Praxa turns stream-of-consciousness into structured execution. The operating layer for founders and builders who move fast and hate dropping balls.
            </p>

            <form
              id="waitlist"
              className="flex items-stretch gap-0 max-w-[460px] ring-1 ring-rim focus-within:ring-accent/40 transition-all duration-300"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-1 bg-surface text-cream placeholder:text-soft/50 px-5 py-4 text-sm focus:outline-none min-w-0"
                placeholder="your@email.com"
                required
                type="email"
              />
              <button
                className="bg-accent text-black px-7 py-4 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-accent/85 transition-colors whitespace-nowrap shrink-0"
                type="submit"
              >
                Get Access
              </button>
            </form>

            <p className="text-[11px] text-soft/40 mt-4">
              iOS and Android &nbsp;&middot;&nbsp; Beta ships Q3 2026
            </p>
          </div>

          <div className="hidden lg:flex flex-col justify-end pb-12 lg:pb-16 items-center relative">
            <div className="relative w-[270px]">
              <div
                className="w-full rounded-[2.8rem] overflow-hidden border border-rim shadow-[0_60px_100px_rgba(0,0,0,0.7)]"
                style={{
                  aspectRatio: '9/19.5',
                  background: `url(${phoneImage}) 50% 15% / cover no-repeat`,
                }}
              />

              <div className="absolute -bottom-6 -left-12 bg-surface border border-rim px-4 py-3 flex items-center gap-3 shadow-2xl">
                <div className="size-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <div className="size-2.5 rounded-full bg-accent" />
                </div>
                <div>
                  <p className="text-cream text-[11px] font-semibold tracking-wide">AI Ops Agent</p>
                  <p className="text-soft text-[10px] mt-0.5">Incoming call &middot; 09:07 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-rim py-3.5 overflow-hidden bg-surface/40">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 mx-5">
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-soft">{item}</span>
              <span className="size-1 rounded-full bg-accent/60 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;

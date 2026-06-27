import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    screen: 'Onboarding — Voice Check-Ins',
    where: 'Shown during onboarding Step 6, before any phone number is submitted',
    what: 'User enters their phone number, selects call frequency and schedule.',
    consent: 'By tapping "Enable Check-Ins," you consent to receive scheduled automated phone calls and SMS reminders from Praxa. Msg & data rates may apply. Reply STOP to opt out at any time. Consent is not required to use Praxa.',
    image: '/opt-in-step-1.png',
    imageLabel: 'Voice Check-Ins screen — phone number input with consent text',
  },
  {
    number: '02',
    screen: 'Onboarding — Notifications',
    where: 'Shown during onboarding Step 7, immediately after the phone number step',
    what: 'User chooses delivery channels. SMS is an opt-in toggle (off by default).',
    consent: 'By selecting Text (SMS), you consent to receive automated text messages from Praxa including call alerts, daily briefs, and task reminders. Msg & data rates may apply. Reply STOP to opt out at any time. Consent is not a condition of purchase or use of the app.',
    image: '/opt-in-step-2.png',
    imageLabel: 'Notifications screen — SMS toggle with consent text',
  },
  {
    number: '03',
    screen: 'Profile — Check-In Calls',
    where: 'Accessible at any time via Profile tab → Check-In Calls',
    what: 'Returning users can update their phone number and call schedule.',
    consent: 'Same consent language is displayed below the phone number field before saving.',
    image: '/opt-in-step-3.png',
    imageLabel: 'Profile Check-In Calls screen — phone number with consent text',
  },
];

const OptInFlow: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-cream flex flex-col">
      <div className="fixed top-0 left-0 right-0 h-px bg-accent z-50 pointer-events-none" />

      <header className="px-5 sm:px-8 md:px-12 py-5 border-b border-rim bg-bg/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-[1.15rem] font-semibold tracking-[0.18em] uppercase text-cream hover:text-cream/80 transition-colors">
            Praxa
          </Link>
          <Link
            to="/"
            className="text-[11px] font-medium tracking-[0.14em] uppercase text-soft hover:text-cream transition-colors duration-200"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="flex-1 px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

          <div className="border-b border-rim pb-8 sm:pb-10 mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] sm:tracking-[0.28em] uppercase text-soft mb-4 sm:mb-5">
              A2P 10DLC — Opt-In Documentation
            </p>
            <h1
              className="font-display font-semibold text-cream leading-tight mb-4"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 3.2rem)' }}
            >
              SMS Opt-In Flow
            </h1>
            <p className="text-[13px] sm:text-[14px] text-soft leading-[1.75] max-w-2xl">
              Praxa collects SMS consent exclusively within the mobile app. This page documents
              every screen where a user can provide or withdraw consent, including the exact
              disclosure text displayed at each opt-in point. SMS opt-in is never collected
              on this website.
            </p>
          </div>

          <div className="mb-12 sm:mb-16 bg-surface border border-rim p-5 sm:p-6 md:p-8">
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-3">
              Summary
            </p>
            <ul className="space-y-2">
              {[
                'Opt-in is obtained inside the Praxa iOS/Android app — never on this website',
                'SMS toggle is unchecked (off) by default — active consent is required',
                'Consent language appears at the point of collection, before any data is submitted',
                'Users can opt out at any time by replying STOP or toggling off in Profile',
                'Consent is not a condition of purchase or access to any app feature',
                'Message & data rates may apply',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[12px] sm:text-[13px] text-soft leading-relaxed">
                  <span className="mt-1.5 size-1.5 rounded-full bg-accent/70 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {steps.map((step) => (
              <div key={step.number} className="border-t border-rim py-10 sm:py-14">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-soft mb-3">
                      Step {step.number}
                    </p>
                    <h2
                      className="font-display font-semibold text-cream leading-tight mb-2"
                      style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                    >
                      {step.screen}
                    </h2>
                    <p className="text-[11px] sm:text-[12px] font-medium text-accent/80 tracking-wide uppercase mb-5 sm:mb-6">
                      {step.where}
                    </p>
                    <p className="text-[13px] text-soft leading-[1.7] mb-5 sm:mb-6">
                      {step.what}
                    </p>

                    <div className="border border-accent/20 bg-accent/5 p-4 sm:p-5">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-3">
                        Exact Consent Text Shown In-App
                      </p>
                      <p className="text-[12px] sm:text-[13px] text-cream/80 leading-[1.75] italic">
                        "{step.consent}"
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-none border border-rim bg-surface flex flex-col items-center justify-center overflow-hidden"
                      style={{ aspectRatio: '9/19' }}
                    >
                      <img
                        src={step.image}
                        alt={step.imageLabel}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div style="padding:1.5rem;text-align:center;opacity:0.4">
                              <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:8px">Screenshot pending</p>
                              <p style="font-size:11px;opacity:0.6">${step.imageLabel}</p>
                              <p style="font-size:10px;opacity:0.4;margin-top:8px">Place file at /public${step.image}</p>
                            </div>`;
                          }
                        }}
                      />
                    </div>
                    <p className="text-[11px] text-soft/50 mt-2 text-center">{step.imageLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-rim pt-10 sm:pt-14">
            <h2 className="font-display font-semibold text-cream text-[1.3rem] sm:text-[1.4rem] mb-5 sm:mb-6">
              Opt-Out Methods
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  method: 'Reply STOP',
                  desc: 'Replying STOP to any Praxa SMS immediately removes the user from all SMS messaging.',
                },
                {
                  method: 'In-App Toggle',
                  desc: 'Profile → Check-In Calls → toggle Frequency to Off. Profile → Notifications → tap Text (SMS) to deselect.',
                },
              ].map((item) => (
                <div key={item.method} className="border border-rim p-5 sm:p-6">
                  <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-accent mb-2">{item.method}</p>
                  <p className="text-[13px] text-soft leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-rim pt-8 sm:pt-10 mt-8 sm:mt-10">
            <p className="text-[12px] sm:text-[13px] text-soft leading-relaxed">
              Questions about this opt-in flow?{' '}
              <a href="mailto:dev@floreolabs.org" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
                dev@floreolabs.org
              </a>
              {' '}&nbsp;&middot;&nbsp;{' '}
              <Link to="/privacy" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
                Privacy Policy
              </Link>
              {' '}&nbsp;&middot;&nbsp;{' '}
              <Link to="/terms" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-rim px-5 sm:px-8 md:px-12 py-6 sm:py-7">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-5">
          <span className="font-display text-[1rem] font-semibold tracking-[0.18em] uppercase text-cream">Praxa</span>
          <p className="text-[11px] text-soft/50">&copy; 2026 Praxa Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default OptInFlow;

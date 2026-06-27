import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: (
      <p>
        By accessing or using Praxa ("the Service"), you agree to be bound by these Terms of Service. If
        you do not agree, please do not use the Service.
      </p>
    ),
  },
  {
    title: '2. Description of Service',
    content: (
      <p>
        Praxa is an AI-powered personal assistant application that helps users manage tasks, goals,
        schedules, and communications. The Service includes mobile app features, AI-generated insights,
        scheduled check-in calls, and optional SMS notifications.
      </p>
    ),
  },
  {
    title: '3. SMS Messaging Terms',
    content: (
      <>
        <p className="font-medium text-cream/90 mb-1">Opt-In Process</p>
        <p>
          SMS consent is obtained exclusively within the Praxa mobile app — not through this website or
          the waitlist form. You provide your phone number and explicit consent during onboarding (the
          "Voice Check-ins" step) or at any time via Profile &gt; Check-In Calls. The opt-in screen
          displays a clear description of the message program before you confirm. You may skip this step
          entirely; providing a phone number is optional and is not required to use any feature of the
          Service.
        </p>

        <p className="font-medium text-cream/90 mt-5 mb-1">Messages You May Receive</p>
        <p>
          By enabling SMS in the app, you consent to receive text messages from Praxa, including:
        </p>
        <ul className="mt-3 space-y-1.5 pl-4">
          {[
            'Scheduled AI check-in call alerts and reminders',
            'Daily brief notifications (tasks, email, calendar summary)',
            'Task due-date reminders and overdue alerts',
            'Session brief summaries after completed AI calls',
            'Transactional service and account-related notifications',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1 rounded-full bg-accent/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">Message frequency varies. Free plan: up to 1 check-in call per month. Pro plan: up to multiple check-ins per week, plus task and brief notifications based on your settings.</p>

        <p className="mt-5">
          <strong className="text-cream font-semibold">Message and data rates may apply.</strong>
        </p>

        <p className="mt-4">
          <strong className="text-cream font-semibold">Consent is not a condition of purchase.</strong>{' '}
          You are not required to opt into SMS to purchase Praxa Pro or to access any feature of the Service.
        </p>

        <p className="mt-4">
          To opt out, reply <strong className="text-cream font-semibold">STOP</strong> to any message or
          disable SMS in Profile &gt; Check-In Calls. To get help, reply{' '}
          <strong className="text-cream font-semibold">HELP</strong> or contact us at{' '}
          <a href="mailto:dev@floreolabs.org" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
            dev@floreolabs.org
          </a>.
        </p>
      </>
    ),
  },
  {
    title: '4. User Responsibilities',
    content: (
      <>
        <p>You agree to:</p>
        <ul className="mt-3 space-y-1.5 pl-4">
          {[
            'Provide accurate information when creating your account',
            'Use the Service only for lawful purposes',
            'Not attempt to reverse-engineer, hack, or misuse the Service',
            'Maintain the confidentiality of your account credentials',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1 rounded-full bg-accent/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: '5. Intellectual Property',
    content: (
      <p>
        All content, features, and functionality of Praxa are owned by Praxa Inc. and are protected by
        applicable intellectual property laws. You may not copy, modify, or distribute any part of the
        Service without our express written permission.
      </p>
    ),
  },
  {
    title: '6. Disclaimer of Warranties',
    content: (
      <p>
        The Service is provided "as is" without warranties of any kind. Praxa does not guarantee that the
        Service will be uninterrupted, error-free, or that AI-generated content will be accurate or
        complete.
      </p>
    ),
  },
  {
    title: '7. Limitation of Liability',
    content: (
      <p>
        To the fullest extent permitted by law, Praxa Inc. shall not be liable for any indirect,
        incidental, special, or consequential damages arising from your use of the Service.
      </p>
    ),
  },
  {
    title: '8. Changes to Terms',
    content: (
      <p>
        We may update these Terms from time to time. We will notify you of material changes via the app or
        email. Continued use of the Service after changes constitutes acceptance.
      </p>
    ),
  },
  {
    title: '9. Contact',
    content: (
      <p>
        For questions about these Terms, contact us at{' '}
        <a href="mailto:dev@floreolabs.org" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
          dev@floreolabs.org
        </a>.
      </p>
    ),
  },
];

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-cream flex flex-col">
      <div className="fixed top-0 left-0 right-0 h-px bg-accent z-50 pointer-events-none" />

      <header className="px-5 sm:px-8 md:px-12 py-5 border-b border-rim bg-bg/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-rim pb-8 sm:pb-10 mb-10 sm:mb-14">
            <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-soft mb-5">Legal</p>
            <h1
              className="font-display font-semibold text-cream leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Terms of Service
            </h1>
            <p className="text-sm text-soft mt-3">Last updated: June 2026</p>
          </div>

          <div className="space-y-0">
            {sections.map((section) => (
              <div key={section.title} className="py-8 sm:py-10 border-b border-rim">
                <h2 className="font-display font-semibold text-cream text-[1.2rem] sm:text-[1.35rem] mb-4 sm:mb-5 leading-tight">
                  {section.title}
                </h2>
                <div className="text-[13px] sm:text-[14px] text-soft leading-[1.8]">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-rim px-5 sm:px-8 md:px-12 py-6 sm:py-7">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <span className="font-display text-[1rem] font-semibold tracking-[0.18em] uppercase text-cream">Praxa</span>
          <div className="flex items-center gap-5 sm:gap-8 text-[11px] text-soft font-medium tracking-[0.12em] uppercase">
            <Link className="hover:text-cream transition-colors duration-200" to="/">Home</Link>
            <Link className="hover:text-cream transition-colors duration-200" to="/privacy">Privacy</Link>
            <a className="hover:text-cream transition-colors duration-200" href="mailto:dev@floreolabs.org">Support</a>
          </div>
          <p className="text-[11px] text-soft/50 tracking-wide w-full sm:w-auto text-right sm:text-left">&copy; 2026 Praxa Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;

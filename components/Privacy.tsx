import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Information We Collect',
    content: (
      <p>
        Praxa collects information you provide directly, including your name, email address, phone number,
        and any tasks, goals, or preferences you enter into the app. We also collect usage data to improve
        our services.
      </p>
    ),
  },
  {
    title: '2. SMS Communications',
    content: (
      <>
        <p className="font-medium text-cream/90 mb-1">How You Opt In</p>
        <p>
          SMS consent is collected inside the Praxa mobile app — never on this website. You provide your
          phone number and explicit consent during onboarding (the "Voice Check-ins" step) or at any time
          via Profile &gt; Check-In Calls. At the point of opt-in, the app displays disclosure language
          confirming the nature and frequency of messages before you submit your number. Providing a phone
          number is entirely optional and is not required to create an account or use any core feature of
          Praxa.
        </p>

        <p className="font-medium text-cream/90 mt-5 mb-1">Types of Messages</p>
        <p>Once opted in, Praxa may send you the following categories of SMS messages:</p>
        <ul className="mt-3 space-y-1.5 pl-4">
          {[
            'Scheduled AI check-in call alerts and reminders',
            'Daily brief notifications summarizing your tasks, email, and calendar',
            'Task due-date reminders and overdue alerts',
            'Session brief summaries delivered after completed AI calls',
            'Transactional service and account-related notifications',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1 rounded-full bg-accent/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="font-medium text-cream/90 mt-5 mb-1">Message Frequency</p>
        <p>
          Message frequency varies based on your plan and settings. Check-in call frequency ranges from
          once per month (Free plan) to multiple times per week (Pro plan). Task reminders and daily brief
          notifications depend on your individual settings and sprint activity.
        </p>

        <p className="mt-5">
          <strong className="text-cream font-semibold">Consent is not a condition of purchase.</strong>{' '}
          You are not required to opt into SMS communications as a condition of purchasing Praxa Pro or
          accessing any feature of the Service.
        </p>

        <p className="mt-5">
          <strong className="text-cream font-semibold">Message and data rates may apply.</strong> You can
          opt out at any time by replying{' '}
          <strong className="text-cream font-semibold">STOP</strong> to any message, or by disabling SMS
          notifications in your Praxa profile settings. Reply{' '}
          <strong className="text-cream font-semibold">HELP</strong> for assistance or contact us at{' '}
          <a href="mailto:dev@floreolabs.org" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
            dev@floreolabs.org
          </a>.
        </p>

        <p className="mt-5">
          <strong className="text-cream font-semibold">
            No mobile information will be shared with third parties or affiliates for marketing or
            promotional purposes. All other categories exclude text messaging originator opt-in data and
            consent; this information will not be shared with any third parties.
          </strong>
        </p>
      </>
    ),
  },
  {
    title: '3. How We Use Your Information',
    content: (
      <>
        <p>We use your information to:</p>
        <ul className="mt-3 space-y-1.5 pl-4">
          {[
            'Provide and improve the Praxa AI assistant service',
            'Send SMS notifications and AI responses you have opted into',
            'Personalize your experience based on your tasks and goals',
            'Communicate with you about your account and service updates',
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
    title: '4. Information Sharing',
    content: (
      <>
        <p>
          We do not sell your personal information. We share data only with service providers that help us
          operate Praxa (such as cloud infrastructure and AI model providers), under strict confidentiality
          agreements. We may disclose information if required by law.
        </p>
        <p className="mt-4">
          Mobile opt-in data, SMS consent, and phone numbers collected through Praxa are never sold, rented,
          shared, or transferred to third parties, affiliates, or lead generators for marketing or promotional
          purposes.
        </p>
      </>
    ),
  },
  {
    title: '5. Data Security',
    content: (
      <p>
        We use industry-standard security measures to protect your data, including encryption in transit and
        at rest. No method of transmission over the internet is 100% secure, and we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    title: '6. Your Rights',
    content: (
      <p>
        You may request access to, correction of, or deletion of your personal data at any time by
        contacting us. You may also opt out of SMS communications at any time.
      </p>
    ),
  },
  {
    title: '7. Contact Us',
    content: (
      <p>
        If you have questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:dev@floreolabs.org" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
          dev@floreolabs.org
        </a>.
      </p>
    ),
  },
];

const Privacy: React.FC = () => {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-soft mt-3">Last updated: June 2026</p>
          </div>

          <div className="space-y-0">
            {sections.map((section) => (
              <div key={section.title} className="py-8 sm:py-10 border-b border-rim">
                <h2 className="font-display font-semibold text-cream text-[1.2rem] sm:text-[1.35rem] mb-4 sm:mb-5 leading-tight">
                  {section.title}
                </h2>
                <div className="text-[13px] sm:text-[14px] text-soft leading-[1.8] space-y-0">
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
            <Link className="hover:text-cream transition-colors duration-200" to="/terms">Terms</Link>
            <a className="hover:text-cream transition-colors duration-200" href="mailto:dev@floreolabs.org">Support</a>
          </div>
          <p className="text-[11px] text-soft/50 tracking-wide w-full sm:w-auto text-right sm:text-left">&copy; 2026 Praxa Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;

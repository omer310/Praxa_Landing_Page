import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse-glow"></div>
      </div>

      <header className="relative z-10 px-6 py-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="size-6 text-gray-400">
              <span className="material-symbols-outlined">track_changes</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Praxa</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-12">Last updated: June 2026</p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>
                Praxa collects information you provide directly, including your name, email address, phone number,
                and any tasks, goals, or preferences you enter into the app. We also collect usage data to improve
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. SMS Communications</h2>
              <p>
                If you opt in to SMS notifications within the Praxa mobile app, we will send you text messages
                including daily briefings, task reminders, scheduled call notifications, and conversational AI
                responses. Message frequency varies based on your settings and usage.
              </p>
              <p className="mt-3">
                <strong className="text-white">Message and data rates may apply.</strong> You can opt out at any
                time by replying <strong className="text-white">STOP</strong> to any message, or by disabling SMS
                notifications in your Praxa profile settings. Reply <strong className="text-white">HELP</strong> for
                assistance.
              </p>
              <p className="mt-3">
                <strong className="text-white">
                  No mobile information will be shared with third parties or affiliates for marketing or promotional
                  purposes. All other categories exclude text messaging originator opt-in data and consent; this
                  information will not be shared with any third parties.
                </strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide and improve the Praxa AI assistant service</li>
                <li>Send SMS notifications and AI responses you have opted into</li>
                <li>Personalize your experience based on your tasks and goals</li>
                <li>Communicate with you about your account and service updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We share data only with service providers that help us
                operate Praxa (such as cloud infrastructure and AI model providers), under strict confidentiality
                agreements. We may disclose information if required by law.
              </p>
              <p className="mt-3">
                Mobile opt-in data, SMS consent, and phone numbers collected through Praxa are never sold, rented,
                shared, or transferred to third parties, affiliates, or lead generators for marketing or promotional
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
              <p>
                We use industry-standard security measures to protect your data, including encryption in transit and
                at rest. No method of transmission over the internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data at any time by
                contacting us. You may also opt out of SMS communications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:dev@floreolabs.org" className="text-white underline hover:opacity-80">
                  dev@floreolabs.org
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto flex gap-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;

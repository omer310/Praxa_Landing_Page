import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 text-sm mb-12">Last updated: June 2026</p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Praxa ("the Service"), you agree to be bound by these Terms of Service. If
                you do not agree, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
              <p>
                Praxa is an AI-powered personal assistant application that helps users manage tasks, goals,
                schedules, and communications. The Service includes mobile app features, AI-generated insights,
                scheduled check-in calls, and optional SMS notifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. SMS Messaging Terms</h2>
              <p>
                By enabling SMS notifications in the Praxa mobile app, you consent to receive text messages from
                Praxa, including daily briefings, reminders, and AI responses. Message frequency varies.{' '}
                <strong className="text-white">Message and data rates may apply.</strong>
              </p>
              <p className="mt-3">
                To opt out, reply <strong className="text-white">STOP</strong> to any message or disable SMS
                notifications in your profile settings. To get help, reply{' '}
                <strong className="text-white">HELP</strong>. For support, contact{' '}
                <a href="mailto:dev@floreolabs.org" className="text-white underline hover:opacity-80">
                  dev@floreolabs.org
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide accurate information when creating your account</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to reverse-engineer, hack, or misuse the Service</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of Praxa are owned by Praxa Inc. and are protected by
                applicable intellectual property laws. You may not copy, modify, or distribute any part of the
                Service without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimer of Warranties</h2>
              <p>
                The Service is provided "as is" without warranties of any kind. Praxa does not guarantee that the
                Service will be uninterrupted, error-free, or that AI-generated content will be accurate or
                complete.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Praxa Inc. shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes via the app or
                email. Continued use of the Service after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
              <p>
                For questions about these Terms, contact us at{' '}
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
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Terms;

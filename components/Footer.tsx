import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-rim px-8 md:px-12 py-7 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <span className="font-display text-[1rem] font-semibold tracking-[0.18em] uppercase text-cream">
          Praxa
        </span>

        <div className="flex items-center gap-8 text-[11px] text-soft font-medium tracking-[0.12em] uppercase">
          <Link className="hover:text-cream transition-colors duration-200" to="/privacy">Privacy</Link>
          <Link className="hover:text-cream transition-colors duration-200" to="/terms">Terms</Link>
          <a className="hover:text-cream transition-colors duration-200" href="mailto:dev@floreolabs.org">Support</a>
        </div>

        <p className="text-[11px] text-soft/50 tracking-wide">
          &copy; 2026 Praxa Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

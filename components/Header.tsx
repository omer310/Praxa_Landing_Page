import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-px left-0 right-0 z-40 flex items-center justify-between px-5 sm:px-8 md:px-12 py-5 bg-bg/95 backdrop-blur-sm border-b border-rim">
      <a href="/" className="font-display text-[1.15rem] font-semibold tracking-[0.18em] text-cream uppercase">
        Praxa
      </a>

      <nav className="hidden md:flex items-center gap-10">
        <a
          className="text-[11px] font-medium text-soft hover:text-cream transition-colors duration-200 tracking-[0.14em] uppercase"
          href="#how-it-works"
        >
          How It Works
        </a>
        <a
          className="text-[11px] font-medium text-soft hover:text-cream transition-colors duration-200 tracking-[0.14em] uppercase"
          href="#features"
        >
          Features
        </a>
      </nav>

      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="#waitlist"
          className="bg-accent text-black text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 hover:bg-accent/85 active:scale-95 transition-all duration-150"
        >
          Join Waitlist
        </a>
        <button
          className="md:hidden text-soft hover:text-cream transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="3" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth="1.5"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-rim px-5 sm:px-8 py-6 flex flex-col gap-5">
          <a className="text-[12px] font-medium text-soft hover:text-cream tracking-[0.14em] uppercase transition-colors" href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a className="text-[12px] font-medium text-soft hover:text-cream tracking-[0.14em] uppercase transition-colors" href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        </div>
      )}
    </header>
  );
};

export default Header;

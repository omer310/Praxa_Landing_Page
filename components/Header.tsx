import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-black/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-[0_0_15px_rgba(10,132,255,0.3)] group-hover:shadow-[0_0_25px_rgba(10,132,255,0.5)] transition-shadow duration-500">
            <span className="material-symbols-outlined text-[20px]">track_changes</span>
          </div>
          <h2 className="text-lg font-semibold tracking-tight text-white/90">Praxa</h2>
        </div>
        <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 backdrop-blur-lg border border-white/5">
          <a className="px-5 py-1.5 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300" href="#philosophy">Philosophy</a>
          <a className="px-5 py-1.5 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300" href="#features">Features</a>
          <a className="px-5 py-1.5 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300" href="#features">Integrations</a>
        </nav>
        <button className="bg-white text-black hover:bg-gray-200 transition-colors px-5 py-2 rounded-full text-sm font-medium tracking-tight">
          Join Waitlist
        </button>
      </div>
    </header>
  );
};

export default Header;
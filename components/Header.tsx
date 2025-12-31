import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <header className="w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-2xl shadow-black/50 transition-all duration-300 hover:bg-black/70">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/10 group-hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined text-[18px]">track_changes</span>
          </div>
          <h2 className="text-sm font-semibold tracking-tight text-white">Praxa</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-300" href="#philosophy">Philosophy</a>
          <a className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-300" href="#features">Features</a>
          <a className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-300" href="#features">Integrations</a>
        </nav>
        
        <button className="bg-white text-black hover:bg-gray-100 transition-colors px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-md transform hover:scale-[1.02] active:scale-95 duration-200">
          Join Waitlist
        </button>
      </header>
    </div>
  );
};

export default Header;
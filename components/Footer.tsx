import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-6 text-gray-500">
            <span className="material-symbols-outlined">track_changes</span>
          </div>
          <span className="text-gray-400 font-semibold text-lg tracking-tight">Praxa</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500 font-medium">
          <a className="hover:text-white transition-colors" href="#">Privacy</a>
          <a className="hover:text-white transition-colors" href="#">Terms</a>
          <a className="hover:text-white transition-colors" href="#">Twitter</a>
          <a className="hover:text-white transition-colors" href="#">Support</a>
        </div>
        <p className="text-xs text-gray-600 font-medium">© 2025 Praxa Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
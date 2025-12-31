import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen opacity-20"></div>
      </div>
      
      <Header />
      
      <main className="flex-1 relative z-10 pt-24">
        <Hero />
        <Stats />
        <Philosophy />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
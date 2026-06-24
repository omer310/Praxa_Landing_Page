import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

const Home: React.FC = () => (
  <div className="relative flex h-auto min-h-screen w-full flex-col">
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-[-5%] left-[-5%] w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] opacity-60"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] opacity-50"></div>
    </div>
    <div className="grain" aria-hidden="true" />

    <Header />

    <main className="flex-1 relative z-10 pt-24">
      <Hero />
      <Philosophy />
      <Features />
      <CTA />
    </main>

    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

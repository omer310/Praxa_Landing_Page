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
  <div className="relative min-h-screen bg-bg">
    <div className="fixed top-0 left-0 right-0 h-px bg-accent z-50 pointer-events-none" />
    <Header />
    <main>
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

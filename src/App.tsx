import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import DemoSlider from './components/DemoSlider';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';
import ContactUs from './components/ContactUs';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <DemoSlider />
      <Overview />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
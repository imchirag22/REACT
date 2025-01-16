import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Services from './components/Services';
import backgroundImage from './assets/herobg.avif';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="relative">
        <div 
          className="fixed inset-0 bg-cover bg-center -z-20 h-screen" 
          style={{ 
            backgroundImage: `url(${backgroundImage})` 
          }}
        />
        <div className="fixed inset-0 bg-black opacity-80 -z-10 h-screen" />
        
        <div className="relative z-10">
          <Navbar />
          
          <HeroSection />
        </div>
      </div>
      <Services />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
    
  );
}

export default App;

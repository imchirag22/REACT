import React, { useState, useEffect } from 'react';

function Navbar() {
  const [showScroll, setShowScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      <nav className="fixed w-full z-50 p-5">
        <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
          <h1 onClick={scrollToTop} className="text-3xl font-bold px-3 cursor-pointer">
            <span className="text-white">POWER</span>
            <span className="text-green-500">GYM</span>
          </h1>

          <div className="hidden md:flex bg-black/30 backdrop-blur-sm px-20 py-3 rounded-full space-x-7">
            <button onClick={() => scrollToSection('services')} 
              className="text-white hover:text-green-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} 
              className="text-white hover:text-green-500 transition-colors">
              Membership
            </button>
            <button onClick={() => scrollToSection('testimonials')} 
              className="text-white hover:text-green-500 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-green-500 transition-colors">
              Contact Us
            </button>
          </div>

          <button onClick={() => scrollToSection('contact')} 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors mx-4">
            Join Now
          </button>
        </div>
      </nav>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all z-50"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Navbar;

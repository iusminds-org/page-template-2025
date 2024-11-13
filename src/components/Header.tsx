import React, { useEffect, useState } from 'react';

import config from '../config/index.json';

const Header: React.FC = () => {
  const { header } = config;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section functions
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 
        text-basic-white flex justify-between items-center 
        py-2 xs:py-3 sm:py-4 lg:py-5 
        px-3 xs:px-4 sm:px-8 lg:px-12 
        z-50
        transition-all duration-300
        ${isScrolled ? 'bg-[#1B0F2E] shadow-lg' : 'bg-transparent'}
      `}>
        <div className="flex items-center">
          <img 
            src={header.logo} 
            alt="Legal Block" 
            className="h-6 xs:h-7 sm:h-8" 
          />
        </div>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        <nav className="hidden lg:flex space-x-6 font-poppins">
          <button 
            onClick={scrollToTop} 
            className="hover:text-green-500 text-basic-white transition-colors text-base"
          >
            {header.home}
          </button>
          <button 
            onClick={scrollToAbout} 
            className="hover:text-green-500 text-basic-white transition-colors text-base"
          >
            {header.about}
          </button>
          <button 
            onClick={scrollToFeatures} 
            className="hover:text-green-500 text-basic-white transition-colors text-base"
          >
            {header.solutions}
          </button>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="
            bg-basic-white text-black font-poppins 
            text-base px-6 py-2 
            rounded 
            hover:bg-gray-100 transition-colors
          ">
            {header.login}
          </button>
          <button className="
            bg-green-500 text-basic-white font-poppins 
            text-base px-6 py-2 
            rounded 
            hover:bg-green-700 transition-colors
          ">
            {header.demoButton}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="
          lg:hidden 
          fixed top-[48px] xs:top-[52px] sm:top-[60px] 
          left-0 right-0 
          bg-[#1B0F2E] 
          shadow-lg
          py-4
          z-40
        ">
          <nav className="flex flex-col px-4">
            <div className="flex flex-col space-y-4 mb-4">
              <button 
                onClick={() => {
                  scrollToTop();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm xs:text-base hover:text-green-500 text-basic-white transition-colors"
              >
                {header.home}
              </button>
              <button 
                onClick={() => {
                  scrollToAbout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm xs:text-base hover:text-green-500 text-basic-white transition-colors"
              >
                {header.about}
              </button>
              <button 
                onClick={() => {
                  scrollToFeatures();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm xs:text-base hover:text-green-500 text-basic-white transition-colors"
              >
                {header.solutions}
              </button>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t border-white/10">
              <button className="
                flex-1
                bg-basic-white text-black font-poppins 
                text-sm xs:text-base
                px-3 py-1.5 xs:px-4 xs:py-2
                rounded 
                hover:bg-gray-100 transition-colors
                text-center
              ">
                {header.login}
              </button>
              <button className="
                flex-1
                bg-green-500 text-basic-white font-poppins 
                text-sm xs:text-base
                px-3 py-1.5 xs:px-4 xs:py-2
                rounded 
                hover:bg-green-700 transition-colors
                text-center
              ">
                {header.demoButton}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

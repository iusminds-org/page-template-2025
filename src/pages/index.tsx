import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import TitleSection from '../components/TitleSection';
import config from '../config/index.json';

const LandingPage: React.FC = () => {
  const { landingPage } = config;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-purple-900">
      <Header />
      {/* Radial Gradient Overlay (Ellipse Effect) */}
      <div
        className="absolute -z-50"
        style={{
          width: '90vw',
          height: '90vw',
          left: 'calc(50% - 80vw - 10vw)',
          top: '-55vh',
          background:
            'radial-gradient(50% 50% at 50% 50%, #1B0F2E 0%, rgba(27, 15, 46, 0) 66%)',
        }}
      ></div>

      {/* Radial Gradient Overlay (Ellipse 2) */}
      <div
        className="absolute -z-50"
        style={{
          width: '75vw', // Adjusted to be smaller than Ellipse 1
          height: '75vw',
          left: 'calc(50% + 10vw)', // Position to the right
          top: '-45vh', // Adjust top position
          background:
            'radial-gradient(50% 50% at 50% 50%, #1B0F2E 0%, rgba(27, 15, 46, 0) 66%)',
        }}
      ></div>

      <img
        src={landingPage.backgroundImage}
        alt="Background"
        className="absolute top-0 left-0 -z-50 transform rotate-[0.63deg] 
          w-[2052.91px] h-[1220.12px] md:w-[2252.91px] md:h-[1520.12px]"
      />
      {/* Linear Gradient Overlay */}
      <div
        className="absolute w-full h-full lg:h-[70vh] left-0 right-0 -z-40 mt-96"
        style={{
          top: 'calc(100vh - 40vh)', // This positions the gradient above the footer
          background:
            'linear-gradient(180deg, rgba(27, 15, 46, 0) 0%, #1B0F2E 44%)',
        }}
      ></div>

      <main className="relative flex flex-col text-center py-8 px-36">
        <TitleSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

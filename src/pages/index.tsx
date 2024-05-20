import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import BlockSection from '../components/BlockSection';
import GifComponent from '../components/GifComponent';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="w-full">
          <div className={`relative z-10 bg-background  lg:w-full`}>
            <Header />
            <GifComponent />
          </div>
        </div>
      </div>
      <InfoSection />
      <BlockSection />
      <About />
      <Analytics />
    </div>
  );
};

export default App;

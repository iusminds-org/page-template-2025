import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HireMe from '../components/HireMe';
import LazyShow from '../components/LazyShow';
import OpeningStatement from '../components/OpeningStatement';
import OpeningStatementImage from '../components/OpeningStatementImage';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-10 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <OpeningStatement />
          </div>
        </div>
        <OpeningStatementImage />
      </div>

      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <HireMe />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;

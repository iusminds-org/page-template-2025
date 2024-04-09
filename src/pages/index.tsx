// index.tsx

import React from 'react';

import { useRouter } from 'next/router';

import CV from './cv';
import About from '../components/About';
import Analytics from '../components/Analytics';
import Footer from '../components/Footer';
import HireMe from '../components/HireMe';
import LazyShow from '../components/LazyShow';
import Menu from '../components/Menu';
import OpeningStatement from '../components/OpeningStatement';
import OpeningStatementImage from '../components/OpeningStatementImage';

interface AppProps {
  apiKey: string;
}
const App: React.FC<AppProps> = ({ apiKey }) => {
  const router = useRouter();
  const { pathname } = router;

  // Check if the current route is '/cv'
  if (pathname === '/cv') {
    console.log(apiKey);
    // Pass the apiKey as a prop to the CV component
    return <CV apiKey={apiKey} />;
  }

  return (
    <div className={`bg-background grid gap-y-10 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Menu />
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

import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h3
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {mainHero.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h3>
        <h3
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {mainHero.subtitle.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h3>
        <Divider />
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
      </div>
    </main>
  );
};

export default MainHero;

import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const OpeningStatement = () => {
  const { openingStatement } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h3
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {openingStatement.title.split(' ').map((word, index) => (
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
          {openingStatement.subtitle.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h3>
        <Divider />
        <div className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          <p className=" text-gray-500">{openingStatement.description}</p>
          <p className=" text-sm mt-7 text-lime-700">
            PS: Just a heads up – this site is still a work in progress! So, you
            might find some links that aren&apos;t quite ready yet. If you have
            any thoughts on how I can make things better – whether it&apos;s the
            layout, the wording, or anything else – please let me know by
            clicking the &quot;Contact me&quot; button below! Your input means a
            lot to me. Thanks 🙏
          </p>
        </div>
      </div>
    </main>
  );
};

export default OpeningStatement;

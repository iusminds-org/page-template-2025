import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const OpeningStatement = () => {
  const { openingStatement } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h3
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-lime-600`}
        >
          {openingStatement.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-lime-600' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h3>
        <h3
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-lime-600`}
        >
          {openingStatement.subtitle.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-lime-600' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h3>
        <Divider />
        <div className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          <p className=" text-yellow-600">
            Hi folks 👋 Welcome to my little corner of the web! I&apos;m Hannah,
            a trilingual British-Indonesian software engineer based in the
            beautiful county of West Yorkshire. I&apos;m a
            <em className=" text-green-700"> Dendrophile</em>{' '}
            <em className=" text-sm text-green-700">
              (n) A person who loves nature
            </em>
            . I also have various hobbies including cooking and baking, playing
            board games, solo walking and hiking and personal software
            developement projects mainly in Go, C# .NET, and React. My diverse
            background and skill set empowers me to tackle challenges with
            agility and precision. Explore my portfolio and let&apos;s bring
            your ideas to life together🪴
          </p>
          <p className=" text-sm mt-7 text-green-600">
            <em>
              PS: Just a heads up – this site is still a work in progress! So,
              you might find some links that aren&apos;t quite ready yet. If you
              have any thoughts on how I can make things better – whether
              it&apos;s the layout, the wording, or anything else – please let
              me know by clicking the &quot;Contact me&quot; button below! Your
              input means a lot to me. Thanks
            </em>{' '}
            🙏
          </p>
        </div>
      </div>
    </main>
  );
};

export default OpeningStatement;

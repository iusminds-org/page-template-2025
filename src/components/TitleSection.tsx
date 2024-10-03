import React from 'react';

import config from '../config/index.json';

const TitleSection: React.FC = () => {
  const { titleSection } = config;

  return (
    <section className="text-basic-white py-12 md:py-16 flex flex-col items-start w-full max-w-[527px] px-4 md:px-0">
      <h1
        className="font-ag-display text-5xl md:text-6xl leading-tight md:leading-none mb-4 text-left"
        style={{ lineHeight: '1.2', letterSpacing: '0.05em' }} // 1.2 for better scaling on smaller screens
      >
        {titleSection.title}
      </h1>

      <p
        className="font-dm-sans text-base md:text-lg font-extralight mb-6 text-left"
        style={{ lineHeight: '160%' }}
      >
        {titleSection.description}
      </p>

      <div className="w-full flex justify-start">
        <button className="bg-green-500 text-basic-white font-poppins text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded hover:bg-green-700 transition-colors">
          {titleSection.callToAction.text}
        </button>
      </div>
    </section>
  );
};

export default TitleSection;

import React from 'react';

import config from '../config/index.json';

const GifComponent = () => {
  const { gif } = config;
  const { gifPath } = gif;

  return (
    <div className="gif-container mt-10">
      <img className="gif-image" src={gifPath} alt="Animated Background" />
      <div className="absolute bottom-10 left-10">
        <h2 className="montserrat font-medium text-2xl lg:text-4xl tracking-wide">
          ANALYZING BLOCKCHAINS
        </h2>
        <h2 className="montserrat font-medium text-2xl lg:text-4xl tracking-wide">
          FOR LEGAL NEEDS &
        </h2>
        <h2 className="montserrat font-medium text-2xl lg:text-4xl tracking-wide">
          COMPLIANCE
        </h2>
      </div>
    </div>
  );
};

export default GifComponent;

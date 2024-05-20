import React from 'react';

import config from '../config/index.json';

const InfoSection = () => {
  const { infoSection } = config;
  const { icon, title, subtitle, items, gradientStar, star } = infoSection;

  return (
    <div className="relative flex justify-start items-center text-white py-16">
      <div className="absolute inset-0 flex justify-start items-center">
        <img
          src={icon}
          alt="Company Icon Background"
          className="absolute opacity-10 w-5/6 h-5/6 scale-150 -left-40 -mt-8"
        />
      </div>
      <div className="relative z-10 text-left ml-10">
        <img
          src={icon}
          alt="Company Icon"
          className="mb-16 w-1/6 h-1/6 scale-150 ml-8"
        />
        <h2 className="sharp-grotesk-title mb-2 text-4xl lg:text-6xl">
          {title}
        </h2>
        <h3 className="sharp-grotesk-title mb-8 text-2xl lg:text-4xl">
          {subtitle}
        </h3>
        <ul className="list-none space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="montserrat-text flex items-start text-sm lg:text-lg"
            >
              <img
                src={index % 2 === 0 ? gradientStar : star}
                alt={index % 2 === 0 ? 'Star' : 'Gradient Star'}
                className="mr-4 lg:mr-8 w-4 h-4 lg:w-6 lg:h-6"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;

import React from 'react';

import config from '../config/index.json';

const InfoSection: React.FC = () => {
  const { infoSection } = config;

  return (
    <section className="text-basic-white py-16 flex items-start space-x-6 mt-80">
      <div className="w-[630px]">
        <h2
          className="font-dm-sans font-extrabold text-[32px] leading-[42px] mb-4 text-left"
          style={{ letterSpacing: '0.05em' }}
        >
          {infoSection.title}
        </h2>

        <p
          className="font-dm-sans text-[18px] font-light text-left"
          style={{ lineHeight: '160%' }}
        >
          {infoSection.subtitle1}
        </p>
        <p
          className="font-dm-sans text-[18px] font-light py-3 text-left"
          style={{ lineHeight: '160%' }}
        >
          {infoSection.subtitle2}
        </p>
      </div>
      <img
        src={infoSection.icon}
        alt="Info Icon"
        className="px-16 h-50 w-50 items-center justify-center ml-10"
      />
    </section>
  );
};

export default InfoSection;

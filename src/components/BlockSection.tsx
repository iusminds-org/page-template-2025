import React from 'react';

import config from '../config/index.json';

const BlockSection = () => {
  const { blockSection } = config;
  const { blockImage } = blockSection;

  return (
    <div className="flex justify-center pt-10">
      <img src={blockImage} alt="Block Section" className="w-full" />
    </div>
  );
};

export default BlockSection;

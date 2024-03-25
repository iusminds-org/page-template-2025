import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const [firstItem, secondItem] = about.items;

  return (
    <section className={`bg-background py-8`} id="about">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={about.primaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                  >
                    {about.primaryAction.text}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  {/* Button for secondary action */}
                  <a
                    href={about.secondaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                  >
                    {about.secondaryAction.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

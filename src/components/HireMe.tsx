import React from 'react';

import config from '../config/index.json';

const HireMe = () => {
  const { hireMe } = config;
  const { title, description, items: techStackList } = hireMe;
  return (
    <div className={`py-12 bg-background`} id="hire_me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-lime-600 font-semibold tracking-wide uppercase mt-2 text-2xl leading-8`}
          >
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-yellow-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {techStackList.map((techStack) => (
              <div key={techStack.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-lime-600 border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={techStack.icon}
                      alt={techStack.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-yellow-800">
                    {techStack.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-yellow-600">
                  {techStack.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <div className="rounded-md shadow">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-lime-600 hover:bg-border hover:text-lime-600 md:py-4 md:text-lg md:px-10`}
            >
              View my CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;

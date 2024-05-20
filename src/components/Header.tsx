import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import config from '../config/index.json';

const Menu = () => {
  const { company } = config;
  const { name: companyName, logo, companyNameLogo } = company;

  return (
    <>
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex flex-row justify-between sm:h-10 lg:justify-between"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex flex-row items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <img
                    alt="legalblock"
                    className="h-16 w-auto sm:h-16"
                    src={logo}
                  />
                </a>
                <a href="#">
                  <img
                    alt="Company Logo"
                    className="h-10 w-auto sm:h-6 ml-4"
                    src={companyNameLogo}
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8 items-center relative">
              <div className="trapezoid-background">
                <img
                  alt="Beta Icon"
                  className="h-8 w-auto"
                  src="/assets/images/beta.svg"
                />
                <span className="montserrat-18 ml-2">Will Be Out Soon!</span>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Beta Icon"
                    className="h-8 w-auto"
                    src="/assets/images/beta.svg"
                  />
                  <span className="montserrat-18">Will Be Out Soon!</span>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;

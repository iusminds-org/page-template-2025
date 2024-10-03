import React from 'react';

import config from '../config/index.json';

const Header: React.FC = () => {
  const { header } = config;

  return (
    <header className="text-basic-white flex justify-between items-center py-5 px-12 z-10">
      <div className="flex items-center space-x-4">
        <img src={header.logo} alt="Legal Block" className="h-8 z-10" />
      </div>

      <nav className="flex space-x-6 font-poppins">
        <a href="#" className="hover:text-green-500 text-basic-white">
          {header.home}
        </a>
        <a href="#" className="hover:text-green-500 text-basic-white">
          {header.about}
        </a>
        <a href="#" className="hover:text-green-500 text-basic-white">
          {header.solutions}
        </a>
        <a href="#" className="hover:text-green-500 text-basic-white">
          {header.contact}
        </a>
      </nav>

      <div>
        <button className="bg-green-500 text-basic-white font-poppins text-base px-4 py-2 rounded hover:bg-green-700 transition-colors">
          {header.demoButton}
        </button>
      </div>
    </header>
  );
};

export default Header;

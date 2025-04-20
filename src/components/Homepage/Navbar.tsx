import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 max-w-screen-2xl px-3 md:px-12 lg:px-28 2xl:px-2 mx-auto transition-colors">
      <nav className="flex items-center justify-between">
        <a className="flex items-center" href="/">
          <img src="/logo.png" alt="Crypto Strategy" width="141" height="32" className="h-8 w-auto logo" />
        </a>
        <button className="w-8 h-8 flex items-center justify-center" aria-label="Toggle menu">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33334 8H26.6667M5.33334 16H26.6667M5.33334 24H26.6667" stroke="black" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar; 
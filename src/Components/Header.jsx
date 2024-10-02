import React from 'react';
import { FaStar } from 'react-icons/fa'; // Make sure to install react-icons
import { HiMenu } from 'react-icons/hi';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo-title">
          <FaStar className="logo-icon" />
          <h1>Review Central</h1>
        </div>
        <button className="nav-toggle">
          <HiMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;

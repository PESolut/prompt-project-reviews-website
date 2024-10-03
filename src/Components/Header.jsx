import React, { useState } from 'react';
import { FaStar, FaHome, FaInfoCircle, FaEnvelope, FaTrash } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const Header = ({ onClearReviews }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <header className="site-header">
        <div className="header-content">
          <div className="logo-title">
            <FaStar className="logo-icon" />
            <h1>Review Central</h1>
          </div>
          <button className="nav-toggle" onClick={toggleNav}>
            <HiMenu />
          </button>
        </div>
        <nav className={`side-nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" style={{backgroundColor: 'rgba(0, 120, 215, 0.7)'}}><i><FaHome /></i><span>Home</span></a></li>
            <li><a href="#about" style={{backgroundColor: 'rgba(65, 105, 225, 0.7)'}}><i><FaInfoCircle /></i><span>About</span></a></li>
            <li><a href="#contact" style={{backgroundColor: 'rgba(30, 144, 255, 0.7)'}}><i><FaEnvelope /></i><span>Contact</span></a></li>
            <li><button onClick={onClearReviews} style={{backgroundColor: 'rgba(100, 149, 237, 0.7)'}}><i><FaTrash /></i><span>Clear All Reviews</span></button></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
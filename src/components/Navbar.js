import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button> {/* Toggler button */}
      <div className="logo">Dashboard</div>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="profile-buttons">
        <button className="profile-button">👤</button>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <Link to="/">Dashboard</Link>
      <Link to="/add-student">Add Student</Link>
    </div>
  );
}

export default Sidebar;

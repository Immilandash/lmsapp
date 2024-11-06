// import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import your original Navbar
import Sidebar from './Sidebar'; // Import your original Sidebar
import './Dashboard.css'; // Optional: Import any dashboard-specific styles
import StudentsList from './StudentList';

const Dashboard = () => {

  return (
    <div className="dashboard">
      <Navbar /> {/* Include the Navbar */}
      <div className="dashboard-layout">
        <Sidebar /> {/* Include the Sidebar */}
        <main className="main-content">
        <StudentsList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

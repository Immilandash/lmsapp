// import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import your original Navbar
import Sidebar from './Sidebar'; // Import your original Sidebar
import './Dashboard.css'; // Optional: Import any dashboard-specific styles
import StudentsList from './StudentList';

const Dashboard = () => {
  // const [students, setStudents] = useState([]);
  // const [selectedCampus, setSelectedCampus] = useState('Campus 1'); // Default selected campus

  // useEffect(() => {
  //   // Simulating fetching student data
  //   const fetchedStudents = [
  //     { id: 1, name: 'John Doe', email: 'john@example.com', campus: 'Campus 1' },
  //     { id: 2, name: 'Jane Smith', email: 'jane@example.com', campus: 'Campus 2' },
  //     { id: 3, name: 'Alice Johnson', email: 'alice@example.com', campus: 'Campus 1' }
  //   ];
    
  //   // Simulate setting students after fetching
  //   setStudents(fetchedStudents);
  // }, []);

  // const campuses = ['Campus 1', 'Campus 2', 'Campus 3'];

  // Filter students based on selected campus
  // const filteredStudents = students.filter(student => student.campus === selectedCampus);

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

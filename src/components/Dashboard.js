import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import your original Navbar
import Sidebar from './Sidebar'; // Import your original Sidebar
import NoData from './NoData'; // Import the NoData component
import Tabs from './Tabs'; // Import the Tabs component
import './Dashboard.css'; // Optional: Import any dashboard-specific styles

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState('Campus 1'); // Default selected campus

  useEffect(() => {
    // Simulating fetching student data
    const fetchedStudents = [
      { id: 1, name: 'John Doe', email: 'john@example.com', campus: 'Campus 1' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', campus: 'Campus 2' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', campus: 'Campus 1' }
    ];
    
    // Simulate setting students after fetching
    setStudents(fetchedStudents);
  }, []);

  const campuses = ['Campus 1', 'Campus 2', 'Campus 3'];

  // Filter students based on selected campus
  const filteredStudents = students.filter(student => student.campus === selectedCampus);

  return (
    <div className="dashboard">
      <Navbar /> {/* Include the Navbar */}
      <div className="dashboard-layout">
        <Sidebar /> {/* Include the Sidebar */}
        <main className="main-content">
          <Tabs campuses={campuses} onTabSelect={setSelectedCampus} /> {/* Render the Tabs */}
          {filteredStudents.length === 0 ? (
            <NoData /> /* Show the No Data component if no students are available */
          ) : (
            <div className="student-list">
              <h1>Students List for {selectedCampus}</h1>
              <table className="students-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map(student => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

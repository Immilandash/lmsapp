import React, { useEffect, useState } from 'react';
import api from '../api'; // Adjust path as necessary

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState('All'); // Default tab to "All"

  useEffect(() => {
    // Fetch all students from the backend
    const fetchStudents = async () => {
      try {
        const response = await api.get('/students/all-students'); // Adjust route to match your backend
        setStudents(response.data);
        setFilteredStudents(response.data); // Show all students by default
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  // Filter students by selected campus
  const handleTabChange = (campus) => {
    setSelectedCampus(campus);
    if (campus === 'All') {
      setFilteredStudents(students); // Show all students if "All" is selected
    } else {
      setFilteredStudents(students.filter(student => student.campusNumber === parseInt(campus)));
    }
  };

  return (
    <div className="students-list">
      <h2>Students List</h2>

      {/* Campus Tabs */}
      <div className="campus-tabs">
        <button
          onClick={() => handleTabChange('All')}
          className={selectedCampus === 'All' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => handleTabChange('1')}
          className={selectedCampus === '1' ? 'active' : ''}
        >
          Campus 1
        </button>
        <button
          onClick={() => handleTabChange('2')}
          className={selectedCampus === '2' ? 'active' : ''}
        >
          Campus 2
        </button>
        <button
          onClick={() => handleTabChange('3')}
          className={selectedCampus === '3' ? 'active' : ''}
        >
          Campus 3
        </button>
      </div>

      {/* Students Table */}
      <div className="students-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>WhatsApp Number</th>
              <th>Address</th>
              <th>Aadhar Number</th>
              <th>Campus Number</th>
              <th>Seat Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map(student => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.whatsappNumber}</td>
                  <td>{student.address}</td>
                  <td>{student.aadharNumber}</td>
                  <td>{student.campusNumber}</td>
                  <td>{student.seatNumber}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  No students available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api'; // Adjust path as necessary

const StudentProfile = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student details from the backend
    const fetchStudent = async () => {
      try {
        const response = await api.get(`/students/${id}`); // Adjust the route to match your backend
        setStudent(response.data);
      } catch (error) {
        setError('Error fetching student details.');
        console.error('Error fetching student details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show an error message if the fetch fails
  }

  if (!student) {
    return <div>No student found.</div>; // In case the student data is not found
  }

  return (
    <div className="student-profile">
      <h2>Student Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>WhatsApp Number:</strong> {student.whatsappNumber}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>Aadhar Number:</strong> {student.aadharNumber}</p>
        <p><strong>Campus Number:</strong> {student.campusNumber}</p>
        <p><strong>Seat Number:</strong> {student.seatNumber}</p>
      </div>
      <button onClick={() => window.history.back()}>Back to Students List</button> {/* Button to go back */}
    </div>
  );
};

export default StudentProfile;

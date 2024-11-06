import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api'; // Ensure this matches your API setup

const StudentProfile = () => {
  const { id } = useParams(); // Retrieve the student ID from the URL
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await api.get(`/students/${id}`); // Adjust this route as necessary
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchStudent();
  }, [id]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="student-profile">
      <h2>{student.name}'s Profile</h2>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>WhatsApp Number:</strong> {student.whatsappNumber}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Aadhar Number:</strong> {student.aadharNumber}</p>
      <p><strong>Campus Number:</strong> {student.campusNumber}</p>
      <p><strong>Seat Number:</strong> {student.seatNumber}</p>
    </div>
  );
};

export default StudentProfile;

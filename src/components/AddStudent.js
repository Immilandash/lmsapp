import React, { useState } from 'react';
import api from '../api';
import './AddStudent.css';

function AddStudent() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    whatsapp: '',
    address: '',
    aadhar: '',
    campus: '',
    seat: '',
  });
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', student.name);
    formData.append('email', student.email);
    formData.append('whatsapp', student.whatsapp);
    formData.append('address', student.address);
    formData.append('aadhar', student.aadhar);
    formData.append('campus', student.campus);
    formData.append('seat', student.seat);
    if (profilePic) {
      formData.append('profilePic', profilePic);
    }

    try {
      await api.post('/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Student added successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to add student');
    }
  };

  return (
    <div className="add-student-card">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={student.email} onChange={handleChange} required />
        <input name="whatsapp" type="tel" placeholder="WhatsApp Number" value={student.whatsapp} onChange={handleChange} required />
        <textarea name="address" placeholder="Full Address" value={student.address} onChange={handleChange} required />
        <input name="aadhar" placeholder="Aadhar Number" value={student.aadhar} onChange={handleChange} required />
        <input name="campus" placeholder="Campus Number" value={student.campus} onChange={handleChange} required />
        <input name="seat" placeholder="Seat Number" value={student.seat} onChange={handleChange} required />
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;

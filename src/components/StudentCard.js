import React from 'react';

function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>Grade: {student.grade}</p>
      <button onClick={() => onDelete(student._id)}>Delete</button>
    </div>
  );
}

export default StudentCard;

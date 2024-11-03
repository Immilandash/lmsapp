import React from 'react';
import './NoData.css'; // Import your styles

const NoData = () => {
  return (
    <div className="no-data">
      <img src="./src/phone.png" alt='an egnoramous' />
      <h1 className="no-data-message">Welcome to the Dashboard!</h1>
    </div>
  );
};

export default NoData;

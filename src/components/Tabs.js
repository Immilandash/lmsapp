import React, { useState } from 'react';
import './Tabs.css'; // Optional: Import your tab styles

const Tabs = ({ campuses, onTabSelect }) => {
  const [activeTab, setActiveTab] = useState(campuses[0]); // Default to first campus

  const handleTabClick = (campus) => {
    setActiveTab(campus);
    onTabSelect(campus); // Callback to parent to notify about the selected tab
  };

  return (
    <div className="tabs">
      {campuses.map((campus) => (
        <button
          key={campus}
          className={`tab-button ${activeTab === campus ? 'active' : ''}`}
          onClick={() => handleTabClick(campus)}
        >
          {campus}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

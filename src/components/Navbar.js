import React from 'react';

const Navbar = ({ currentTab, setCurrentTab }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>

      <button onClick={() => setCurrentTab('users')} style={{ fontWeight: currentTab === 'users' ? 'bold' : 'normal' }}>

        User Management
      </button>
      <button onClick={() => setCurrentTab('cars')} style={{ fontWeight: currentTab === 'cars' ? 'bold' : 'normal' }}>
        
        Car & Servicing
      </button>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserManagementPage from './pages/UserManagementPage';
import CarServicingPage from './pages/CarServicingPage';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('users');

  return (
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'users' && <UserManagementPage />}
      {currentTab === 'cars' && <CarServicingPage />}
    </div>
  );
}

export default App;

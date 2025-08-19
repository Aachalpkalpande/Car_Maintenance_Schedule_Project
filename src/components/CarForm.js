import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCarRequest } from '../redux/actions/carActions';

const CarForm = ({ users, setSelectedCar }) => {
  const dispatch = useDispatch();
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [ownerid, setOwnerId] = useState('');
  const [purchase_date, setPurchaseDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCarRequest({ model, color, ownerid, purchase_date }));
    setModel(''); setColor(''); setOwnerId(''); setPurchaseDate('');
    setSelectedCar(null); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Car</h3>
      
      <input value={model} placeholder="Model" onChange={e => setModel(e.target.value)} required />

      <input value={color} placeholder="Color" onChange={e => setColor(e.target.value)} required />

      <select value={ownerid} onChange={e => setOwnerId(e.target.value)} required>

        <option value="">Select User</option>

        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}

      </select>
      <input type="date" value={purchase_date} onChange={e => setPurchaseDate(e.target.value)} required />

      <button type="submit">Create Car</button>
      
    </form>
  );
};

export default CarForm;

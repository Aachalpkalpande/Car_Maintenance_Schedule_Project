import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserRequest } from '../redux/actions/userActions';

const UserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone_no, setPhoneNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserRequest({ name, 'phone_no': phone_no }));
    setName('');
    setPhoneNo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New User</h3>
      <input value={name} placeholder="Name" onChange={e => setName(e.target.value)} required />

      <input value={phone_no} placeholder="Phone Number" onChange={e => setPhoneNo(e.target.value)} required />
      
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;

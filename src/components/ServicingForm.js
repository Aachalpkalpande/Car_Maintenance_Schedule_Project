import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createServicingRequest } from '../redux/actions/servicingActions';

const ServicingForm = ({ car }) => {
  const dispatch = useDispatch();
  const [servicing_date, setServicingDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createServicingRequest({ carid: car.id, servicing_date, status }));
    setServicingDate(''); setStatus('');
  }

  console.log("cars3", car)
  return (
    <form onSubmit={handleSubmit}>

      <h3>Add Servicing for {car?.id}</h3>

      <input type="date" value={servicing_date} onChange={e => setServicingDate(e.target.value)} required />

      <select value={status} onChange={e => setStatus(e.target.value)} required>
        
        <option value="">Select Status</option>

        <option value="Pending">Pending</option>
        <option value="Finished">Finished</option>
      </select>
      <button type="submit">Add Servicing</button>
    </form>
  );
};

export default ServicingForm;

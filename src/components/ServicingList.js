import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicingsRequest } from '../redux/actions/servicingActions';

const ServicingList = ({ car }) => {
  const dispatch = useDispatch();

  const servicings = useSelector(state => state.servicing.servicings);

  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if(car) dispatch(fetchServicingsRequest(car.Id));
  }, [car, dispatch]);

  return (
    <div>
      <h3>Servicing Records</h3>

      {servicings.map(s => (
        <div 
          key={s.Id} 
          className="record-card" 
          onClick={() => setExpandedId(expandedId === s.Id ? null : s.Id)}
        >

          <strong>{s['servicing-date']}</strong> - {s.Status}
          {expandedId === s.Id && (
            <div style={{ marginTop: '10px' }}>
              
              <p>Servicing ID: {s.Id}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicingList;

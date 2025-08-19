import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarForm from '../components/CarForm';
import CarList from '../components/CarList';
import ServicingForm from '../components/ServicingForm';
import ServicingList from '../components/ServicingList';
import { fetchUsersRequest } from '../redux/actions/userActions';

const CarServicingPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Car & Servicing Management</h2>
      <CarForm users={users} setSelectedCar={setSelectedCar} />

      <CarList selectedUser={selectedUser} setSelectedCar={setSelectedCar} />

      {selectedCar && (
        <>
          <ServicingForm car={selectedCar} />
          <ServicingList car={selectedCar} />
        </>
      )}

      
      
    </div>
  );
};

export default CarServicingPage;

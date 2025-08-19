import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { fetchUsersRequest } from '../redux/actions/userActions';

const UserManagementPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  // Fetch all users when page loads
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>User Management</h2>
      <UserForm />
      {/* Passing parent data to child */}
      <UserList users={users} /> 
    </div>
  );
};

export default UserManagementPage;

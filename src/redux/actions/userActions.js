// src/redux/actions/userActions.js

// User Actions
export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USER_DETAILS_REQUEST = "FETCH_USER_DETAILS_REQUEST"; 
export const FETCH_USER_DETAILS_SUCCESS = "FETCH_USER_DETAILS_SUCCESS"; 
// Action Creators
export const createUserRequest = (user) => ({ type: CREATE_USER_REQUEST, user });
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUserDetailsRequest = (id) => ({
  type: FETCH_USER_DETAILS_REQUEST,
  id,
});

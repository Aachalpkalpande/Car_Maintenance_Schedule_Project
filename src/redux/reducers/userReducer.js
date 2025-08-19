// src/redux/reducers/userReducer.js
import {
  CREATE_USER_SUCCESS,
  FETCH_USERS_SUCCESS,
  FETCH_USER_DETAILS_SUCCESS,
} from "../actions/userActions";

const initialState = {
  users: [],
  userDetails: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return { ...state, users: [...state.users, action.user] };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.users };
    case FETCH_USER_DETAILS_SUCCESS: 
      return { ...state, userDetails: action.user };
    default:
      return state;
  }
};

export default userReducer;

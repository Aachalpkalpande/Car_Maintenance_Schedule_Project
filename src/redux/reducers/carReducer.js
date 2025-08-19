// src/redux/reducers/carReducer.js
import {
  CREATE_CAR_SUCCESS,
  FETCH_CARS_SUCCESS,
  FETCH_CAR_DETAILS_SUCCESS,
} from "../actions/carActions";

const initialState = {
  cars: [],
  carDetails: null,
  
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CAR_SUCCESS:
      return { ...state, cars: [...state.cars, action.car] };
    case FETCH_CARS_SUCCESS:
      return { ...state, cars: action.cars };
    case FETCH_CAR_DETAILS_SUCCESS: 
      return { ...state, carDetails: action.car };
    default:
      return state;
  }
};

export default carReducer;

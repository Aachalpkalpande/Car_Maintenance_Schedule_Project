// src/redux/actions/carActions.js

// Car Actions
export const CREATE_CAR_REQUEST = "CREATE_CAR_REQUEST";
export const CREATE_CAR_SUCCESS = "CREATE_CAR_SUCCESS";
export const FETCH_CARS_REQUEST = "FETCH_CARS_REQUEST";
export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
export const FETCH_CAR_DETAILS_REQUEST = "FETCH_CAR_DETAILS_REQUEST"; // ✅
export const FETCH_CAR_DETAILS_SUCCESS = "FETCH_CAR_DETAILS_SUCCESS"; // ✅

// Action Creators
export const createCarRequest = (car) => ({ type: CREATE_CAR_REQUEST, car });
export const fetchCarsRequest = (userid) => ({
  type: FETCH_CARS_REQUEST,
  userid,
});
export const fetchCarDetailsRequest = (id) => ({
  type: FETCH_CAR_DETAILS_REQUEST,
  id,
});

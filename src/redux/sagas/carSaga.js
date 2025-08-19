// src/redux/sagas/carSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_CAR_REQUEST,
  CREATE_CAR_SUCCESS,
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CAR_DETAILS_REQUEST,
  FETCH_CAR_DETAILS_SUCCESS,
} from "../actions/carActions";
import { createCar, getAllCars, getCarById } from "../../api/api";

// Worker: Create Car
function* createCarSaga(action) {
  try {
    yield call(createCar, action.car);
    yield put({ type: CREATE_CAR_SUCCESS, car: action.car });
  } catch (e) {
    console.error("Create Car failed", e);
  }
}

// Worker: Fetch All Cars
function* fetchCarsSaga(action) {
  try {
    const response = yield call(getAllCars, action.userid);
    yield put({ type: FETCH_CARS_SUCCESS, cars: response.data.Cars });
  } catch (e) {
    console.error("Fetch Cars failed", e);
  }
}

// Worker: Fetch Car Details by ID ✅
function* fetchCarDetailsSaga(action) {
  try {
    const response = yield call(getCarById, action.id);
    yield put({ type: FETCH_CAR_DETAILS_SUCCESS, car: response.data.Car });
  } catch (e) {
    console.error("Fetch Car Details failed", e);
  }
}

// Watcher
export default function* carSaga() {
  yield takeLatest(CREATE_CAR_REQUEST, createCarSaga);
  yield takeLatest(FETCH_CARS_REQUEST, fetchCarsSaga);
  yield takeLatest(FETCH_CAR_DETAILS_REQUEST, fetchCarDetailsSaga); // ✅
}

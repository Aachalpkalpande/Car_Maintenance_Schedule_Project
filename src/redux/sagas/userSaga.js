// src/redux/sagas/userSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
} from "../actions/userActions";
import { createUser, getAllUsers, getUserById } from "../../api/api";

// Worker: Create User
function* createUserSaga(action) {
  try {
    yield call(createUser, action.user);
    yield put({ type: CREATE_USER_SUCCESS, user: action.user });
  } catch (e) {
    console.error("Create User failed", e);
  }
}

// Worker: Fetch All Users
function* fetchUsersSaga() {
  try {
    const response = yield call(getAllUsers);
    yield put({ type: FETCH_USERS_SUCCESS, users: response.data.Users });
  } catch (e) {
    console.error("Fetch Users failed", e);
  }
}

// Worker: Fetch User Details by ID ✅
function* fetchUserDetailsSaga(action) {
  try {
    const response = yield call(getUserById, action.id);
    yield put({ type: FETCH_USER_DETAILS_SUCCESS, user: response.data.User });
  } catch (e) {
    console.error("Fetch User Details failed", e);
  }
}

// Watcher
export default function* userSaga() {
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(FETCH_USER_DETAILS_REQUEST, fetchUserDetailsSaga); // ✅
}

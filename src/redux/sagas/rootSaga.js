import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import carSaga from './carSaga';
import servicingSaga from './servicingSaga';

// Combine all sagas
export default function* rootSaga() {
  yield all([
    userSaga(),
    carSaga(),
    servicingSaga()
  ]);
}

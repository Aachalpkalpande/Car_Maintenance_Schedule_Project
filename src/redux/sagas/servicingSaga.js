
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_SERVICINGS_REQUEST, fetchServicingsRequest, fetchServicingsSuccess, fetchServicingsFailure,
  CREATE_SERVICING_REQUEST, createServicingSuccess, createServicingFailure
} from '../actions/servicingActions';
import { getAllServicings, createServicing } from '../../api/api';

// Fetch servicing
function* fetchServicings(action){
  try{
    const response = yield call(getAllServicings, action.payload);
    if(response.data.error === 0){
      yield put(fetchServicingsSuccess(response.data.servicings));
    } else {
      yield put(fetchServicingsFailure(response.data['error-message']));
    }
  } catch(err){
    yield put(fetchServicingsFailure(err.message));
  }
}

// Create servicing
function* createNewServicing(action){
  try{
    const response = yield call(createServicing, action.payload);
    if(response.data.error === 0){
      yield put(createServicingSuccess());

      yield put(fetchServicingsRequest(action.payload.carid)); // Refresh servicing list
    } else {
      yield put(createServicingFailure(response.data['error-message']));
    }
  } catch(err){
    yield put(createServicingFailure(err.message));
  }
}

export default function* servicingSaga(){
  yield takeLatest(FETCH_SERVICINGS_REQUEST, fetchServicings);
  yield takeLatest(CREATE_SERVICING_REQUEST, createNewServicing);
}

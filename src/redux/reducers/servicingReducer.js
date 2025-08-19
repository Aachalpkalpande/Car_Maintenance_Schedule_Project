import {
  FETCH_SERVICINGS_REQUEST, FETCH_SERVICINGS_SUCCESS, FETCH_SERVICINGS_FAILURE,
  CREATE_SERVICING_REQUEST, CREATE_SERVICING_SUCCESS, CREATE_SERVICING_FAILURE
} from '../actions/servicingActions';

const initialState = {
  servicings: [],
  loading: false,
  error: null
};

export const servicingReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SERVICINGS_REQUEST:
    case CREATE_SERVICING_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SERVICINGS_SUCCESS:
      return { ...state, loading: false, servicings: action.payload };
    case CREATE_SERVICING_SUCCESS:
      return { ...state, loading: false };
    case FETCH_SERVICINGS_FAILURE:
    case CREATE_SERVICING_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

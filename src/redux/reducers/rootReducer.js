import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { carReducer } from './carReducer';
import { servicingReducer } from './servicingReducer';

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  car: carReducer,
  servicing: servicingReducer
});

export default rootReducer;

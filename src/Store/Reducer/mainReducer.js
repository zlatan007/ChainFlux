
  
import { combineReducers } from 'redux';
import firstReducer from './firstReducer';

export default combineReducers({
  add: firstReducer
});
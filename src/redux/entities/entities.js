import { combineReducers } from 'redux';
import counterReducers from './../slices/counterSlice'
export default combineReducers({
  counter: counterReducers
});

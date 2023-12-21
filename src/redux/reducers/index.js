// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  error: errorReducer,
});

export default rootReducer;


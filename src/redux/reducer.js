import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import jncrequest from './modules/jncrequest';

export default combineReducers({
  routing: routerReducer,
  jncrequest
});

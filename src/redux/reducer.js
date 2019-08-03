import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { routerReducer } from 'react-router-redux';
import jncrequest from './modules/jncrequest';

export default (history) => combineReducers({
  router: connectRouter(history),
  routing: routerReducer,
  jncrequest
})

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { routerReducer } from 'react-router-redux';
import binding from './modules/binding';

export default (history) => combineReducers({
  router: connectRouter(history),
  routing: routerReducer,
  binding
})

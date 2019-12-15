import { combineReducers } from 'redux';
import conferences from './conferences';
import rooms from './rooms';

const reducers = combineReducers({
  rooms,
  conferences,
});

export default reducers;

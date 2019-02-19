import { combineReducers } from 'redux';
import list from './listReducers';
import counter from './counterReducers';

const rootReducer = combineReducers({
  list,
  counter,
});

export default rootReducer;

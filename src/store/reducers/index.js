import { combineReducers } from 'redux';
import listReducers from './listReducers';

const rootReducer = combineReducers({
  fetchCharacters: listReducers,
  fetchComics: listReducers,
  fetchSeries: listReducers,
});

export default rootReducer;

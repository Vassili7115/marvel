import { combineReducers } from "redux";
import fecthReducers from "./listReducers";

const rootReducer = combineReducers({
  fetch: fecthReducers,
});

export default rootReducer;
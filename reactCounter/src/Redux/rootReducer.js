import { combineReducers } from "redux";
import dynamicCounterReducer from "./DynamicCounter/dynamicCounterReducer";
import counterReducer from "./Counter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounterReducer: dynamicCounterReducer,
});

export default rootReducer;

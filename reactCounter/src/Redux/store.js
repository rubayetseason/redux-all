import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

// creating first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;

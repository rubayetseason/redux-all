import rootReducer from "../rootReducer";

// creating first middleware
export const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);
  
    const upcomingState = [action].reduce(rootReducer, store.getState());
  
    console.log(`UpcomingState: ${JSON.stringify(upcomingState)}`);
  
    return next(action);
  };
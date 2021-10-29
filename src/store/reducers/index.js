import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import users from "./user";

const reducers = combineReducers({
  users,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export default createStore(reducers, enhancer);

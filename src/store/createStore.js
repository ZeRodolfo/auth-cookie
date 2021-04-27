/* eslint-disable import/no-anonymous-default-export */
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// const = (rootReducer) => (state, action) => {
//   if (action.type !== "RESET") return rootReducer(state, action);

//   // RESET THE REDUX-PERSIST (LOCAL STORAGE) FOR THE INITIAL STATE OF THE APPLICATION!
//   const newState = rootReducer(undefined, {});
//   newState.router = state.router;
//   return newState;
// };

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(composeWithDevTools(applyMiddleware(...middlewares)))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

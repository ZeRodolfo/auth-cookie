import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// import history from "../../services/history";
import auth from "./auth/reducers";

// export default combineReducers({
//     authentication: auth,
//     router: connectRouter(history),
// });

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication: auth,
  });
export default createRootReducer;

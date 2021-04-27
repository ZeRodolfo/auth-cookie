import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// import history from "../../services/history";
import authentication from "./auth/reducers";
import dashboard from "./dashboard/reducers";

// export default combineReducers({
//     authentication: auth,
//     router: connectRouter(history),
// });

const createRootReducer = combineReducers({
  dashboard,
});

const createRouterReducer = (history) => connectRouter(history);

const authReducer = combineReducers({
  authentication,
});

export { authReducer, createRootReducer, createRouterReducer };

import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
// import { CookieStorage } from "redux-persist-cookie-storage";
// import Cookies from "cookies-js";

// import history from "../services/history";
import createStore from "./createStore";
// import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import {
  // authReducer,
  createRootReducer,
  createRouterReducer,
} from "./modules/reducers";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor: null });
const _routerMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, _routerMiddleware];

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: [],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer(history));

// const store = createStore(persistedReducer, middlewares);
// const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

// export { store, persistor };

const rootPersistConfig = {
  key: "root",
  storage: storage,
  // storage: new CookieStorage(Cookies),
  // blacklist: ["auth"],
};

// const authPersistConfig = {
//   key: "auth",
//   storage: new CookieStorage(Cookies, {
//     expiration: {
//       default: 365 * 86400, // Cookies expire after one year
//       storeKey: 600, // State in key `storeKey` expires after 10 minutes
//     },
//     setCookieOptions: {
//       path: "/mypath",
//       domain: "localhost",
//     },
//   }),
//   // blacklist: ["somethingTemporary"],
// };

// const routerReducer = createRootReducer(history);

const rootReducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authReducer),
  router: createRouterReducer(history),
  common: createRootReducer,
});

// export default persistReducer(rootPersistConfig, rootReducer)

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

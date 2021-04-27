import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Routes from "./routes";
// import history from "./services/history";
import { store, persistor, history } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes history={history} />
      </PersistGate>
    </Provider>
  );
};

export default App;

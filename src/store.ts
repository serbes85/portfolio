import { createStore, compose } from "redux";
import { reducer } from "./modules";

const createAppStore = () => {
  const store = createStore(
    reducer,
    compose(
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    ));

  return store;
};

export default createAppStore;

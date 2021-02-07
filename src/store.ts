import { createStore } from "redux";
import { reducer } from "./modules";

const createAppStore = () => {
  const store = createStore(reducer);

  return store;
};

export default createAppStore;

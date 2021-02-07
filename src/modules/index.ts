import { combineReducers } from "redux";
import auth from "./auth";

const reducers = {
  auth,
};

export const reducer = combineReducers(reducers);

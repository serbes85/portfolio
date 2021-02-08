import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { loginRequest, loginSuccess, loginFailure, logout } from "./actions";

const isAuthorized = handleActions(
    {
        [loginRequest.toString()]: () => false,
        [loginSuccess.toString()]: () => true,
        [loginFailure.toString()]: () => false,
        [logout.toString()]: () => false,
    },
    false,
);

const error = handleActions(
    {
        [loginRequest.toString()]: () => null,
        [loginSuccess.toString()]: () => null,
        [loginFailure.toString()]: (_state, action) => action.payload,
    },
    null
);
export default combineReducers({ isAuthorized, error });

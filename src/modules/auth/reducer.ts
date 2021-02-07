import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { loginRequest, loginSuccess, loginFailure } from "./actions";

const isAuthorized = handleActions(
    {
        [loginRequest.toString()]: () => false,
        [loginSuccess.toString()]: () => true,
        [loginFailure.toString()]: () => false,
    },
    false,
);

export default combineReducers({ isAuthorized });

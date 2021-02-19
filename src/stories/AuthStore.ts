import { makeObservable, observable, action } from "mobx";
import { createContext } from "react";

class AuthStore {
    isAuthorized = false;

    constructor() {
        makeObservable(this, {
            isAuthorized: observable,
            loginRequest: action("AUTH/LOGIN_REQUEST"),
            loginSuccess: action("AUTH/LOGIN_SUCCESS"),
            loginFailure: action("AUTH/LOGIN_FAILURE"),
            logout: action("LOGOUT")
        });
    }

    loginRequest() {
        this.isAuthorized = false;
    }

    loginSuccess() {
        this.isAuthorized = true;
    }

    loginFailure() {
        this.isAuthorized = false;
    }
    logout() {
        this.isAuthorized = false;
    }
}

export default createContext(new AuthStore());
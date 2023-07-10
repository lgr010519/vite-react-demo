import {combineReducers} from "redux";
import login, {LoginState} from "../views/Login/store/reducer.ts";

export interface ReducerState {
    login: LoginState
}

export default combineReducers({
    login,
})
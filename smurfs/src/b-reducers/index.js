import {combineReducers} from "redux";
import {smurfsReducer} from "./smurfsReducer";
/* import all reducers */

export const rootReducer = combineReducers({smurfsReducer})
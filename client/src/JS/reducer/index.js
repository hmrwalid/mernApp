import { combineReducers } from "redux";
import { userReducer } from './user'
import { editReducer } from "./edit";
import {authReducer} from "./authReducer.js"

export const rootReducer = combineReducers({userReducer, editReducer, authReducer})

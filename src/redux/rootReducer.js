import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./Login/loginSlice";
import styleReducer from "./Styles/styleSlice";

export const rootReducer = combineReducers({
  login: loginReducer,
  style:styleReducer
})
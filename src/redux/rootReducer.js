import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./Post/postSlice";
import styleReducer from "./Styles/styleSlice";

export const rootReducer = combineReducers({
  login: loginReducer,
  style: styleReducer
});
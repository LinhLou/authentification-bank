import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import styleReducer from "./Styles/styleSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  style: styleReducer
});
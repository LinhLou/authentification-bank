import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './loginSlice';
import styleReducer from './styleSlice';


const store = configureStore({
  reducer: {
    login: loginReducer,
    style: styleReducer
  }
});


export default store;
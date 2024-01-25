import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserServices from "../../App/userService";

const service = new UserServices();

const initialState = {
  jwt: ''
};


export const fetchProfile = createAsyncThunk(
  'post/fetchProfile',
  service.login
);


export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetInfo: () => initialState,
    updateInfo: (state,action)=>{
      state.profile.firstName = action.payload.firstName;
      state.profile.lastName = action.payload.lastName;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.profile = action.payload.userProfile;
      })
  },
});

export const { resetInfo, updateInfo } = postSlice.actions;

export default postSlice.reducer



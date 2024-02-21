import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserServices from "../../App/userService";

const service = new UserServices();

const initialState = {
  jwt: '',
  status:true
};


export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  service.login
);


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetInfo: () => initialState,
    updateInfo: (state, action)=>{
      state.profile.firstName = action.payload.firstName;
      state.profile.lastName = action.payload.lastName;
      state.status = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.profile = action.payload.userProfile;
        state.status = true;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.status = false;
      })
  },
});

export const { resetInfo, updateInfo } = userSlice.actions;

export default userSlice.reducer



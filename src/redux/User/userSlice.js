import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserServices from "../../App/userService";

const service = new UserServices();

const initialState = {
  jwt: '',
  firstName: '',
  lastName: '',
  connexion: 'pending' // 3 value possible: pending, success, fail
};


export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  service.login
);

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  service.updateProfile
);


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetInfo: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.firstName = action.payload.userProfile.firstName;
        state.lastName = action.payload.userProfile.lastName;
        state.connexion = 'success';
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.connexion = 'fail';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.firstName = action.payload.updatedData.firstName;
        state.lastName = action.payload.updatedData.lastName;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.error = 'error here';
      })
  },
});

export const { resetInfo, updateInfo } = userSlice.actions;

export default userSlice.reducer



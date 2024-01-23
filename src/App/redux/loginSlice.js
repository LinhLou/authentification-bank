import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CallsAPI from "../callsAPI";


const API = new CallsAPI('http://localhost:3001/api/v1/user');

const initialState = {
  jwt: ''
};



export const fetchProfile = createAsyncThunk(
  'login/fetchProfile',
  async (userData) => {
      const resToken = await API.getUserToken('/login', { email: userData.email, password: userData.password });
      const jwt = await resToken.body.token;
      const resProfile = await API.getUserProfile('/profile',jwt);
      const userProfile = await resProfile.body;
      return { jwt, userProfile }
  }
);


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.profile = action.payload.userProfile;
      })
  },
});

export default loginSlice.reducer



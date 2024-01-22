import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CallsAPI from "../callsAPI";


const API = new CallsAPI('http://localhost:3001/api/v1/user');

const initialState = {
  email:'',
  password:'',
  jwt: ''
}

export const fetchToken = createAsyncThunk(
  'login/fetchToken',
  async (userData) => {
    const res = await API.getUserToken('/login', {email:userData.email, password:userData.password})
    const jwt = await res.body.token;
    return jwt
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail:(state, action)=>{
      state.email = action.payload;
    },
    setPassword:(state, action)=>{
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.jwt = action.payload;
    })
  },
})

export default loginSlice.reducer



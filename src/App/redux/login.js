import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CallsAPI from "../callsAPI";
// import { getData } from "../getData";


const API = new CallsAPI('http://localhost:3001/api/v1/user');

const initialState = {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.jwt = action.payload
    })
  },
})

export default loginSlice.reducer




// const API = new CallsAPI('http://localhost:3001/api/v1/user');

// const loginSlice = createSlice({
//   name: "login",
//   initialState: '',
//   reducers: {
//     getToken: async (state, action) => {
//       const  res = await API.getUserToken('/login', {email:action.payload.email, password:action.payload.password});
//       state = res.body.token;
//       console.log(state);
//      }
//   }
// });




// export default loginSlice.reducer
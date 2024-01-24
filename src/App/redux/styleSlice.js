import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refresh:true,
  main:'main bg-dark',
  editBtn: 'edit-button'
}

export const styleSlice = createSlice({

  name:'style',
  initialState,
  reducers:{
    editStyle: (state)=>{
      state.main = 'main bg-light' ;
      state.editBtn = 'edit-button edit-invisible' ;
    },
    initStyle:(state=initialState)=>{
      state.refresh=false;
    }
  }
})
export const { editStyle, initStyle } = styleSlice.actions;
export default styleSlice.reducer
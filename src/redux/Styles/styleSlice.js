import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  main:'main bg-dark',
  editBtn:'edit-button',
  nameSpan:'',
  nameForm:'edit-invisible',
  transactionBtn: 'transaction-button'
}

export const styleSlice = createSlice({

  name:'style',
  initialState,
  reducers:{
    editStyle: (state=initialState)=>{
      state.main = 'main bg-light' ;
      state.editBtn = 'edit-button edit-invisible' ;
      state.nameSpan = 'edit-invisible';
      state.nameForm = 'edit-form';
      state.transactionBtn='transaction-button transaction-button-editname';
    },
    transactionStyle:(state)=>{
      state.transactionBtn='transaction-button';
    },
    resetStyle: ()=>initialState
  }
})
export const { editStyle, initStyle, transactionStyle, resetStyle } = styleSlice.actions;
export default styleSlice.reducer
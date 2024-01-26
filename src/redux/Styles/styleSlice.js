import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main:'main bg-dark',
  main_nav_item:'main-nav-item',
  logout_btn:'logout-button',
  editBtn:'edit-button',
  nameSpan:'',
  welcomeSpan:'',
  nameForm:'edit-invisible',
  account:'account',
  transactionBtn: 'transaction-button'
}

export const styleSlice = createSlice({

  name:'style',
  initialState,
  reducers:{
    editStyle: (state=initialState)=>{
      state.main = 'main bg-light' ;
      state.editBtn = 'edit-button edit-invisible' ;
      state.main_nav_item ="main-nav-item main-nav-item-edit";
      state.logout_btn='logout-button logout-button-edit';
      state.nameSpan = 'edit-invisible';
      state.welcomeSpan = 'edit-header';
      state.nameForm = 'edit-form';
      state.account = 'account account-edit';
      state.transactionBtn='transaction-button transaction-button-editname';
    },
    resetStyle: ()=>initialState
  }
})
export const { editStyle, initStyle, transactionStyle, resetStyle } = styleSlice.actions;
export default styleSlice.reducer
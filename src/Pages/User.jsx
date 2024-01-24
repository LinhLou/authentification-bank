import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useLoaderData } from 'react-router-dom';
import Logo from '../Components/Logo';

import { useSelector, useDispatch } from 'react-redux';
import { editStyle, initStyle } from '../App/redux/styleSlice';




export default function Profile() {

  const { userData } = useLoaderData();
  const profile = userData.profile;

  const dispatch = useDispatch();
  let style = useSelector(state=>state.style);

  // //  state persist when refreshing page
  // if(!localStorage.getItem('styleInitial')){
  //   localStorage.setItem('styleInitial',JSON.stringify(style));
  // }

  // if(!localStorage.getItem('style')||localStorage.getItem('styleInitial')!==JSON.stringify(style)){
  //   localStorage.setItem('style',JSON.stringify(style));
  // }

  // style = JSON.parse(localStorage.getItem('style'));

  // event handle
  const clickEditBtnHandle=()=>{
    dispatch(editStyle());
  }

  const clickSaveBtnHandle = ()=>{
    dispatch(initStyle());
  }

  const clickCancleBtnHandle = ()=>{
    dispatch(initStyle());
  }
  
  


  return (
    <>
      <header>
        <nav className="main-nav">
          <Logo />
          <div>
            <Link to='/user' className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {profile.firstName}
            </Link>
            <Link to="/" className="main-nav-item" >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        </nav>
      </header>
      <main className={style.main}>
        <div className="header">
          <h1>Welcome back<br /><span className="edit-invisible"> {profile.firstName} {profile.lastName}! </span></h1>
          <button className={style.editBtn} onClick={()=>clickEditBtnHandle()}>Edit Name</button>
          <form className="edit-form ">
            <div className='edit-name'>
              <input type="text" placeholder={profile.firstName}/>
              <input type="text" placeholder={profile.lastName}/>
            </div>
            <div className='edit-buttons'>
              <button onClick={()=>clickSaveBtnHandle()}>Save</button>
              <button onClick={()=>clickCancleBtnHandle()}>Cancel</button>
            </div>
          </form>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>   
    </>
  )
}



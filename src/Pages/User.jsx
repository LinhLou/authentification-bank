import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useLoaderData } from 'react-router-dom';
import Logo from '../Components/Logo';

import { useSelector, useDispatch } from 'react-redux';
import { editStyle, resetStyle, transactionStyle } from '../redux/Styles/styleSlice';
import { resetInfo } from '../redux/Post/postSlice';

import UserServices from '../App/userService';



export default function Profile() {

  const service = new UserServices();
  const { userData } = useLoaderData();
  const profile = userData.profile;
  const jwt = userData.jwt;

  // console.log(jwt, profile)


  const refFirstName = useRef();
  const refLastName = useRef();


  
  const dispatch = useDispatch();
  const style = useSelector(state=>state.style);

  

  // event handle
  const clickEditBtnHandle=()=>{
    dispatch(editStyle());
  }


  const clickSaveBtnHandle = async (e)=>{
    e.preventDefault();
    await service.updateProfile(jwt,{firstName:refFirstName.current.value, lastName: refLastName.current.value});
    dispatch(resetStyle());
  }

  const clickCancleBtnHandle = ()=>{
    dispatch(resetStyle());
  }
  
  const clickTransactionBtnHandle = ()=>{
    dispatch(transactionStyle());
  }

  const clickLogoutBtnHandle = ()=>{
    dispatch(resetInfo());
    dispatch(resetStyle());
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
              <button onClick={()=>clickLogoutBtnHandle()}> <i className="fa fa-sign-out"></i> Sign Out</button>
            </Link>
          </div>
        </nav>
      </header>
      <main className={style.main}>
        <div className="header">
          <h1>Welcome back<br /><span className={style.nameSpan}> {profile.firstName} {profile.lastName}! </span></h1>
          <button type="button" className={style.editBtn} onClick={()=>clickEditBtnHandle()}>Edit Name</button>
          <form className={style.nameForm}>
            <div className='edit-name'>
              <input type="text" placeholder={profile.firstName} ref={refFirstName}/>
              <input type="text" placeholder={profile.lastName} ref={refLastName}/>
            </div>
            <div className='edit-buttons'>
              <button type="submit" onClick={(e)=> {clickSaveBtnHandle(e)}}>Save</button>
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
            <button onClick={()=>clickTransactionBtnHandle()} className={style.transactionBtn}>View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button onClick={()=>clickTransactionBtnHandle()} className={style.transactionBtn}>View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button onClick={()=>clickTransactionBtnHandle()} className={style.transactionBtn}>View transactions</button>
          </div>
        </section>
      </main>   
    </>
  )
}



import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';

import { useSelector, useDispatch } from 'react-redux';
import { editStyle, resetStyle } from '../redux/Styles/styleSlice';
import { resetInfo, updateInfo } from '../redux/User/userSlice';
import UserServices from '../App/userService';



export default function Profile() {

  const service = new UserServices();

  const refFirstName = useRef();
  const refLastName = useRef();

  
  const dispatch = useDispatch();
  const style = useSelector(state=>state.style);
  const user = useSelector(state=>state.user);

  const profile = user.profile;
  const jwt = user.jwt;


  // event handle
  const handleEdit=()=>{
    dispatch(editStyle());
  }


  const handleSave = (e)=>{
    e.preventDefault();
    service.updateProfile(jwt,{firstName:refFirstName.current.value, lastName: refLastName.current.value});
    dispatch(updateInfo({firstName:refFirstName.current.value, lastName: refLastName.current.value}));
    dispatch(resetStyle());
    refFirstName.current.value='';
    refLastName.current.value='';
  }

  const handleCancle = (e)=>{
    e.preventDefault();
    dispatch(resetStyle());
  }

  const handleLogout = ()=>{
    dispatch(resetInfo());
    dispatch(resetStyle());
  }
  


  return (
    <>
      <header className='body-header'>
        <nav className="main-nav">
          <Logo />
          <div>
            <Link to='/user' className={style.main_nav_item}>
              <i className="fa fa-user-circle"></i>
              {profile.firstName}
            </Link>
            <Link to="/" className={style.main_nav_item} >
              <button className={style.logout_btn} onClick={handleLogout}> 
                <i className="fa fa-sign-out icon-sign-out"></i> 
                Sign Out
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <main className={style.main}>
        <div className="header">
          <h1> <span className={style.welcomeSpan}> Welcome back </span><br /><span className={style.nameSpan}> {profile.firstName} {profile.lastName}! </span></h1>
          <button type="button" className={style.editBtn} onClick={handleEdit}>Edit Name</button>
          <form className={style.nameForm}>
            <div className='edit-name'>
              <input type="text" placeholder={profile.firstName} ref={refFirstName}/>
              <input type="text" placeholder={profile.lastName} ref={refLastName}/>
            </div>
            <div className='edit-buttons'>
              <button type="submit" onClick={(e)=> {handleSave(e)}}>Save</button>
              <button onClick={(e)=>handleCancle(e)}>Cancel</button>
            </div>
          </form>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className={style.account}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className={style.transactionBtn}>View transactions</button>
          </div>
        </section>
        <section className={style.account}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className={style.transactionBtn}>View transactions</button>
          </div>
        </section>
        <section className={style.account}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className={style.transactionBtn}>View transactions</button>
          </div>
        </section>
      </main>   
    </>
  )
}



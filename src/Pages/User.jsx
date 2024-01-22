import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useLoaderData } from 'react-router-dom';
import Logo from '../Components/Logo';
import SignIn from './Sign-in';


// import { getData } from '../App/getData';




export default function Profile() {
  const { userProfile } = useLoaderData();
  console.log(userProfile)


  return (
    <>
      <header>
        <nav className="main-nav">
          <Logo />
          <div>
            <Link to='/user/id' className="main-nav-item" element={<SignIn />}>
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link to="/" className="main-nav-item" >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        </nav>
      </header>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
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

// export const  userProfileLoader = async({params})=>{
//   const { id } = params;
//   const userData  = await getData(id);
//   return { userData } 
// }



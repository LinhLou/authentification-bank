import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import { getData } from '../App/getData';

export default function SignIn() {
  const data = getData({email:"tony@stark.com", password:"password123"});
  return (
    <>
      <header>
        <nav className="main-nav">
          <Logo />
          <div>
            <Link to='/signin' className="main-nav-item" >
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        </nav>
      </header>
      <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me"> Remember me </label>
          </div>
          <Link to='/user/id' className="sign-in-button">Sign In</Link>
        </form>
      </section>
      </main>
    </>
  )
}

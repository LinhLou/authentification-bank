import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import { useDispatch } from 'react-redux';
import { fetchProfile, resetInfo } from '../redux/Post/postSlice';
import { resetStyle } from '../redux/Styles/styleSlice';


export default function SignIn() {
  // access to Redux
  const dispatch = useDispatch();

  // reset states
  useEffect(()=>{
    dispatch(resetStyle());
    dispatch(resetInfo());
  },[]);
  

  // referenced to the email and password inputs
  const emailRef = useRef();
  const passwordRef = useRef();

  // React-router-dom to navigate to other page
  const navigate = useNavigate();
 
  const onSubmit = async (e)=>{
    e.preventDefault();
    await dispatch(fetchProfile({email:emailRef.current.value, password:passwordRef.current.value}));
    navigate('/user');
  }

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
        <form onSubmit={(e)=>onSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" ref = {emailRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" ref ={passwordRef} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me"> Remember me </label>
          </div>
          <input type="submit" className="sign-in-button" value="Sign In"/>
        </form>
      </section>
      </main>
    </>
  )
}

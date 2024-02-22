import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProfile, resetInfo } from '../redux/User/userSlice';
import { resetStyle } from '../redux/Styles/styleSlice';
import store from '../redux/store';

export default function SignIn (){

  // reset states
  useEffect(()=>{
    dispatch(resetStyle());
    dispatch(resetInfo());
  },[]);

  // access to Redux
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user);
  const connexion = user.status.login;

  // add class to formular sigin
  let class_Signin = '';
  if(connexion==='fail'){
    class_Signin ='login-false';
  }else{
    class_Signin ='login-init';
  }

  // referenced to the email and password inputs
   const emailRef = useRef();
   const passwordRef = useRef();
 
   // React-router-dom to navigate to other page
   const navigate = useNavigate();
  
   const handleSubmit = async (e)=>{
     e.preventDefault();
     await dispatch(fetchProfile({email:emailRef.current.value, password:passwordRef.current.value}));
     const state = store.getState();
     const connexion = state.user.status.login;
     if(connexion==='success'){
      navigate('/user');
     }else{
      navigate('/signin');
     }
   }

   return (
    <>
      <header className='body-header'>
        <nav className="main-nav">
          <Logo />
          <div>
            <Link to='/signin' className="main-nav-item" >
              <i className="fa fa-user-circle icon-user-circle"></i>
              Sign In
            </Link>
          </div>
        </nav>
      </header>
      <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" ref = {emailRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" ref ={passwordRef} />
          </div>
          <div className={class_Signin}>
          The informations are incorecte. Please try again!
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


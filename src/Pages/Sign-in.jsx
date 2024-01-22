import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import { getData } from '../App/getData';
import { useSelector, useDispatch } from 'react-redux';
import { fetchToken } from '../App/redux/login';

export default function SignIn() {
  // const data = getData({email:"tony@stark.com", password:"password123"});

  const token = useSelector(state =>console.log(state.login));
  const dispatch = useDispatch();
 
  
  const [name, setName ] = useState('');
  const [password, setPassword] = useState('');
  const onChangeName = (e)=>{
    setName(e.target.value);
  }
  const onChangePassword = (e)=>{
    setPassword(e.target.value);
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(fetchToken({email:name, password:password}));
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
            ><input type="text" id="username" onChange={(e)=>onChangeName(e)}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" onChange={(e)=>onChangePassword(e)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me"> Remember me </label>
          </div>
          <input type="submit" className="sign-in-button" value="Sign In"/>
          {/* <Link to='/user/id' className="sign-in-button">Sign In</Link> */}
        </form>
      </section>
      </main>
    </>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Index';
import argentBankLogo from "../img/argentBankLogo.png";

export default function Logo() {
  return (
    <Link to='/' className="main-nav-logo" element={<Home/>} >
      <img
          className="main-nav-logo-image"
          src= {argentBankLogo}
          alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  )
}

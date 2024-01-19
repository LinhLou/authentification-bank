import React from 'react';
import { Outlet } from 'react-router-dom';



export default function Layout() {
  
  return (
    <>
      <Outlet/>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}

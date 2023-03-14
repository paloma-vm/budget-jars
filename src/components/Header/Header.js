// src/Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <header>
        <div className='Header-left'>
          <h1>Budget Jars</h1>
          <div className="Header-Subheader">Are you on track for the week?</div>
        </div>
        <div className='Header-right'>
          <div className='a'>
            <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/today"> Get Started</NavLink>
            {/* <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">Blank</NavLink> */}
            <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about">About</NavLink>
          </div>
          
        </div>

      </header>
    </div>
  )
}

export default Header

// Navbar.js
import React from 'react';
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <img className="logo" src="logo.png" alt="logo" />
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

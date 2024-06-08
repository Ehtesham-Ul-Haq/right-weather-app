import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Right Weather</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

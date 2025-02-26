import React from 'react';
import './Navbar.css'

import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Project Logo" className="nav-logo" />
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

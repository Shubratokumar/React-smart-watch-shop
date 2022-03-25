import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='header'>
            <div className='title'>
                <h3>Smart Watch Shop</h3>
            </div>
            <div className='nav-link'>
                <a href="./">Home</a>
                <a href="./">About us</a>
                <a href="./">Contact</a>
                <a href="./">Support</a>
            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

function Navbar(){
    return (
        <nav className = "app_navbar">
        <img src = 'hobbs-logo.jpg' className = 'app__navbar--logo' />
        <ul className = 'app__navbar--links'>
            <li className = 'p__opensans'><a href = '#home'>Home</a></li>
            <li className = 'p__opensans'><a href = '#about'>About us</a></li>
            <li className = 'p__opensans'><a href = '#menu'>Menu</a></li>
            <li className = 'p__opensans'><a href = '#contact'>Contact us</a></li>
        </ul>
        </nav>
    )
}

export default Navbar
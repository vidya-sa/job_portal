import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavLinks.css'

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
        
        
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
    </ul>
}

export default NavLinks
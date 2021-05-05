import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = props => {

    const [value, setValue] = useState('Login')
    const history = useHistory();

    const logOut = () => {
        setValue('Login')
        localStorage.setItem('isLogged', false);
        history.push('/login')
    }
    
    useEffect(() => {
        if (localStorage.getItem('isLogged') === 'true') {
            setValue('LogOut')
        }
    }, []);


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
            <div onClick={() => { logOut() }} style={{cursor:"pointer"}}> {value} </div>
        </li>
    </ul>
}

export default NavLinks
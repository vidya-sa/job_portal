import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop';
import logo from '..//../../images/logo.png'

const MainNavigation = props => {
  const[drawerIsOpen,setDrawerIsOpen] = useState(false)

const openDrawer = () => {
  setDrawerIsOpen(true)
};
  const closeDrawer = () =>{
    setDrawerIsOpen(false)
  }
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
    {drawerIsOpen && ( <SideDrawer>
      <nav className= "main-navigation__drawer-nav">
        <NavLinks/>
      </nav>

    </SideDrawer> )}
    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openDrawer}>
        <span />
        <span />
        <span />
      </button>
        <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        </Link>
   
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
     
    </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

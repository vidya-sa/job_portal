import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Footer from './shared/components/footer/Footer';
import Home from './pages/components/Home'
import About from './pages/components/About';
import Jobs from './pages/components/Jobs';
import Services from './pages/components/Services';
import Contact from './pages/components/Contact';
import Login from './pages/user/Login';
import Dashboard from './shared/Dashboard';






const App =  () => {
  return <Router>
  <MainNavigation/>
 
<main>
    <Switch>
            <Route path= "/" exact>
              <Home/>
            </Route>
            <Route path = "/about">
            <About/>
            </Route>
            <Route path = "/jobs">
            <Jobs/>
            </Route>
            <Route path = "/services">
            <Services/>
            </Route>
            <Route path = "/contact">
            <Contact/>
            </Route>
            <Route path = "/login" exact component={Login}  />
            
            <Route path = "/dashboard" exact component={Dashboard}/>
           
            <Redirect to="/" />
            </Switch>
            </main>
            <Footer />
        </Router>
}

export default App;

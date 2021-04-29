import React, { Component } from 'react'
import './Home.css';
import background from '../../images/background.jpg'



class Home extends Component {
    render() {
        return (
            <div className="container">
        <div className="backGround_title">
                <h1 className="title" >RECRUITING AGENCY</h1>
                <p className="title_caption">Feeling that it's time for change in your career path? Check out our job listing and find your new challenge today</p>
             </div>
             <img src={background} alt="Logo" className="background" />
           
            </div>
        )
    }
}

export default Home

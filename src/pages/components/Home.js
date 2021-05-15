import React, { Component } from 'react'
import './Home.css';
import background from '../../images/background.jpg'
import 'bootstrap/dist/css/bootstrap.css';



class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
        <div className="backGround_title">
                <h1 className="title" >Keymens Crew Consultants </h1>
                <p className="title_caption">We recruit across various industry sectors for multinational corporations as well as leading Indian businesses.</p>
             </div>
             <img src={background} alt="Logo" className="background" />
           <div className="overview-wrapper">
               <h3 className="title_overview">Overview</h3>
               <div className="over-alignment">
                  
                <p className="over_view">
                Keymens Crew Consultants is the pioneer of organized recruitment services in India. Over the years, 
               we have acted as preferred talent acquisition partners to multinationals and leading Indian businesses 
               to emerge as the leading talent solutions provider in India. This combined with our role as trusted 
                consultants for Indian professionals translates into our core capability.
                </p>
               
                </div>
           </div>
            </div>
        )
    }
}

export default Home

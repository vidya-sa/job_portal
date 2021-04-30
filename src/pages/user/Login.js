import React, { Component }from 'react';
import Dashboard from '../../shared/Dashboard';
import MainNavigation from '../../shared/components/Navigation/MainNavigation'
import './Login.css'

class Login extends Component  {
    constructor(props) {
        super(props)
      
        this.state = {
          loginData:{  
            uname:'',
            pass:''           
          }
      }

      this.formSubmit = this.formSubmit.bind(this);
          
      }
      

      LoginValue(field,e){

        var loginData = this.state.loginData;
        var input=e.target;
        loginData[field]=input.value;
        this.setState({
          loginData
        }, ()=> console.log("login data==>", loginData))
       
      }
      formSubmit = (event)=>{
        event.preventDefault();
        var name=this.state.loginData.uname;
        var pass=this.state.loginData.pass;
        
        if(name==='sai' && pass === 'ram'){
         localStorage.setItem('isLogged', true);
         window.location.href = 'Dashboard';
        this.forceUpdate()
    
        }
    
      }
      
    render(){
    return (
        <div>
            
        <div className="container">
         <div className="login_form">
             <form onSubmit={this.formSubmit} className="form_style">
                <label for="">Username :</label>
                <input type="text" name="uname"  onChange={e=>this.LoginValue('uname',e) }/>
                <label for="">Password :</label>
                <input type="text" name="pass" onChange={e=>this.LoginValue('pass',e) }/>
                <button type="submit" value="Login">Login</button>
             </form>

         </div>
        </div>
       
        </div>
    )
}
}

export default Login

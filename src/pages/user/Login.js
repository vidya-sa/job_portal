import React, { Component }from 'react';
import './Login.css'
import login from '../../images/login.gif'


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
        
        if(name==='trevista' && pass === 'Admin'){
         localStorage.setItem('isLogged', true);
         window.location.href = 'Dashboard';
        this.forceUpdate()
    
        }
    
      }
      
    render(){
    return (
      <div className="adjustment">
  <div class="row login-row">
    <div class="col-6 login-col">
      <img src={login} className="imagestyle" alt=""/>
    </div>
    <div class="col-6">
      <div className="contain">
         <div className="login_form">
             <form onSubmit={this.formSubmit} className="form_style">
                <label className="font-style" for="">Username:</label>
                <input type="text" name="uname" className="field" onChange={e=>this.LoginValue('uname',e) }/>
                <label  className="font-style" for="">Password:</label>
                <input type="text" name="pass"  className="field" onChange={e=>this.LoginValue('pass',e) }/>
                <button type="submit" value="Login" className="btn-style" style={{cursor :"pointer"}}>Login</button>
             </form>

         </div>
        </div></div>
  </div>
  </div>

       
    )
}
}

export default Login

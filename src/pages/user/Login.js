import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="container">
         <div className="login_form">
             <form onSubmit={""} className="form_style">
                <label for="">Username :</label>
                <input type="text" name="" value=""/>
                <label for="">Password :</label>
                <input type="text" name="" value=""/>
             </form>

         </div>
        </div>
    )
}

export default Login

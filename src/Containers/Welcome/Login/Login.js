import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';
import logo from '../../../assest/logo.png';


import './Login.css';


class Login extends Component {
    constructor(props) {
    super(props)
 const token =localStorage.getItem("token")
 
         let loggedIn = true
         if(token==null){
             loggedIn =false  
         }

        this.state = {
            
            fullname:'',
            number:'',
            emailReg: '',
            passwordReg: '',
            repassword:'',
            email: '',
            password: '',
            
            showLogin:true
        }

        this.onChangelog =this.onChangelog.bind(this)  
        this.onChangeReg =this.onChangeReg.bind(this)
        this.submitFormlog=this.submitFormlog.bind(this)
        this.submitFormReg=this.submitFormReg.bind(this)
      
    }

    onChangelog=(e)=>{ //read value from input
        const { name, value } = e.target;
        this.setState({ [name]: value });
                 }
    onChangeReg=(e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

submitFormlog=(e)=>{
    e.preventDefault()
    const { email, password,emailReg,passwordReg} = this.state

    if(email ===emailReg && password ===passwordReg){  //check the login data with register data
        localStorage.setItem("token" ," j")
        alert("You are Loged In");
        this.setState({
            loggedIn: true
            
        })
}  
else {

if(passwordReg===''){   //if password empty alert masg
    alert("You are not Registerd");
}
else 
{
    alert("Wrong Password"); // alert when password is wrong
}


}

}


submitFormReg=(e)=>{
    e.preventDefault()
    const { passwordReg,repassword, number} = this.state
    if(repassword!==passwordReg){  //check registration password are same?
       
       alert("Paaword Missmatch");
    }

    else if(number.length!==10) // check the number of degit
    {
       
        alert("Invalid Mobile number");
    }
    else {
        alert("Succesfully Registerd");
     this.setState({
        showLogin: true
     })
    }
}

    toggLogin=()=>{ // swap between login and register components
        const doesShow = this.state.showLogin;
        this.setState({showLogin:!doesShow});
        }

    render(){

       
        if(this.state.loggedIn){
            return <Redirect to ="/home"/>  
        }
       
        return(
            <div className="Login">
               
            <img src={logo} className="rounded mx-auto d-block" alt="img"/>
            {this.state.showLogin === true?
            <div>
            
            <h2>Login Form</h2>
        <p>{this.state.fullname}</p>
            
<form onSubmit ={this.submitFormlog}>

<p>
    <input type='email' 
    placeholder ='email' 
    name='email' 
    value={this.state.email} 
    onChange={this.onChangelog} 
    required/>
</p>
<p>
    <input type='password' 
    placeholder ='password' 
    name='password' 
    value={this.state.password} 
    onChange={this.onChangelog} 
    required/></p>
<p>
    <input type='submit' /></p>

    <p onClick={this.toggLogin}>Don't have an Accout?...Go to Login</p>
</form>


</div>

:<div>
<form onSubmit ={this.submitFormReg}>
<p>
    <input type='text' 
    placeholder ='fullname' 
    name='fullname' 
    value={this.state.fullname} 
    onChange={this.onChangeReg} 
    required/>
</p>

<p>
    <input type='number' 
    placeholder ='Mobile Number'
     name='number' 
     value={this.state.number} 
     onChange={this.onChangeReg} 
     required/>
    </p>

<p>
    <input type='email' 
    placeholder ='email' 
    name='emailReg' 
    value={this.state.emailReg} 
    onChange={this.onChangeReg} 
    required/>
</p>
<p>
    <input type='password' 
    placeholder ='password' 
    name='passwordReg' 
    value={this.state.passwordReg} 
    onChange={this.onChangeReg} 
    required/>
</p>

<p>
    <input type='password' 
    placeholder ='Re enter pass word' 
    name='repassword' 
    value={this.state.repassword} 
    onChange={this.onChangeReg} 
    required/>
</p>

<p><input type='submit' /></p>
<p><button onClick={this.toggLogin}>Back</button></p>


</form>
</div>
 
}
        </div>
        )
    }

}

export default Login;
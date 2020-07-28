import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';
import logo from '../../../assest/logo.png';
import * as actionTypes from '../../../store/actions';


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
    value={this.props.lemail} 
    onChange={this.onChangelog} 
    required/>
</p>
<p>
    <input type='password' 
    placeholder ='password' 
    name='password' 
    value={this.props.lpassword} 
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
    value={this.props.regfullname} 
    onChange={this.onChangeReg} 
    required/>
</p>

<p>
    <input type='number' 
    placeholder ='Mobile Number'
     name='number' 
     value={this.props.regnumber} 
     onChange={this.onChangeReg} 
     required/>
    </p>

<p>
    <input type='email' 
    placeholder ='email' 
    name='emailReg' 
    value={this.props.regemail} 
    onChange={this.onChangeReg} 
    required/>
</p>
<p>
    <input type='password' 
    placeholder ='password' 
    name='passwordReg' 
    value={this.props.regpassword} 
    onChange={this.onChangeReg} 
    required/>
</p>

<p>
    <input type='password' 
    placeholder ='Re enter pass word' 
    name='repassword' 
    value={this.props.regrepassword} 
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
const mapStateToProps = state =>{
    return{
        logmail: state.email,
        logpassword: state.password,
        refullname: state.fullname,
        reemail: state.emailReg,
        renumber: state.number,
        repassword:state.passwordReg,
        rerepassword:state.repassword,
        checkLog: state.showLogin

      
    };
}

const mapDispatchToProps =dispatch =>{
return {
    onEmailLog: (lemail) => dispatch({type: actionTypes.LOGIN_EMAIL, loginData:lemail}),
    onPasswordLog: (lpassword) => dispatch({type: actionTypes.LOGIN_PASSWORD, loginData:lpassword}),
    onFullnameReg: (regfullname) => dispatch({type: actionTypes.REG_FULLNAME, regData:regfullname}),
    onEmailReg: (regemail) => dispatch({type: actionTypes.REG_EMAIL, regData:regemail}),
    onNumberReg: (regnumber) => dispatch({type: actionTypes.REG_NUMBER, regData:regnumber}),
    onPasswordReg: (regpassword) => dispatch({type: actionTypes.REG_PASSWORD, regData:regpassword}),
    onRepasswordReg: (regrepassword) => dispatch({type: actionTypes.REG_REPASSWORD, regData:regrepassword})
    

}

}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
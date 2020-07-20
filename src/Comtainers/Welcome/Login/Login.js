import React from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import logo from '../../../assest/logo.png';
import Spinner from 'react-bootstrap/Spinner';
import Nav from '../../../Components/Nav/Nav';
import Home from '../../Home/Home';
import './Login.css';


class Login extends React.Component {




    


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
            email2: '',
            password2: '',
            repassword:'',
            email: '',
            password: '',
            
        }

        this.onChange =this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
        this.submitForm2=this.submitForm2.bind(this)
      

    

    
    }


    onChange=(e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

submitForm=(e)=>{
    e.preventDefault()
    const { email, password,email2,password2} = this.state

    if(email ===email2 && password ===password2){
        localStorage.setItem("token" ," j")
        this.setState({
            loggedIn: true

        })

    }

    console.log(this.state)
}
submitForm2=(e)=>{
    e.preventDefault()
    const { repassword,password2} = this.state

}



    render(){

        
// const {email, password} =this.state;

        if(this.state.loggedIn){
            return <Redirect to ="/home"/> 
            
        }

        



        
        return(

            <div className="Login">
               
               
            <img src={logo} class="rounded mx-auto d-block" alt="img"/>
            <h2>Login Form</h2>
        <p>{this.state.fullname}</p>
            
<form onSubmit ={this.submitForm}>

<p><input type='email' placeholder ='email' name='email' value={this.state.email} onChange={this.onChange} required/></p>
<p><input type='password' placeholder ='password' name='password' value={this.state.password} onChange={this.onChange} required/></p>
<p>
<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
    <input type='submit' /></p>



</form>

<Link to="/registor">Go to register</Link>



<form onSubmit ={this.submitForm2}>
<p><input type='text' placeholder ='fullname' name='fullname' value={this.state.fullname} onChange={this.onChange} required/></p>

<p><input type='number' placeholder ='Mobile Number' name='number' value={this.state.number} onChange={this.onChange} required/></p>

<p><input type='email' placeholder ='email' name='email2' value={this.state.email2} onChange={this.onChange} required/></p>
<p><input type='password' placeholder ='password' name='password2' value={this.state.password2} onChange={this.onChange} required/></p>

<p><input type='password' placeholder ='Re enter pass word' name='repassword' value={this.state.repassword} onChange={this.onChange} required/></p>

<p><input type='submit' /></p>



</form>






            </div>
        )
    }

}

export default Login;
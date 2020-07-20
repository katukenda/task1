import React, { Component } from 'react';
import Welcome from '../Welcome';
import Router, { Link } from 'react-router-dom';
import  './Registor.css';


class Registor extends Component {

    constructor(props) {
        super(props)
 
         this.state = {
             fullname:'',
             number:'',
             email2: '',
             password2: '',
             repassword:'',
            
             
         };

         this.onChange =this.onChange.bind(this)
         
         this.submitForm2=this.submitForm2.bind(this)
       
     
     }

     onChange(e){
         const { name, value } = e.target;
         this.setState({ [name]: value });
     }
    

 submitForm2(e){
     e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
 }
 
 
    

    render() {
       

        return (
            <div className="Registor">
                <h2>Register</h2>
                <form onSubmit ={this.submitForm2}>
<p><input type='text' placeholder ='fullname' name='fullname' value={this.state.fullname} onChange={this.onChange} required/></p>

<p><input type='number' placeholder ='Mobile Number' name='number' value={this.state.number} onChange={this.onChange} required/></p>

<p><input type='email' placeholder ='email' name='email2' value={this.state.email2} onChange={this.onChange} required/></p>
<p><input type='password' placeholder ='password' name='password2' value={this.state.password2} onChange={this.onChange} required/></p>

<p><input type='password' placeholder ='Re enter pass word' name='repassword' value={this.state.repassword} onChange={this.onChange} required/></p>

<p><input type='submit' /></p>



</form>
<Link to ="/login">Now Login</Link>
            </div>
        );
    }
}


export default Registor;
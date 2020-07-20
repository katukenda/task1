import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assest/logo.png';
import './Log.css';

const Log =(props)=>{

    return(

<div className="Log">
        <img src={logo} class="rounded mx-auto d-block" alt="img"/>
        <h2>Login Form</h2>
        

    <form onSubmit={props.handleSubmit}>
    
        
<p><input type='email' placeholder ='email' name='lemail' onChange={props.handleInputChange} required/></p>
<p><input type='password' placeholder ='password' name='lpassword' onChange={props.handleInputChange} required/></p>



<p><button>Login</button></p>



    </form>
<Link to ="/home">Home</Link>
        
  
</div>

    );
}

export default Log;
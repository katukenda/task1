import React, { Component } from 'react';
import {Link } from 'react-router-dom';





class Welcome extends Component{

    render(){


        return(
<div>
    <h1>welcome</h1>

    <Link to="/login">
<button>Go to Login
   
   </button></Link>

      
</div>
        );
    }
}

export default Welcome;
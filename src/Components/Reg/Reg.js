import React from 'react';

import './Reg.css';

const Reg = ( props ) => {
    return (
        <div className="Reg">

<form onSubmit ={this.submitForm2}>
<p><input type='text' placeholder ='fullname' name='fullname' value={this.state.fullname} onChange={this.onChange} required/></p>

<p><input type='number' placeholder ='Mobile Number' name='number' value={this.state.number} onChange={this.onChange} required/></p>

<p><input type='email' placeholder ='email' name='email2' value={this.state.email2} onChange={this.onChange} required/></p>
<p><input type='password' placeholder ='password' name='password2' value={this.state.password2} onChange={this.onChange} required/></p>

<p><input type='password' placeholder ='Re enter pass word' name='repassword' value={this.state.repassword} onChange={this.onChange} required/></p>

<p><input type='submit' /> </p>  
</form>   
        </div>
    );
}

export default Reg;
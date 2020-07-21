
import React,{useContext} from 'react';
import {Link} from 'react-router-dom';


const nav = (props)=> {

return(
    <div>
      <li>
</li>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div>
    
  </div>
  
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/home"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
        <Link to="/getdata"><a class="nav-link" href="#">Show Data</a></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Divices</a>
      </li>
      


    </ul>
    
  </div><Link to ="logout">
  <button class="btn btn-sm btn-outline-danger">Logout</button>
  </Link>
</nav>

</div>
);

}

export default nav;
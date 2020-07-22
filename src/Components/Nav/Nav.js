
import React from 'react';
import {Link} from 'react-router-dom';


const nav = (props)=> {

return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div>
    
  </div>
  
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/home">
          <p className="nav-link" href="#">
            Home 
            <span className="sr-only">(current)</span>
            </p></Link>
      </li>
      <li className="nav-item">
        <Link to="/getdata"><p className="nav-link" href="#">Show Data</p></Link>
      </li>
      <li className="nav-item">
        <p className="nav-link" href="#">Divices</p>
      </li>
      


    </ul>
    
  </div><Link to ="logout">
  <button  className="btn btn-sm btn-outline-danger">Logout</button>
  </Link>
</nav>

</div>
);

}

export default nav;
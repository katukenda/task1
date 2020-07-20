import React from 'react';
import './Post.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const post =(props) =>(

<div className="Post">

<div >
<h1>{props.id}</h1>
<h2>{props.name}</h2>
<p>{props.email}</p>





    
  <div>
  
</div> 

  </div>
  <DropdownButton id="dropdown-basic-button" title="View Full Details">
      <div >
  <Dropdown.Item ><h1>Id: {props.id}</h1></Dropdown.Item>
  <Dropdown.Item ><h2>Name:{props.name}</h2></Dropdown.Item>
<Dropdown.Item ><h3>Emai:{props.email}</h3></Dropdown.Item>
<Dropdown.Item ><p>Comment:{props.body}</p></Dropdown.Item> 
</div> 
</DropdownButton>
    </div>
)

export default post;
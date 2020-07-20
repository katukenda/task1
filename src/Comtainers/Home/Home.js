import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
 import Title from '../../Components/Nav/Title'; 
 
 class Home extends React.Component{

constructor (props){
    super(props)
    const token = localStorage.getItem("token")

    let loggedIn =true 
    if(token ==null){
        loggedIn =false
    }
    this.state={
        loggedIn
    }

}
    


    render(){
        if(this.state.loggedIn ===false){

            return <Redirect to ="/login"/>
        }
       


        return (
  <div>
{
        
      }
 
  <Nav/>
  </div>


        );

 


}

}


export default Home;
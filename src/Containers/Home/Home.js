import React,{Component} from 'react';
import { Redirect} from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
 
 
 class Home extends Component{

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

 <h1>
     Welcome To Home Page
 </h1>
  </div>


        );

 


}

}


export default Home;
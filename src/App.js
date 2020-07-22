import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Getdata from './Containers/Getdata/Getdata';
import Home from './Containers/Home/Home';
import Welcome from './Containers/Welcome/Welcome';
import Login from './Containers/Welcome/Login/Login';
import Logout from './Containers/Welcome/Logout/Logout';
import Showmore from './Containers/Showmore/Showmore';

class App extends Component{

  render(){


    return(

      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Login}/>
          <Route path ="/getdata" component={Getdata}/>
          <Route path ="/home" component={Home}/>
          <Route path ="/welcome" component={Welcome}/>
          <Route path = "/login" component={Login}/>
          <Route path = "/logout" component={Logout}/>
          <Route path ="/showmore" component={Showmore}/>

          
         

         
          </Switch>
        </div>

      </Router>
      
    );
    }
  }
  


export default App;

import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Getdata from './Comtainers/Getdata/Getdata';
import Home from './Comtainers/Home/Home';
import Welcome from './Comtainers/Welcome/Welcome';
import Registor from './Comtainers/Welcome/Registor/Registor';
import Login from './Comtainers/Welcome/Login/Login';
import Logout from './Comtainers/Welcome/Logout/Logout';
import Showmore from './Comtainers/Showmore/Showmore';

class App extends Component{

  render(){


    return(

      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={Welcome}/>
          <Route path ="/getdata" component={Getdata}/>
          <Route path ="/home" component={Home}/>
          
          <Route path ="/welcome" component={Welcome}/>
          <Route path = "/registor" component={Registor}/>
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

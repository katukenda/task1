import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Getdata from './containers/Getdata/Getdata';
import Home from './containers/Home/Home';
import Login from './containers/Welcome/Login/Login';
import Logout from './containers/Welcome/Logout/Logout';

class App extends Component {

//small hanges
  render() {


    return (



      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/getdata" component={Getdata} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />






          </Switch>
        </div>

      </Router>

    );
  }
}



export default App;



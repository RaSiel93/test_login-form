import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path='/'/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute path='/home' component={Home}/>
        </Switch>
      </Router>
    )
  }
}

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './component/App'
import Home from './component/Home'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/home" component={Home}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);

import React, {PureComponent} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import Home from './Home'
import Login from './Login'
import Todo from './Todo'
import Player from './Player'
import Clock from './Clock'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    const email = localStorage.getItem('email');
    this.state = { logged: !!email, redirect: '/some' };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ logged: true });
  }

  logout() {
    this.setState({ logged: false });
    localStorage.removeItem("email");
  }

  render() {
    return (
      <div>
        {this.state.logged &&
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/player">Player</Link>
              </li>
              <li>
                <Link to="/clock">Clock</Link>
              </li>
              <li>
                <button onClick={this.logout}>Logout</button>
              </li>
            </ul>
          </nav>
        }
        <div className="container">
          <Switch>
            {
              this.state.logged &&
                <Route exact path="/">
                  <Home />
                </Route>
            }
            {
              this.state.logged &&
                <Route path="/todo">
                  <Todo />
                </Route>
            }
            {
              this.state.logged &&
                <Route path="/player">
                  <Player />
                </Route>
            }
            {
              this.state.logged &&
                <Route path="/clock">
                  <Clock />
                </Route>
            }
            <Route path="/login">
              <Login logged={this.state.logged} login={this.login}/>
            </Route>
            <Route path="/">
              <Redirect to="/login"/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
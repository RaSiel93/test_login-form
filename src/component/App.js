import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
// import PrivateRoute from './PrivateRoute'
import './App.css';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     props.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// );

class PrivateRoute extends Component {
  componentDidMount() {
    // this.props
  }

  render() {
    if(this.props.isAuthenticated) {
      return (<Component {...this.props} />)
    } else {
      return (<Redirect to='/login' />)
    }

    // return (
    //   <Route render={(props) => (
    //     props.isAuthenticated === true
    //       ? <Component {...props} />
    //       : <Redirect to='/login' />
    //   )} />
    // )
  }
}

// extends fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100) // fake async
//   }
// }

class AuthButton extends Component {
  constructor(props) {
    super(props)
    // this.state = { isAuthenticated: props.isAuthenticated }
    // this.logout = props.logout;
  }

  render() {
    return (
      !!this.props.isAuthenticated
        ? <p>
            <button onClick={this.props.logout}>Выйсці</button>
          </p>
        : <p>Трэба аўтарызавацца</p>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    const email = localStorage.getItem('email');
    this.state = ({ email: email, isAuthenticated: !!email });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ email: localStorage.getItem('email'), isAuthenticated: true });
  }

  logout() {
    localStorage.removeItem('email');
    this.setState({ email: '', isAuthenticated: false });
  }

  // componentDidMount() {
  //   if getUser
  //     continue
  //   then
  //     redirect
  //   // console.log('componentDidMount');
  // }

  render() {
    return (
      <Router>
        <div>
          <AuthButton isAuthenticated={this.state.isAuthenticated} logout={this.logout}/>
          <ul>
            <li><Link to='/login'>Аўтарызацыя</Link></li>
            <li><Link to='/home'>Дамашняя</Link></li>
          </ul>

          <Route exact path='/login' component={() => <Login login={this.login}/>} />
          <PrivateRoute path='/home' component={Home} isAuthenticated={this.state.isAuthenticated}/>
        </div>
      </Router>
    )
  }
}

// {this.props.isAuthenticated &&
// }
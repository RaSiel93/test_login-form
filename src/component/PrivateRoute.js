import { BrowserRouter as Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    if(localStorage.getItem('email')) {
      <Component {...props} />
    } else {
      <Redirect to='/login' />
    }
  )} />
);

export default PrivateRoute;
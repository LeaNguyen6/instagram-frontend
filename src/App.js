import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect,
  Link
} from "react-router-dom";
import SignIn from './features/User/SignIn';
import Photo from './features/Photo'
import NotFound from './components/NotFound';
import Profile from './features/User/Profile';
import SignUp from './features/User/SignUp';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">About</Link>
            </li>
            <li>
              <Link to="/profile">Users</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <PrivateRoute exact path="/" > <Photo/> </PrivateRoute>
          <PrivateRoute path="/profile" > <Profile/> </PrivateRoute>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
let isAuthenticated=true;
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;

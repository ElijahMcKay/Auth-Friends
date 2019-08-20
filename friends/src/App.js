import React from 'react';
import './App.css';
import { Route, Link, Router } from 'react-router-dom'; 
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'; 
import Friends from './components/Friends'; 

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Your Friends</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import './App.css';
import { Route, Link, Router } from 'react-router-dom'; 
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'; 
import Friends from './components/Friends'; 

function App() {
  return (
      <div className="App">
        <Link to="/login">Login        </Link>
        <Link to="/friends">                Your Friends</Link>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/' component={Login} />
        <PrivateRoute path="/friends" component={Friends} />
      </div>
    
  );
}

export default App;

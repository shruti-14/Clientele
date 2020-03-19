import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

const App = () => (
  <div>
  <ul>
  <li><Link to="/landing">Main</Link></li>
  <li><Link to="/login">Login</Link></li>
  <li><Link to="/register">Register</Link></li>
  </ul>
</div>
);


export default App;

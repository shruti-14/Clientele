import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './login/login.component';
import Register from './register/register.component';
import Main from './main-page/main-page.component';

ReactDOM.render((<Router>
      <Route exact path = "/" component = {App}></Route>
         <Route path = "/login" component = {Login} />
         <Route path = "/main" component = {Main} />
         <Route path = "/register" component = {Register} />
      
</Router>), 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

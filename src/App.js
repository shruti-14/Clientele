import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import WhoAreYou from './components/Who-are-you/Who-are-you';
import ShopLayout from './hoc/ShopLayout/ShopLayout';
import Login from '../src/cointainer/Login/Login';

const App = () => (
  <Switch className="comp">
    <Route path="/" exact component={WhoAreYou} />
    <Route path="/shop" component={ShopLayout} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default App;

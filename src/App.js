import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import WhoAreYou from './components/Who-are-you/Who-are-you';
import ShopLayout from './hoc/ShopLayout/ShopLayout';


const App = () => (
  // <WhoAreYou className="comp"/>
  <Switch className="comp">
    <Route path="/" exact component={WhoAreYou} />
    <Route path="/shop" component={ShopLayout} />
  </Switch>
);

export default App;

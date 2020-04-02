import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Order from './pages/Order';
import Delivery from './pages/Delivery';

export default function Routes () {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/deliveries" component={Delivery} />
      </Switch>
    </BrowserRouter>
  );
}

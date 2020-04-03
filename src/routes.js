import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/Header';

import Home from './pages/Home';
import Order from './pages/Order';
import Delivery from './pages/Delivery';

export default function Routes () {
  return(
    <BrowserRouter>
      <Header />
      {/* <Container> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/orders">
            <Order />
          </Route>
          <Route exact path="/deliveries">
            <Delivery />
          </Route>
        </Switch>
      {/* </Container> */}
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Product from './pages/Product'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Landing} />
      <Route path="/get started" exact={true} component={Login} />
      <Route path="/products" exact={true} component={Product} />
     
    </Switch>
  </BrowserRouter>
  
    </div>
  );
}

export default App;

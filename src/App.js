import React from 'react';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Home from './Home';
import NewSupplier from './suppliers/NewSupplier';
import InfoSupplier from './suppliers/InfoSupplier';
import Missing from './Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/suppliers/create">
          <NewSupplier />
        </Route>
        <Route path="/suppliers/:id">
          <InfoSupplier />
        </Route>
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

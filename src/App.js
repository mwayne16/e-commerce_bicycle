import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/Home';
import Shop from './layout/Shop';

import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop" component={Shop}>
            <Shop />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

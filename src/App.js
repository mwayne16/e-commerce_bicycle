import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/pages/Header';
import Footer from './layout/pages/Footer';
import Home from './layout/pages/Home';
import { Shop } from './layout/pages/Shop';
import { CartProvider } from './components/context/cartContext';
import './layout/styles/App.css';
import { ModalProvider } from './components/context/modalContext';
import { ProductProvider } from './components/context/productContext';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <ProductProvider>
          <CartProvider>
            <ModalProvider>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route path="/productpage">
                  <ProductPage />
                </Route>
              </Switch>
              <Footer />
            </ModalProvider>
          </CartProvider>
        </ProductProvider>
      </div>
    </Router>
  );
}

export default App;

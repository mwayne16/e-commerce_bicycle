import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/pages/Header';
import Footer from './layout/pages/Footer';
import Home from './layout/pages/Home';
import Shop from './layout/pages/Shop';
import Checkout from './layout/pages/Checkout';
import FAQ from './layout/pages/FAQ';
import Contact from './layout/pages/Contact';
import { CartProvider } from './components/context/cartContext';
import './layout/styles/App.css';
import { ModalProvider } from './components/context/modalContext';
import { ProductProvider } from './components/context/productContext';
import ProductItemPage from './components/ProductItemPage';
import ScrollToTop from './components/ScrollToTop';
import useDataFetching from './components/custom_hooks/useDataFetching';
import LogIn from './layout/pages/LogIn';

const Scroll = withRouter(ScrollToTop);
function App() {
  return (
    <Router>
      <div className="App">
        <ProductProvider>
          <CartProvider>
            <ModalProvider>
              <Header />
              <Scroll>
                <Switch>
                  <Route exact path="/e-commerce-bicycle" component={Home} />
                  <Route path="/Shop" component={Shop} />
                  <Route path="/Products" component={ProductItemPage} />
                  <Route path="/Checkout" component={Checkout} />
                  <Route path="/FAQ" component={FAQ} />
                  <Route path="/Contact" component={Contact} />
                  <Route path="/Login" component={LogIn} />
                </Switch>
              </Scroll>
            </ModalProvider>
          </CartProvider>
        </ProductProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

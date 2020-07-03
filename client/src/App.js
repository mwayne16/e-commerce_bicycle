import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './layout/pages/public/Home';
import Shop from './layout/pages/public/Shop';
import Checkout from './layout/pages/public/Checkout';
import FAQ from './layout/pages/public/FAQ';
import Contact from './layout/pages/public/Contact';
import { CartProvider } from './components/context/cartContext';
import { ModalProvider } from './components/context/modalContext';
import { ProductProvider } from './components/context/productContext';
import { UserProvider } from './components/context/userContext';
import ProductItemPage from './components/ProductItemPage';
import ScrollToTop from './components/ScrollToTop';
import { UserAuth } from './layout/pages/public/UserAuth';
import './layout/styles/App.css';
import Layout from './components/app_layout/publicLayout';
const Scroll = withRouter(ScrollToTop);

function App() {
  return (
    <Router>
      <>
        <div className='login'></div>
        <div className='App'>
          <ProductProvider>
            <CartProvider>
              <UserProvider>
                <ModalProvider>
                  <Scroll>
                    <Switch>
                      <Layout>
                        <Route exact path='/' component={Home} />
                        <Route path='/Shop' component={Shop} />
                        <Route path='/Products' component={ProductItemPage} />
                        <Route path='/Checkout' component={Checkout} />
                        <Route path='/FAQ' component={FAQ} />
                        <Route path='/Contact' component={Contact} />
                        <Route path='/Login' component={UserAuth} />
                      </Layout>
                    </Switch>
                  </Scroll>
                </ModalProvider>
              </UserProvider>
            </CartProvider>
          </ProductProvider>
        </div>
      </>
    </Router>
  );
}

export default App;

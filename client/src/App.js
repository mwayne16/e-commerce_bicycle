import React from 'react';
import Template from './template';
import './layout/styles/App.css';
import { UserProvider } from './components/context/userContext';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Template />
      </UserProvider>
    </div>
  );
}

export default App;

/*
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
</Router> */

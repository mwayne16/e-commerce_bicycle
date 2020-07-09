import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicLayout from './public';
import PublicRoutes from './routes/publicRoutes';
import { ProductProvider } from '../components/context/productContext';
import { CartProvider } from '../components/context/cartContext';
import { UserProvider, UserContext } from '../components/context/userContext';
import { ModalProvider } from '../components/context/modalContext';

export default function Template() {
  const { user, setUser } = React.useContext(UserContext);
  return (
    <Router>
      <Switch>
        <ProductProvider>
          <CartProvider>
            <ModalProvider>
              {Object.entries(PublicRoutes).map((route, key) => {
                const { component, path, exact } = route[1];
                return (
                  <Route
                    exact={exact}
                    path={path}
                    key={key}
                    render={history => (
                      <PublicLayout
                        routerProps={history}
                        user={user}
                        setUser={setUser}
                        component={component}
                      />
                    )}
                  />
                );
              })}
            </ModalProvider>
          </CartProvider>
        </ProductProvider>
      </Switch>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicLayout from './public';
import PublicRoutes from './routes/publicRoutes';
import { ProductProvider } from '../components/context/productContext';
import { CartProvider } from '../components/context/cartContext';
import { UserProvider, UserContext } from '../components/context/userContext';
import { ModalProvider } from '../components/context/modalContext';
import NotFound from '../layout/pages/public/404';
export default function Template() {
  const { user, setUser } = React.useContext(UserContext);
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <ModalProvider>
            <Switch>
              {Object.entries(PublicRoutes).map((route, key) => {
                const { component, path, exact } = route[1];
                return (
                  <Route
                    exact
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
              <Route component={NotFound} />
            </Switch>
          </ModalProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

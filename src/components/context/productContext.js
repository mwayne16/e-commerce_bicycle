import React, { useReducer } from 'react';
import { reducer, initialState } from '../../reducers/productReducer';

const ProductContext = React.createContext(null);
const ProductProvider = (props) => {
  const [product, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ product, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };

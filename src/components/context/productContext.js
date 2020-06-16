import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../../reducers/productReducer';
import useDataFetching from '../custom_hooks/useDataFetching';
import ReactLoading from 'react-loading';
// Try setting the useDataFetching hook here
const ProductContext = React.createContext(null);
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
const ProductProvider = (props) => {
  const { results, loading } = useDataFetching('/api/products');
  useEffect(() => {
    const fetchResults = () => {
      results.map((product) => {
        product.price = formatter.format(product.price);
        return initialState.items.push(product);
      });
    };
    fetchResults();
  }, [results]);
  const [products, dispatch] = useReducer(reducer, initialState);
  return loading ? (
    <div
      style={{
        position: 'fixed',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
        width: '100px',
        height: '100px',
      }}
    >
      <ReactLoading type={'bubbles'} color={'#294057'} />
    </div>
  ) : (
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };

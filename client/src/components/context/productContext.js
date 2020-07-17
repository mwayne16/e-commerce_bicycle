import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from '../../reducers/productReducer';
import useDataFetching from '../custom_hooks/useDataFetching';
import ReactLoading from 'react-loading';
const ProductContext = React.createContext(null);
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
const ProductProvider = props => {
  const { results, loading } = useDataFetching('/api/products');
  useEffect(() => {
    if (loading) return;
    const fetchResults = () => {
      results.map(product => {
        product.price = formatter.format(product.price);
        initialState.items.push(product);
        initialState.items.sort((a, b) => a.key - b.key);
      });
    };
    fetchResults();
  }, [loading]);
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
    <ProductContext.Provider value={{ products, dispatch, loading }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };

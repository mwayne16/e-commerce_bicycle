import React from 'react';
import useLocalStorage from '../custom_hooks/useLocalStorage';
import removePriceFormat from './../../utilities/removePriceFormat';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
const CartItemsContext = React.createContext();
const CartProvider = (props) => {
  const [products, setProduct] = useLocalStorage('selected-products', []);
  const subTotal = formatter.format(
    products.length >= 1
      ? products
          .map((product) => removePriceFormat(product.price) * product.quanity)
          .reduce((acc, curr) => acc + curr)
      : 0
  );

  return (
    <CartItemsContext.Provider value={{ products, setProduct, subTotal }}>
      {props.children}
    </CartItemsContext.Provider>
  );
};

export { CartItemsContext, CartProvider };

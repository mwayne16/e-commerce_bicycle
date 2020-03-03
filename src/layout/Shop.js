import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shop.css';

function Products() {
  const [products, updateProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/master/src/application.json'
      )
      .then(res => {
        updateProducts(...res.data);
      });
  }, []);
  return (
    <ul>
      <li>{products.name}</li>
    </ul>
  );
}

function Shop() {
  return (
    <section className="product-collection">
      <h1 className="collection-header">Our Collection</h1>
      <Products />
    </section>
  );
}
export default Shop;

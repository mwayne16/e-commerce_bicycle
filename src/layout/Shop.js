import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Slider, ColorSelector, SortProductsCard } from '../components/Filters';
import { initialState, reducer } from '../reducers/productItems';
import useDataFetching from '../components/useDataFetching';
import './Shop.css';
import '../layout/ProductFilter.css';
import '../layout/SortProducts.css';
const ProductContext = React.createContext(null);

// Try and look for a way to filter the array and then compare that to the untouched products arr

function FilterCard() {
  const { ...props } = useContext(ProductContext);
  console.log('ran');
  return (
    <div className="product-filter">
      <h2>Filter By</h2>
      <hr />
      <div className="price-filter">
        <p>Price</p>
        <span
          id="price"
          className="price-toggle fas fa-minus"
          data-state="expand"
        ></span>
        <div className="price-slider">
          <Slider {...props} />
        </div>
      </div>
      <hr />
      <div className="color-filter">
        <p>Color</p>
        <span
          id="color"
          className="color-toggle fas fa-plus"
          data-state="expand"
        ></span>
        <div className="colorselector">
          <ul>
            <ColorSelector {...props} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function Products(props) {
  // <--- Data Prop
  return (
    <div className="product-items-container">
      <SortProductsCard />
      <ul>
        {props.items.map(({ name, key, price }) => (
          <li key={key}>
            <div className="product-item">
              <img
                src={require(`../assets/images/product${key}.jpeg`)}
                alt="product1"
              />
              <span className="item-details">
                <p data-item-title={name}>{name}</p>
                <p data-item-price={price}>{'$' + price}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
function ProductGalleryContainer() {
  const [product, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState(product.items);
  useEffect(() => {
    setFilter(product.filteredItems);
  }, [product]);
  return (
    <section className="product-gallery">
      <ProductContext.Provider value={{ product, dispatch }}>
        <FilterCard />
        <Products items={filter} />
      </ProductContext.Provider>
    </section>
  );
}
function Shop(props) {
  //------------------------FetchDataHook------------------//
  // const { results, loading } = useDataFetching(
  //   'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/master/src/application.json'
  // );

  return (
    <section className="product-collection">
      <h1 className="collection-header">Our Collection</h1>
      <ProductGalleryContainer />
    </section>
  );
}
export { Shop, ProductContext };

// <li>
// <div className="product-item">
//   <img
//     src={require('../assets/images/product1.jpeg')}
//     alt="product1"
//   />
//   <span className="item-details">
//     <p data-item-title={props.name}>I'm a Product</p>
//     <p data-item-price={props.price}>$180</p>
//   </span>
// </div>
// </li>
// <li>
// <div className="product-item">
//   <img
//     src={require('../assets/images/product1.jpeg')}
//     alt="product1"
//   />
//   <span className="item-details">
//     <p data-item-title={props.name}>I'm a Product</p>
//     <p data-item-price={props.price}>$180</p>
//   </span>
// </div>
// </li>
// <li>
// <div className="product-item">
//   <img
//     src={require('../assets/images/product1.jpeg')}
//     alt="product1"
//   />
//   <span className="item-details">
//     <p data-item-title={props.name}>I'm a Product</p>
//     <p data-item-price={props.price}>$180</p>
//   </span>
// </div>
// </li>
// <li>
// <div className="product-item">
//   <img
//     src={require('../assets/images/product1.jpeg')}
//     alt="product1"
//   />
//   <span className="item-details">
//     <p data-item-title={props.name}>I'm a Product</p>
//     <p data-item-price={props.price}>$180</p>
//   </span>
// </div>
// </li>
// <li>
// <div className="product-item">
//   <img
//     src={require('../assets/images/product1.jpeg')}
//     alt="product1"
//   />
//   <span className="item-details">
//     <p data-item-title={props.name}>I'm a Product</p>
//     <p data-item-price={props.price}>$180</p>
//   </span>
// </div>
// </li>
// <li>
// <div className="product-item">
//   <img
//     src={require('../assets/images/product1.jpeg')}
//     alt="product1"
//   />
//   <span className="item-details">
//     <p data-item-title={props.name}>I'm a Product</p>
//     <p data-item-price={props.price}>$180</p>
//   </span>
// </div>
// </li>
// <li>
// <div className="product-item">
//   <img
//     src={require('../assets/images/product1.jpeg')}
//     alt="product1"
//   />
//   <span className="item-details">
//     <p data-item-title={props.name}>I'm a Product</p>
//     <p data-item-price={props.price}>$180</p>
//   </span>
// </div>
// </li>

// {props.data.map(({ key, name, price }) => (
//   <li key={key}>
//     <div className="product-item">
//       <img
//         src={require(`../assets/images/product${key}.jpeg`)}
//         alt="product1"
//       />
//       <span className="item-details">
//         <p data-item-title={name}>{name}</p>
//         <p data-item-price={price}>{'$' + price}</p>
//       </span>
//     </div>
//   </li>
// ))}

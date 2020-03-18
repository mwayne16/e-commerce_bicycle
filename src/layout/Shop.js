import React, { useContext, useReducer } from 'react';
import { Slider, ColorSelector, SortProductsCard } from '../components/Filters';
import Data from '../components/data/ProductData';
import useDataFetching from '../components/useDataFetching';
import './Shop.css';
import '../layout/ProductFilter.css';
import '../layout/SortProducts.css';

console.log('priceSlider');
const ProductContext = React.createContext(null);
const initialState = { data: [...Data] };
const reducer = (state, action) => {
  switch (action.type) {
    case 'filterData':
      return {
        data: action.data
      };
    case 'sortData':
      return {
        data: action.data
      };
    default:
      return {
        data: state.data
      };
  }
};
function FilterCard(props) {
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
          <Slider />
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
            <ColorSelector />
          </ul>
        </div>
      </div>
    </div>
  );
}

function Products() {
  // <--- Data Prop
  const { products } = useContext(ProductContext);
  return (
    <div className="product-items-container">
      <SortProductsCard />
      <ul>
        {products.data.map(({ name, key, price }) => (
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
  const [products, dispatch] = useReducer(reducer, initialState);
  return (
    <section className="product-gallery">
      <ProductContext.Provider value={{ products, dispatch }}>
        <FilterCard></FilterCard>
        <Products />
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

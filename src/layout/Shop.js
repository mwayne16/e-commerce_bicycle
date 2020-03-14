import React, { useState } from 'react';
import { Slider, ColorSelector } from '../components/Filters';
import Data from '../components/data/ProductData';
import useDataFetching from '../components/useDataFetching';
import './Shop.css';
import '../layout/ProductFilter.css';
import '../layout/SortProducts.css';

function SortProductsCard() {
  const sortMethod = e => {};
  return (
    <div className="sort-products">
      <label htmlFor="product-sorter">Sort by</label>
      <select onChange={sortMethod} id="sort">
        <option value="newest">Newest</option>
        <option value="pricelth">Price (low to high)</option>
        <option value="pricehtl">Price (high to low)</option>
        <option value="nameaz">Name A-Z</option>
        <option value="nameza">Name Z-A</option>
      </select>
    </div>
  );
}

function FilterCard(props) {
  const handleClick = props.handleClick;
  return (
    <div className="product-filter">
      <button onClick={() => handleClick('Testing')}>Passing state</button>
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
          <Slider>
            <>{props.children}</>
          </Slider>
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
            <ColorSelector data={props.data} />
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
        {props.data.map(({ name, key, price }) => (
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
function Shop(props) {
  //------------------------FetchDataHook------------------//
  const { results, loading } = useDataFetching(
    'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/master/src/application.json'
  );
  const [range, changedRange] = useState(180);
  const logVariable = arg => console.log(arg);
  const handleClick = text => alert(text);

  try {
    const data = [...results];
    const sorted = data.sort((a, b) => a.price - b.price);
    let min = sorted[0].price;
    let max = sorted[sorted.length - 1].price;
    const filteredByPrice = data.filter(product => product.price >= range);
    return (
      <section className="product-collection">
        <h1 className="collection-header">Our Collection</h1>
        <section className="product-gallery">
          <FilterCard
            variable={logVariable}
            handleClick={handleClick}
            data={data}
          >
            <input
              onChange={e => changedRange(e.target.value)}
              type="range"
              min={min}
              max={max}
              step="5"
              defaultValue={range}
            />
            <p data-current-price>{'$' + range}</p>
            <p data-max-range>
              {max}
              {}
            </p>
          </FilterCard>
          <Products range={range} data={filteredByPrice} />
        </section>
      </section>
    );
  } catch (error) {
    return loading;
  }
}
export default Shop;

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

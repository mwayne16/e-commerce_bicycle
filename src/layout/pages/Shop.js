import React, { useState, useEffect, useContext } from 'react';
import {
  Slider,
  ColorSelector,
  SortProductsCard,
} from '../../components/Filters';
import { Transition } from 'react-transition-group';
import ProductModal from '../../components/modals/ProductModal';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../components/context/productContext';
import '../styles/Shop.css';
import '../styles/ProductFilter.css';

function FilterCard() {
  const toggledStyles = {
    entered: {
      zIndex: 1,
    },
    exiting: {
      maxHeight: '100px',
    },
    exited: {
      transform: 'translateY(-100%)',
      maxHeight: 0,
      overflow: 'hidden',
      zIndex: -1,
    },
  };
  const { ...props } = useContext(ProductContext);
  const [toggled, updateToggle] = useState({ price: true, color: false });
  const [highlightedColor, updateColor] = useState('');

  const targetedColor = (color) => {
    return updateColor(`: ${color}`);
  };

  //Add clear filter functionality
  return (
    <div className="product-filter">
      <SortProductsCard {...props} />
      <div className="filter-options">
        <h2>Filter By</h2>
        <div data-is-toggled={toggled.price} className="filter-type">
          <div className="filter-type-header">
            <p>Price</p>
            <span
              onClick={() =>
                updateToggle({ ...toggled, price: !toggled.price })
              }
              id={'price-toggle'}
              className={`filter-toggle-action ${
                toggled.price ? 'fas fa-minus' : 'fas fa-plus'
              } `}
            ></span>
          </div>
          <Transition timeout={0} in={toggled.price}>
            {(state) => (
              <div
                style={{
                  ...toggledStyles[state],
                  transition: '.2s ease-in-out',
                }}
                className="filter-content"
                id="price-slider"
                data-is-toggled={toggled.price}
              >
                <Slider {...props} />
              </div>
            )}
          </Transition>
        </div>

        <div data-is-toggled={toggled.color} className="filter-type">
          <div className="filter-type-header">
            <p>
              {highlightedColor !== ': undefined'
                ? 'Color' + highlightedColor
                : 'Color'}
            </p>
            <span
              onClick={() =>
                updateToggle({ ...toggled, color: !toggled.color })
              }
              id="color-toggle"
              className={`filter-toggle-action ${
                toggled.color ? 'fas fa-minus' : 'fas fa-plus'
              } `}
            ></span>
          </div>
          <Transition timeout={0} in={toggled.color}>
            {(state) => (
              <div
                style={{
                  ...toggledStyles[state],
                  transition: '.2s ease-in-out',
                }}
                className="filter-content"
                id="color-filter"
                data-is-toggled={toggled.color}
              >
                <ul className="color-filter-list">
                  <ColorSelector displayColor={targetedColor} {...props} />
                </ul>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
}

function Products(props) {
  const [previewToggled, updateToggle] = useState({
    toggled: false,
    key: null,
  });

  const passProduct = (data) =>
    updateToggle({ toggled: !previewToggled.toggled, key: data || null });

  const closeModal = (state) =>
    state ? updateToggle({ toggled: false, key: ' ' }) : null;
  return (
    <div className="product-items-container">
      <ul>
        {props.items.map(({ name, key, price, src }) => (
          <li key={key}>
            <div className="product-item">
              <div className="product-img">
                <Link to="/productpage">
                  <img src={src} alt={`${name} bike`} />
                </Link>
                <span
                  onClick={passProduct.bind(this, key)}
                  className="product-quickview"
                >
                  <p>Quick View</p>
                </span>
              </div>

              <span className="item-details">
                <Link to="/productpage">
                  <p
                    onClick={() => console.log(price.toString())}
                    data-item-title={name}
                  >
                    {name}
                  </p>
                  <p data-item-price={price}>{'$' + price}</p>
                </Link>
              </span>
            </div>
          </li>
        ))}
      </ul>
      {previewToggled.toggled && (
        <ProductModal
          close={closeModal}
          toggled={previewToggled.toggled}
          selectedProduct={previewToggled.key}
          {...props}
        />
      )}
    </div>
  );
}

function ProductGalleryContainer(props) {
  const { product } = React.useContext(ProductContext);
  const [filter, setFilter] = useState(product.items);
  useEffect(() => {
    setFilter(
      product.filteredItems.length !== 0 ? product.filteredItems : product.items
    );
  }, [product]);
  return (
    <section className="product-gallery">
      <FilterCard {...props} />
      <Products items={filter} />
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

import React, { useState, useEffect, useRef } from 'react';
import '../layout/styles/ProductPage.css';
import { Link } from 'react-router-dom';
import { CartItemsContext } from './context/cartContext';
import { CartModalContext } from './context/modalContext';
import { ProductContext } from './context/productContext';
import ProductQuanityBox from './ProductQuanity';
export default function ProductItemPage(props) {
  const [currentProduct, setProduct] = useState(props.location.state);
  const { products } = React.useContext(ProductContext);

  const handleNavigation = productKey =>
    setProduct(products.items.find(product => product.key === productKey));

  useEffect(() => {
    setProduct(props.location.state);
  }, [props.location.state]);

  return (
    <section className='product-page'>
      <ProductItemHeader
        {...props}
        products={products}
        setProduct={handleNavigation}
        item={currentProduct}
      />
      <ProductItemMain {...props} item={currentProduct}>
        <ProductItemDescription />
      </ProductItemMain>
    </section>
  );
}
function ProductItemDescription() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div data-readmore={toggle} className='product-description'>
        <p>
          I'm a product description. This is a great place to "sell" your
          product and grab buyers' attention. Describe your product clearly and
          concisely. Use unique keywords. Write your own description instead of
          using manufacturers' copy.
        </p>
      </div>
      <button
        style={{
          width: 'auto',
          borderBottom: '1px solid #000',
          fontSize: '1em',
          textAlign: 'left',
          marginBottom: '2em',
          paddingBottom: '.1em',

          color: '#424242',
        }}
        type='button'
        onClick={() => setToggle(!toggle)}
      >
        Read more
      </button>
    </>
  );
}
function ProductItemHeader(props) {
  const findIndex = key =>
    props.products.items.indexOf(
      props.products.items.find(product => product.key === key)
    );

  const sendKeyToParent = key =>
    findIndex(key) !== -1 ? props.setProduct(key) : null;

  return (
    <header className='product-heading'>
      <nav className='product-nav'>
        <div className='product-breadcrumbs'>
          <Link to='/'>Home /</Link>
          <Link to='shop'>Shop /</Link>
          <p>{props.item.name}</p>
        </div>
        <div className='navigation-button-container'>
          <ul className='navigation-buttons'>
            <li
              style={{
                opacity: findIndex(props.item.key) >= 1 ? 1 : 0.5,
              }}
              onClick={sendKeyToParent.bind(this, props.item.key - 1)}
            >
              <span className='fas fa-chevron-left'></span>Prev
            </li>
            {' | '}
            <li
              style={{
                opacity:
                  findIndex(props.item.key) < props.products.items.length - 1
                    ? 1
                    : 0.5,
              }}
              onClick={sendKeyToParent.bind(this, props.item.key + 1)}
            >
              Next <span className='fas fa-chevron-right'></span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
function ProductItemMain(props) {
  // Try something like useRef to set the quanity value then an updater function that grabs the value from it's parent to set the current

  let [quanity, setQuanity] = useState(1);
  const { products, setProduct } = React.useContext(CartItemsContext);
  const [toggled, setToggle] = React.useContext(CartModalContext);

  const addItemToCart = item => {
    setProduct(item);
    setToggle(!toggled);
    if (props.close) {
      props.close();
    }
  };

  const { name, sku, price, color, src, key } = props.item;

  const updateQuanityFromChild = value => setQuanity(value);

  return (
    <main className='product-container'>
      <div className='product-item'>
        <div
          style={{
            background: `url(${src}) no-repeat center / 85%`,
          }}
          className='product-item-img'
        ></div>
        <div className='product-item-overview'>
          <h1 className='product-item-title'>{name}</h1>
          <p className='product-item-sku'>SKU: {sku}</p>
          <p className='product-item-price'>{price}</p>
          {props.children}
          <p className='product-item-colorText'>Color: {color}</p>
          <p className='product-item-color' style={{ background: color }}></p>
          <ProductQuanityBox
            returnedValue={updateQuanityFromChild}
            quanity={quanity}
          />
          <button
            onClick={addItemToCart.bind(this, [
              ...products,
              { name, sku, price, color, src, key, quanity },
            ])}
            className='product-item-addToCart defaultButton alt-button'
            type='button'
            value={sku}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export { ProductItemHeader, ProductItemMain };

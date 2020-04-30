import React from 'react';
import '../layout/styles/ProductPage.css';
import { Link } from 'react-router-dom';
function ProductPage() {
  // Turn Product Modal into a component that accepts props to avoid duplicate code
  return (
    <section className="product-page">
      <header className="product-heading">
        <nav className="product-nav">
          <div className="product-breadcrumbs">
            <Link to="/">Home /</Link>
            <Link to="shop">Shop /</Link>
            <p>Product</p>
          </div>
          <div className="navigation-button-container">
            <ul className="navigation-buttons">
              <li>
                <span className="fas fa-chevron-left"></span>Prev
              </li>
              {' | '}
              <li>
                Next <span className="fas fa-chevron-right"></span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="product-container">
        <div className="product-modal">
          <div
            style={{
              background: `url('./assets/images/product2.jpg') no-repeat center / 85%`,
            }}
            className="product-modal-img"
          ></div>
          <div className="product-modal-overview">
            <h1 className="product-modal-title">Title</h1>
            <p className="product-modal-sku">SKU: SKU</p>
            <p className="product-modal-price">$PRICE</p>
            <div className="product-description">
              <p>
                I'm a product description. This is a great place to "sell" your
                product and grab buyers' attention. Describe your product
                clearly and concisely. Use unique keywords. Write your own
                description instead of using manufacturers' copy.
              </p>
            </div>
            <p className="product-modal-colorText">Color: COLOR</p>
            <p
              className="product-modal-color"
              style={{ background: '#ccc' }}
            ></p>
            <div className="product-modal-quanity">
              <label className="quanity-label" htmlFor="quanity-input">
                Quanity
              </label>
              <div className="quanity-input">
                <input
                  readOnly
                  type="number"
                  id="quanity-input"
                  name="quanity-input"
                  min="1"
                  max="99"
                  value={1}
                />
                <div className="quanity-controls">
                  <span className="fas fa-chevron-up" id="quanity-up"></span>
                  <span
                    className="fas fa-chevron-down"
                    id="quanity-down"
                  ></span>
                </div>
              </div>
            </div>
            <button
              className="product-modal-addToCart defaultButton alt-button"
              type="button"
              value={1}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
export default ProductPage;

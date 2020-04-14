import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useLocalStorage from './custom_hooks/useLocalStorage';
import '../layout/ProductModal.css';

const modal = document.querySelector('#root-product-modal');
// Instead of sending the count to the cart modal, send the product to the cart modal and let that component handle it's own state count
function ProductModal(props) {
  const [product, addProduct] = useLocalStorage('selected-products', []); // <-- value keeps resetting to zero. May remove value and just operate from the key
  let [quanity, setQuanity] = useState(1);

  const { name, sku, price, color, src } = props.items.find(
    (product) => product.key === props.selectedProduct
  );

  modal.dataset.toggled = props.toggled;
  return ReactDOM.createPortal(
    <div className="product-modal">
      <button
        className="product-modal-close fas fa-times"
        onClick={() => {
          modal.dataset.toggled = false;
          props.close(true);
        }}
      ></button>
      <div
        style={{ background: `url(${src}) no-repeat center / 80%` }}
        className="product-modal-img"
      ></div>
      <div className="product-modal-overview">
        <h1 className="product-modal-title">{name}</h1>
        <p className="product-modal-sku">SKU: {sku}</p>
        <p className="product-modal-price">${price}.00</p>
        <span className="product-modal-details">View Full Details</span>
        <p className="product-modal-colorText">Color: {color}</p>
        <p className="product-modal-color" style={{ background: color }}></p>
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
              value={quanity}
            />
            <div className="quanity-controls">
              <span
                onClick={() => setQuanity(++quanity)}
                className="fas fa-chevron-up"
                id="quanity-up"
              ></span>
              <span
                data-action-block={quanity <= 1 ? true : false}
                onClick={() => (quanity <= 1 ? quanity : setQuanity(--quanity))}
                className="fas fa-chevron-down"
                id="quanity-down"
              ></span>
            </div>
          </div>
        </div>
        <button
          onClick={() => addProduct(name)}
          className="product-modal-addToCart defaultButton alt-button"
          type="button"
          value={sku}
        >
          Add To Cart
        </button>
      </div>
    </div>,
    modal
  );
}
export default ProductModal;

import React, { useState } from 'react';
import Modal from './Modal';
import '../../layout/styles/ProductModal.css';
import { CartItemsContext } from '../context/cartContext';
import { CartModalContext } from '../context/modalContext';

const location = document.querySelector('#root-product-modal');
// Instead of sending the count to the cart modal, send the product to the cart modal and let that component handle it's own state count
function ProductModal(props) {
  const { products, setProduct } = React.useContext(CartItemsContext);
  const [toggled, setToggle] = React.useContext(CartModalContext); // <-- value keeps resetting to zero. May remove value and just operate from the key
  let [quanity, setQuanity] = useState(1);

  const { name, sku, price, color, src, key } = props.items.find(
    (product) => product.key === props.selectedProduct
  );
  const closeModal = () => {
    location.dataset.toggled = false;
    props.close(true);
  };
  const addItemToCart = (item) => {
    setProduct(item);
    setToggle(!toggled);
    closeModal();
  };
  return (
    <Modal toggled={props.toggled} location={location}>
      <div className="product-modal">
        <button
          className="product-modal-close fas fa-times"
          onClick={closeModal}
        ></button>
        <div
          style={{ background: `url(${src}) no-repeat center / 80%` }}
          className="product-modal-img"
        ></div>
        <div className="product-modal-overview">
          <h1 className="product-modal-title">{name}</h1>
          <p className="product-modal-sku">SKU: {sku}</p>
          <p className="product-modal-price">${price}</p>
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
                  onClick={() =>
                    quanity <= 1 ? quanity : setQuanity(--quanity)
                  }
                  className="fas fa-chevron-down"
                  id="quanity-down"
                ></span>
              </div>
            </div>
          </div>
          <button
            onClick={addItemToCart.bind(this, [
              ...products,
              { name, sku, quanity, price, src, key },
            ])}
            className="product-modal-addToCart defaultButton alt-button"
            type="button"
            value={sku}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default ProductModal;

// onClick={() => addProduct([...product, name])}

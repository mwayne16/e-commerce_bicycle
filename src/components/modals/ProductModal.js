import React from 'react';
import Modal from './Modal';
import { ProductItemMain } from '../ProductItemPage';
import '../../layout/styles/ProductModal.css';

const location = document.querySelector('#root-product-modal');

function ProductModal(props) {
  const currentProduct = props.items.find(
    (product) => product.key === props.selectedProduct
  );
  const closeModal = () => {
    location.dataset.toggled = false;
    props.close(true);
  };

  return (
    <Modal toggled={props.toggled} location={location}>
      <div className="product-modal">
        <button
          className="product-modal-close fas fa-times"
          onClick={closeModal}
        ></button>
        <ProductItemMain close={closeModal} item={currentProduct} />
      </div>
    </Modal>
  );
}
export default ProductModal;

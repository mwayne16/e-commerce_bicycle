import React, { useState } from 'react';
import Modal from '../modals/Modal';
import { CartModal } from '../modals/CartWidget';

const portal = document.querySelector('#cart-modal');
const CartModalContext = React.createContext(null);
const ModalProvider = props => {
  const [toggled, setToggle] = useState(false);

  // Put cart Modal between <Modal></Modal>
  return (
    <CartModalContext.Provider value={[toggled, setToggle]}>
      <Modal toggled={toggled} location={portal}>
        <CartModal />
      </Modal>
      {props.children}
    </CartModalContext.Provider>
  );
};

export { CartModalContext, ModalProvider };

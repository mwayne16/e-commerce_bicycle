import React, { useState } from 'react';
import Modal from '../modals/Modal';
import { CartModal } from '../modals/CartWidget';
//Create an abstracted Modal Component that accepts props.children. Could use component styles or import multiple styles from css
// Perhaps the context could be in the useModal hook so that the modal being used is dynamic to thimport ProductModal from './ProductModal';
//e isntance of the hook call

const portal = document.querySelector('#cart-modal');
const CartModalContext = React.createContext(null);
const ModalProvider = (props) => {
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
// const ModalContext = React.createContext(() => {
//   const { toggled, handleModal, modalContent } = useModalToggle();
//   return (
//     <ModalContext.Provider
//       value={{ toggled, handleModal, modalContent }}
//     ></ModalContext.Provider>
//   );
// });

// let ModalProvider = ({ children }) => {};

// export { ModalContext, ModalProvider };
export { CartModalContext, ModalProvider };

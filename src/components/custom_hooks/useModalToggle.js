import ReactDom from 'react-dom';
import React, { useState, useEffect } from 'react';

const ModalContext = React.createContext(null);

function useModalToggle() {
  const [toggled, setToggle] = useState(false);
  const [modal, setModal] = useState();

  const handleModal = (content) => {
    setToggle(!toggled);
    if (content) {
      setModal(content);
    }
  };
  return { toggled, handleModal, modal };
}

export default useModalToggle;

//4:45

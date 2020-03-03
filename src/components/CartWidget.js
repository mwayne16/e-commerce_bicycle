import React, { useState } from 'react';

function CartButton(props) {
  return (
    <button style={{ ...styles.button }} className="toggleCartWidget">
      <i className="fas fa-shopping-bag">
        <p className="bagCount">{props.itemCount}</p>
      </i>
      <p
        style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          marginTop: '5px',
          fontWeight: '600',
          width: '60px'
        }}
      >
        My Cart
      </p>
    </button>
  );
}

function CartWidget() {
  const [qty, updateQty] = useState(0);
  return (
    <React.Fragment>
      <CartButton itemCount={qty} />
    </React.Fragment>
  );
}

export default CartWidget;

const styles = {};

styles.button = {
  lineHeight: '4',
  top: '0',
  bottom: '0',
  position: 'relative',
  height: 'auto',
  padding: '0.5em 3em',
  background: '#294057',
  color: '#fff'
};

styles.icon = {
  color: '#B99867',
  fontSize: '2.5em'
};

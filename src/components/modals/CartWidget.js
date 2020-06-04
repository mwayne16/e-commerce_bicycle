import React, { useState } from 'react';
import { CartItemsContext } from '../context/cartContext';
import { CartModalContext } from '../context/modalContext';
import '../../layout/styles/CartModal.css';
import { Link } from 'react-router-dom';
function CartButton(props) {
  const [toggled, setToggle] = React.useContext(CartModalContext);
  return (
    <button
      onClick={() => setToggle(!toggled)}
      style={{ ...styles.button }}
      className="toggleCartWidget"
    >
      <i className="fas fa-shopping-bag">
        <p className="bagCount">{props.itemCount}</p>
      </i>
      <p
        style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          marginTop: '5px',
          fontWeight: '600',
          width: '60px',
        }}
      >
        My Cart
      </p>
    </button>
  );
}

function CartModal() {
  const { products, setProduct, subTotal } = React.useContext(CartItemsContext);
  const [toggled, setToggle] = React.useContext(CartModalContext);
  const [transition, setTransition] = useState(false);
  const handleModal = () => {
    setTransition(!transition);
    setTimeout(() => {
      setToggle(!toggled);
    }, 1000);
  };

  const modalStyles = {
    modalExit: {
      animation: 'modal-onExit 1s forwards',
    },
    arrowExit: {
      animation: 'modalArrow-onExit 1s forwards',
    },
  };
  return (
    <aside
      style={transition ? modalStyles.modalExit : null}
      className="cart-popout-modal"
    >
      <header className="cart-modal-header">
        <span
          style={transition ? modalStyles.arrowExit : null}
          onClick={handleModal}
          className="fas fa-chevron-right"
        ></span>
        <h1>Cart</h1>
      </header>
      <main>
        <div className="cart-modal-product">
          <ul>
            {products.map(({ sku, name, quanity, price, color, src, key }) => (
              <li key={key} data-active="false" className="cart-modal-item">
                <div className="item-wrapper">
                  <Link
                    to={{
                      pathname: '/Products',
                      state: { name, sku, price, color, src, key },
                    }}
                  >
                    <aside
                      onClick={handleModal}
                      className="item-image"
                      style={{
                        background: `url(${src}) no-repeat left center / contain  `,
                      }}
                    ></aside>
                  </Link>
                  <div className="item-info">
                    <div className="item-header">
                      <h2>{name}</h2>

                      <span
                        onClick={() =>
                          setProduct(
                            products.filter((product) => product.sku !== sku)
                          )
                        }
                        className="far fa-times-circle"
                      ></span>
                    </div>
                    <p>QTY:{quanity}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-modal-total">
          <h1>Subtotal</h1>
          <h1>{subTotal}</h1>
        </div>
      </main>

      <footer className="modal-footer">
        <Link
          to={{
            pathname: '/Checkout',
          }}
        >
          <button
            onClick={handleModal}
            className="product-item-addToCart defaultButton alt-button"
            type="button"
          >
            View Cart
          </button>
        </Link>
      </footer>
    </aside>
  );
}

function CartWidget() {
  const { products } = React.useContext(CartItemsContext);
  const count =
    products.length >= 1
      ? products.reduce((acc, current) => ({
          quanity: acc.quanity + current.quanity,
        }))
      : 0;

  return (
    <React.Fragment>
      <CartButton itemCount={count.quanity || count} />
    </React.Fragment>
  );
}

export { CartWidget, CartModal };

const styles = {
  button: {
    lineHeight: '4',
    top: '0',
    bottom: '0',
    position: 'relative',
    height: 'auto',
    padding: '0.5em 3em',
    background: '#294057',
    color: '#fff',
  },
};

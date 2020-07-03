import React, { useState } from 'react';
import { CartItemsContext } from '../../../components/context/cartContext';
import ProductQuanityBox from '../../../components/ProductQuanity';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Checkout.css';
import { Link } from 'react-router-dom';
import removePriceFormat from '../../../utilities/removePriceFormat';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

function Checkout() {
  const { products, setProduct, subTotal } = React.useContext(CartItemsContext);
  const updateItemQuanity = (item, prevQuanity, curQuanity) => {
    let quanity = curQuanity - prevQuanity;
    return setProduct([...products, { ...item, quanity }]);
  };

  return (
    <section className='checkout'>
      <div className='cart-wrapper'>
        <div className='cart-feed'>
          <h1 className='checkout-title'>My Cart</h1>
          {products.map(({ name, src, price, color, sku, quanity, key }) => (
            <div key={uuidv4()} className='cart-item '>
              <div className='item-overview-wrapper'>
                <Link
                  to={{
                    pathname: '/Products',
                    state: { name, key, price, src, color, sku },
                  }}
                >
                  <img src={src} alt={name} />
                </Link>
                <div className='cart-item-details'>
                  <h2 className='item-name'>{name}</h2>
                  <p>{`${price}`}</p>
                  <p>Color: {color}</p>
                </div>
              </div>
              <div className='item-price-wrapper'>
                <ProductQuanityBox
                  returnedValue={updateItemQuanity.bind(
                    this,
                    {
                      color,
                      key,
                      name,
                      price,
                      sku,
                      src,
                    },
                    quanity
                  )}
                  min={1}
                  max={99}
                  quanity={quanity}
                />
                <div className='item-subtotal'>
                  <p>{`${formatter.format(
                    removePriceFormat(price) * quanity
                  )}`}</p>
                </div>
              </div>
              <span
                onClick={() =>
                  setProduct(products.filter(item => item.sku !== sku))
                }
                className='delete-item fas fa-times'
              ></span>
            </div>
          ))}
        </div>
        <CheckoutActions />
      </div>
      <div className='order-summary'>
        <h1 className='checkout-title'>Order Summary</h1>
        <div className='order-overview'>
          <div className='cart-subtotal'>
            <h3>Subtotal</h3>
            <span>{subTotal}</span>
          </div>
          <div className='cart-shipping'>
            <h3>Shipping</h3>
            <span>Free</span>
            <h3 className='delivery-location'>Oklahoma, United States</h3>
          </div>
        </div>
        <div className='order-total'>
          <h3>Total</h3>
          <span>{subTotal}</span>
          <button className='checkout-button'>
            <span className='fas fa-lock'>
              <p>Checkout</p>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
function CheckoutActions() {
  const [toggle, setToggle] = useState({ promo: false, note: false });

  return (
    <div className='checkout-actions'>
      <div className='coupons'>
        <button
          onClick={() => setToggle({ ...toggle, promo: !toggle.promo })}
          form='form_add-coupon'
          className='add-coupon'
        >
          <span className='fas fa-tag'>
            <p>Enter a promo code</p>
          </span>
        </button>
        <form
          id='coupon-form'
          data-expanded={toggle.promo}
          className='checkout-form'
          name='add-coupon'
        >
          <label htmlFor='coupon-code'></label>
          <input
            id='promo-code'
            type='text'
            name='coupon-form'
            placeholder='Enter a promo code'
          ></input>
          <button name='submit-coupon' type='button'>
            Apply
          </button>
        </form>
      </div>
      <div className='delivery-notes'>
        <button
          onClick={() => setToggle({ ...toggle, note: !toggle.note })}
          className='add-notes'
        >
          <span className='far fa-sticky-note'>
            <p>Add a note</p>
          </span>
        </button>
        <textarea
          className='default note-input'
          data-expanded={toggle.note}
          maxLength='250'
          placeholder='Instructions? Special requests? Add them here.'
        ></textarea>
      </div>
    </div>
  );
}

export default Checkout;

import React, { useState } from 'react';
import '../layout/styles/ProductQuanityInput.css';
function ProductQuanityBox(props) {
  let [quanity, setQuanity] = useState(props.quanity);

  return (
    <div className="product-item-quanity">
      <label className="quanity-label" htmlFor="quanity-input">
        Quanity
      </label>
      <div className="quanity-input">
        <input
          readOnly
          type="number"
          id="quanity-input"
          name="quanity-input"
          min={1}
          max={99}
          value={quanity}
        />
        <div className="quanity-controls">
          <span
            onClick={() => {
              setQuanity(++quanity);
              props.returnedValue(quanity);
            }}
            className="fas fa-chevron-up"
            id="quanity-up"
          ></span>
          <span
            data-action-block={quanity <= 1 ? true : false}
            onClick={() => {
              setQuanity(quanity <= 1 ? quanity : --quanity);
              props.returnedValue(quanity);
            }}
            className="fas fa-chevron-down"
            id="quanity-down"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ProductQuanityBox;

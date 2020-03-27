import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../layout/Shop';
function Slider(props) {
  const sorted = props.product.items.sort((a, b) => a.price - b.price);
  const min = sorted[0].price;
  const max = sorted[sorted.length - 1].price;
  const [range, changedRange] = useState(min);

  useEffect(() => {
    const filter = arr => arr.filter(product => product.price >= range);
    props.dispatch({
      type: 'filterByPrice',
      payload: filter(props.product.items)
    });
    return () => {};
  }, [range]);
  return (
    <>
      <input
        onChange={e => changedRange(e.target.value)}
        type="range"
        min={min}
        max={max}
        step="5"
        defaultValue={range}
      />
      <p data-current-price>{'$' + range}</p>
      <p data-max-range>
        {max}
        {}
      </p>
    </>
  );
}

function ColorSelector(props) {
  const [color, newColor] = useState();
  const [value, setValue] = useState(0);
  const onChange = color => {
    forceUpdate();
    newColor(color);
  };

  const forceUpdate = () => setValue(value => ++value);
  useEffect(() => {
    const filter = arr => arr.filter(product => product.color === color);
    props.dispatch({
      type: 'filterByColor',
      payload: filter(props.product.items)
    });
    return () => {};
  }, [color, value]);

  return (
    <>
      <li onClick={onChange.bind(this, 'black')} data-color="black">
        black
      </li>
      <li onClick={onChange.bind(this, 'gray')} data-color="gray">
        gray
      </li>
      <li onClick={onChange.bind(this, 'green')} data-color="green">
        green
      </li>
      <li onClick={onChange.bind(this, 'red')} data-color="red">
        red
      </li>
      <li onClick={onChange.bind(this, 'white')} data-color="white">
        white
      </li>
    </>
  );
}

function SortProductsCard() {
  const sortMethod = e => {
    console.log(e.target.value);
  };
  return (
    <div className="sort-products">
      <label htmlFor="product-sorter">Sort by</label>
      <select onChange={sortMethod} id="sort">
        <option value="newest">Newest</option>
        <option value="pricelth">Price (low to high)</option>
        <option value="pricehtl">Price (high to low)</option>
        <option value="nameaz">Name A-Z</option>
        <option value="nameza">Name Z-A</option>
      </select>
    </div>
  );
}
export { Slider, ColorSelector, SortProductsCard };

// const {
//   count: [count, setCount]
// } = {
//   count: useState(0),
//   ...(props.state || {})
// };

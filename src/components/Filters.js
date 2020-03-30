import React, { useState, useEffect } from 'react';
function Slider(props) {
  const [range, changedRange] = useState(180);
  useEffect(() => {
    const filter = arr => arr.filter(product => product.price >= range);
    props.dispatch({
      type: 'filterByPrice',
      payload: filter(props.product.items)
    });
    console.log(range);
  }, [range]);
  return (
    <>
      <input
        onChange={e => changedRange(e.target.value)}
        type="range"
        min={180}
        max={620}
        step="5"
        defaultValue={range}
      />
      <p data-current-price>{'$' + range}</p>
      <p data-max-range>
        {620}
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

function SortProductsCard(props) {
  const filterDate = () => {
    const sortByDate = arr =>
      arr.sort((a, b) => new Date(b.released) - new Date(a.released));
    return dispatchMethod(sortByDate);
  };

  const filterAscending = type => {
    const sortAscending = arr =>
      arr.sort((a, b) => (a[type] < b[type] ? 1 : 0));
    return dispatchMethod(sortAscending);
  };
  const filterDescending = type => {
    const sortDescending = arr =>
      arr.sort((a, b) => (a[type] > b[type] ? 1 : 0));
    return dispatchMethod(sortDescending);
  };
  const dispatchMethod = method => {
    props.dispatch({
      type: 'sort',
      payload: method(props.product.items)
    });
  };
  return (
    <div className="sort-products">
      <label htmlFor="product-sorter">Sort by</label>
      <select id="sort">
        <option onClick={filterDate} value="newest">
          Newest
        </option>
        <option onClick={filterDescending.bind(this, 'price')} value="pricelth">
          Price (low to high)
        </option>
        <option onClick={filterAscending.bind(this, 'price')} value="pricehtl">
          Price (high to low)
        </option>
        <option onClick={filterDescending.bind(this, 'name')} value="nameaz">
          Name A-Z
        </option>
        <option onClick={filterAscending.bind(this, 'name')} value="nameza">
          Name Z-A
        </option>
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

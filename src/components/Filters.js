import React, { useState, useEffect } from 'react';
function Slider(props) {
  const [range, changedRange] = useState(180);

  const filterByPrice = () => {
    const filter = (arr) => arr.filter((product) => product.price >= range);
    props.dispatch({
      type: 'filterItems',
      payload: filter(props.product.items),
    });
  };
  return (
    <>
      <input
        onMouseUp={filterByPrice}
        onChange={(e) => changedRange(e.target.value)}
        type="range"
        min={180}
        max={620}
        step="10.50"
        defaultValue={range}
      />
      <span className="end-thumb"></span>
      <div className="price-ranges">
        <p>{'$' + range}</p>
        <p>{`$620`}</p>
      </div>
    </>
  );
}
function ColorSelector(props) {
  const [color, newColor] = useState('');
  const [value, setValue] = useState(0);

  const onChange = (color) => {
    forceUpdate();
    newColor(color);
  };
  const forceUpdate = () => setValue((value) => ++value);
  useEffect(() => {
    const filter = (arr) => arr.filter((product) => product.color === color);
    props.dispatch({
      type: 'filterItems',
      payload: filter(props.product.items),
    });
  }, [color, value]);

  return (
    <>
      <li
        style={{ background: '#000' }}
        className="color-filter-item"
        onClick={(e) => onChange(e.target.dataset.color)}
        onMouseOver={(e) => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color="Black"
      ></li>
      <li
        style={{ background: 'green' }}
        className="color-filter-item"
        onClick={(e) => onChange(e.target.dataset.color)}
        onMouseOver={(e) => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color="Green"
      ></li>
      <li
        style={{ background: 'red' }}
        className="color-filter-item"
        onClick={(e) => onChange(e.target.dataset.color)}
        onMouseOver={(e) => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color="Red"
      ></li>
      <li
        style={{ background: '#fff' }}
        className="color-filter-item"
        onClick={(e) => onChange(e.target.dataset.color)}
        onMouseOver={(e) => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color="White"
      ></li>
      <li
        style={{ background: 'blue' }}
        className="color-filter-item"
        onClick={(e) => onChange(e.target.dataset.color)}
        onMouseOver={(e) => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color="Blue"
      ></li>
    </>
  );
}

function SortProductsCard(props) {
  const filterDate = () => {
    const sortByDate = (arr) =>
      arr.sort((a, b) => new Date(b.released) - new Date(a.released));
    return dispatchMethod(sortByDate);
  };

  const filterAscending = (type) => {
    const sortAscending = (arr) =>
      arr.sort((a, b) => (a[type] < b[type] ? 1 : 0));
    return dispatchMethod(sortAscending);
  };
  const filterDescending = (type) => {
    const sortDescending = (arr) =>
      arr.sort((a, b) => (a[type] > b[type] ? 1 : 0));
    return dispatchMethod(sortDescending);
  };
  const dispatchMethod = (method) => {
    props.dispatch({
      type: 'filterItems',
      payload: method(props.product.items),
    });
  };
  return (
    <div className="sort-products">
      <select id="sort">
        <option value="default">Sort By</option>
        <option onClick={filterDate} value="newest">
          Newest
        </option>
        <option
          onClick={filterDescending.bind(this, 'price')}
          value="priceDescending"
        >
          Price (low to high)
        </option>
        <option
          onClick={filterAscending.bind(this, 'price')}
          value="priceAscending"
        >
          Price (high to low)
        </option>
        <option
          onClick={filterDescending.bind(this, 'name')}
          value="nameDescending"
        >
          Name A-Z
        </option>
        <option
          onClick={filterAscending.bind(this, 'name')}
          value="nameAscending"
        >
          Name Z-A
        </option>
      </select>
    </div>
  );
}

export { Slider, ColorSelector, SortProductsCard };

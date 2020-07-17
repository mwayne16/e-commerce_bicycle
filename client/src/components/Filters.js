import React, { useState, useEffect } from 'react';
import removePriceFormat from './../utilities/removePriceFormat';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

function Slider(props) {
  const itemPrice = props.products.items.map(value =>
    removePriceFormat(value.price)
  );
  const findMinMax = type => type.apply(Math, itemPrice);
  const [range, changedRange] = useState(findMinMax(Math.min));
  const filterByPrice = () => {
    const filter = arr =>
      arr.filter(product => removePriceFormat(product.price) >= range);
    props.dispatch({
      type: 'filterItems',
      payload: filter(props.products.items),
    });
  };
  useEffect(() => {
    changedRange(findMinMax(Math.min));
  }, [props.products]);
  return (
    <>
      <input
        onMouseUp={filterByPrice}
        onChange={e => changedRange(parseFloat(e.target.value))}
        type='range'
        min={findMinMax(Math.min)}
        max={findMinMax(Math.max)}
        step={10}
        defaultValue={range}
      />
      <span className='end-thumb'></span>
      <div className='price-ranges'>
        <p>{formatter.format(range)}</p>
        <p>{formatter.format(findMinMax(Math.max))}</p>
      </div>
    </>
  );
}
function ColorSelector(props) {
  const [color, newColor] = useState('');

  const onChange = color => {
    newColor(color);
  };

  useEffect(() => {
    const filter = arr => arr.filter(product => product.color === color);
    props.dispatch({
      type: 'filterItems',
      payload: filter(props.products.items),
    });
  }, [color]);

  //<----------------DRY!------------------->
  return (
    <>
      <li
        style={{ background: '#000' }}
        className='color-filter-item'
        onClick={e => onChange(e.target.dataset.color)}
        onMouseOver={e => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color='Black'
      ></li>
      <li
        style={{ background: 'green' }}
        className='color-filter-item'
        onClick={e => onChange(e.target.dataset.color)}
        onMouseOver={e => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color='Green'
      ></li>
      <li
        style={{ background: 'red' }}
        className='color-filter-item'
        onClick={e => onChange(e.target.dataset.color)}
        onMouseOver={e => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color='Red'
      ></li>
      <li
        style={{ background: '#fff' }}
        className='color-filter-item'
        onClick={e => onChange(e.target.dataset.color)}
        onMouseOver={e => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color='White'
      ></li>
      <li
        style={{ background: 'blue' }}
        className='color-filter-item'
        onClick={e => onChange(e.target.dataset.color)}
        onMouseOver={e => props.displayColor(e.target.dataset.color)}
        onMouseLeave={() => props.displayColor('undefined')}
        data-color='Blue'
      ></li>
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
      type: 'filterItems',
      payload: method(props.products.items),
    });
  };
  return (
    <div className='sort-products'>
      <select id='sort'>
        <option value='default'>Sort By</option>
        <option onClick={filterDate} value='newest'>
          Newest
        </option>
        <option
          onClick={filterDescending.bind(this, 'price')}
          value='priceDescending'
        >
          Price (low to high)
        </option>
        <option
          onClick={filterAscending.bind(this, 'price')}
          value='priceAscending'
        >
          Price (high to low)
        </option>
        <option
          onClick={filterDescending.bind(this, 'name')}
          value='nameDescending'
        >
          Name A-Z
        </option>
        <option
          onClick={filterAscending.bind(this, 'name')}
          value='nameAscending'
        >
          Name Z-A
        </option>
      </select>
    </div>
  );
}

export { Slider, ColorSelector, SortProductsCard };

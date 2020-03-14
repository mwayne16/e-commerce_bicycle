import React, { useEffect, useState } from 'react';
function Slider(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

function ColorSelector(props) {
  const [color, newColor] = useState('');
  props.data
    .map(products => products)
    .filter(product => product.color === color);
  return (
    <>
      <li data-color="black"></li>
      <li data-color="blue"></li>
      <li data-color="green"></li>
      <li data-color="red"></li>
      <li data-color="white"></li>
    </>
  );
}

export { Slider, ColorSelector };

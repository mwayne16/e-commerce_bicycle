import { useState, useEffect } from 'react';

function usePriceFormatter(array) {
  const [formattedItems, setPriceFormat] = useState([...array]);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  useEffect(() => {
    setPriceFormat(() =>
      formattedItems.map((value, index, arr) => {
        formatter.format(arr[index].price);
        return arr[index];
      })
    );
  }, []);
  console.log(formattedItems);
  return [formattedItems];
}

export default usePriceFormatter;

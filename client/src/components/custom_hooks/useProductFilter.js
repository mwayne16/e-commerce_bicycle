import { useCallback, useState } from 'react';

const useProductFilter = initial => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    filterByPrice: useCallback(
      range => setValue(arr => arr.filter(v => v.price >= range)),
      []
    ),
    filterByColor: useCallback(
      c => setValue(arr => arr.filter(v => v.color === c)),
      []
    ),
    sortAscending: () => setValue(arr => arr.sort((a, b) => b.price - a.price))
  };
};
export default useProductFilter;

// useEffect(() => {
//   async function DatatoFilter() {
//     let data = props.results;
//     if (props.loading) {
//       return;
//     }
//     try {
//       data
//         .filter(product => product.price - product.sale >= props.min.price)
//         .map(product => console.log(product));
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   DatatoFilter();
// }, [props]);

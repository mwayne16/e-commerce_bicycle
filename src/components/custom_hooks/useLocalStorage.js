import { useEffect, useState } from 'react';
const combineStoredValues = (arr) =>
  arr.reduce(
    (acc, curr) => {
      if (curr.sku) {
        let fromMap = acc.map[curr.sku];
        if (!fromMap) {
          acc.map[curr.sku] = fromMap = {
            name: curr.name,
            sku: curr.sku,
            src: curr.src,
            price: curr.price,
            key: curr.key,
            quanity: 0,
          };
          acc.result.push(fromMap);
        }
        fromMap.quanity += parseFloat(curr.quanity);
      } else {
        acc.result.push(curr);
      }
      return acc;
    },
    {
      map: {},
      result: [],
    }
  ).result;
function useLocalStorage(key, initialValue) {
  // Should either store products into global context or find a way to retrieve the values from localstorage PLUS re-render on update
  // State to store our value

  // Pass initial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key

      const item = window.localStorage.getItem(key);

      // Parse stored json or if none return initialValue

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue

      console.log(error);

      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...

  // ... persists the new value to localStorage.

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState

      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state

      setStoredValue(combineStoredValues(valueToStore));

      // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case

      console.log(error);
    }
  };
  useEffect(() => {
    setStoredValue(combineStoredValues(storedValue));
  }, []);

  return [storedValue, setValue];
}
export default useLocalStorage;

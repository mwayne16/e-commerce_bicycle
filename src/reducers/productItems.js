import Data from '../components/data/ProductData';
const initialState = {
  items: [...Data],
  filteredItems: []
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'filterByPrice':
      return { ...state, filteredItems: action.payload };
    case 'filterByColor':
      return { ...state, filteredItems: action.payload };
    case 'sort':
      return { ...state, filteredItems: action.payload };
    default:
      return {
        data: state.data
      };
  }
};
export { initialState, reducer };

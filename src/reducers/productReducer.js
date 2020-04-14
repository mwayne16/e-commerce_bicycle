// import Data from '../components/data/ProductData';
import Data from '../components/data/application';
const initialState = {
  items: [...Data],
  filteredItems: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'filterItems':
      return { ...state, filteredItems: action.payload };
    default:
      return {
        data: state.data,
      };
  }
};
export { initialState, reducer };

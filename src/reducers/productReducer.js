const initialState = {
  loading: false,
  items: [],
  filteredItems: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'filterItems':
      return { ...state, filteredItems: action.payload };
    case 'reset':
      return { ...initialState };
    default:
      return {
        data: state.data,
      };
  }
};

export { reducer, initialState };

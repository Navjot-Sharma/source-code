export default (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_CAT":
      return {
        ...state,
        categories: action.payload,
        error: null,
        isLoaded: true
      };
    default:
      return state;
  }
};

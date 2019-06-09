export default (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_CAT_DATA":
      console.log(state);
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoaded: true
      };
    default:
      return state;
  }
};

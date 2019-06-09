export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_CODE_FILE":
      console.log(state);
      return {
        ...state
      };

    default:
      return state;
  }
};

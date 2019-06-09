export function fetchCategories() {
  return dispatch => {
    // use dispatch to dispatch other actions like requesting initiated...
    return fetch("http://localhost:3200/")
      .then(
        response => response.json(),
        error => console.log("an error occurred", error)
      )
      .then(json => dispatch(receiveCatogaries(json.data)));
  };
}

export function receiveCatogaries(categories) {
  return {
    type: "RECEIVE_CAT",
    payload: categories
  };
}

// export function onCategoryClick(id) {

// }

export function fetchCodeList(id) {
  return dispatch => {
    return fetch("http://localhost:3200")
      .then(
        res => res.json(),
        error => console.log("An error has occurred", error)
      )
      .then(json => dispatch(receiveCodeList(json.data)));
  };
}

export function receiveCodeList(data) {
  return {
    type: "RECEIVE_CAT_DATA",
    payload: data
  };
}

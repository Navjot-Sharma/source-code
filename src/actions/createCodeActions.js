export function addFile() {
  return {
    type: "ADD_CODE_FILE"
  };
}
export function deleteFile(index) {
  return {
    type: "DELETE_CODE_FILE"
  };
}

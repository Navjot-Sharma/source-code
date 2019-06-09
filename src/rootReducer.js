import { combineReducers } from "redux";

import categories from "./reducers/categoriesReducers";
import codeList from "./reducers/codeListReducers";
import createCode from "./reducers/createCodeReducers";
export default combineReducers({
  categories,
  codeList,
  createCode
});

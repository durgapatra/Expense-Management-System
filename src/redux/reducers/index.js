import { combineReducers } from "redux";
import expense from "./expense.reducers";

const reducer = combineReducers({
  expense
});

export default reducer;

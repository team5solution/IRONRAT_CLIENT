import { combineReducers } from "redux";
import Products from "./products";
import Message from "./message";
export default combineReducers({
  products: Products,
  message: Message
  //product: Product,
});

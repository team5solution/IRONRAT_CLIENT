import { combineReducers } from "redux";
import Products from "./products";
import Message from "./message";
import Appointment from "./appointment";
import Review from "./reviews";
export default combineReducers({
  products: Products,
  message: Message,
  appointment: Appointment,
  review: Review
  //product: Product,
});

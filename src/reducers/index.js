import { combineReducers } from "redux";
import Products from "./products";
import Message from "./message";
import Appointment from "./appointment";
export default combineReducers({
  products: Products,
  message: Message,
  appointment: Appointment
  //product: Product,
});

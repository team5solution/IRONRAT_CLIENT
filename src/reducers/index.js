import { combineReducers } from "redux";
import Products from "./products";
import Message from "./message";
import Appointment from "./appointment";
import Career from "./careers";
export default combineReducers({
  products: Products,
  message: Message,
  appointment: Appointment,
  career: Career
});

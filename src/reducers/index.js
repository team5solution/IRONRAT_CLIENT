import { combineReducers } from "redux";
import Products from "./products";
import Message from "./message";
import Appointment from "./appointment";
<<<<<<< HEAD
import Review from "./reviews";
=======
import Career from "./careers";
>>>>>>> master
export default combineReducers({
  products: Products,
  message: Message,
  appointment: Appointment,
<<<<<<< HEAD
  review: Review
  //product: Product,
=======
  career: Career
>>>>>>> master
});

import { combineReducers } from "redux";
import Products from "./products";
import Message from "./message";
import Appointment from "./appointment";
import Theme from "./theme";
import Review from "./reviews";
import Job from "./job";
import Candidate from "./candidate";
export default combineReducers({
  products: Products,
  message: Message,
  appointment: Appointment,
  theme: Theme,
  review: Review,
  job: Job,
  candidate: Candidate
});

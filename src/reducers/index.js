import { combineReducers } from "redux";
import Products from "./products";
import Message from "./message";
import Appointment from "./appointment";
import Reviews from "./reviews";
import Job from "./job";
import Candidate from "./candidate";

export default combineReducers({
  products: Products,
  message: Message,
  appointment: Appointment,
  review: Reviews,
  job: Job,
  candidate: Candidate
});

import validator from "validator";
import isEmpty from "../isEmpty";
import isBefore from "validator";
export default function appointmentValidateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.name)) {
    errors.name = "This field is required";
  }

  if (validator.isEmpty(data.email) || !validator.isEmail(data.email)) {
    errors.email = "This field is required";
  }
  newDate = new Date.now();
  if(validator.isEmpty(data.date) || !validator.isBefore(validator.toDate(data.date),newDate)){
    errors.date = "This field is required";
  }
  if (validator.isEmpty(data.content)) {
    errors.content = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

import validator from "validator";
import isEmpty from "../isEmpty";
export default function reviewValidateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.name)) {
    errors.name = "This field is required";
  }

  if (validator.isEmpty(data.reviewContent)) {
    errors.reviewContent = "This field is required";
  }
  
  // if (validator.equals(data.rating.toString(), "0")) {
  //   errors.rating = "This field is required";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

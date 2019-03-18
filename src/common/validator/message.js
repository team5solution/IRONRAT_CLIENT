import validator from "validator";
import isEmpty from "../isEmpty";

export default function messageValidateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.name)) {
    errors.name = "This field is required";
  }

  if (validator.isEmpty(data.email) || !validator.isEmail(data.email)) {
    errors.email = "This field is required";
  }
  if (validator.isEmpty(data.content)) {
    errors.content = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

import axios from "axios";
import { ROOT, SEND_APPOINTMENT, APPOINTMENT_SENT, SEND_APPOINTMENT_ERROR } from "./types";

export const sendAppointment = appointment => {
  return dispatch => {
    dispatch({ type: SEND_APPOINTMENT });
    axios
      .post(`${ROOT}appointment`, appointment)
      .then(result => {
        console.log(result);
        dispatch({ type: APPOINTMENT_SENT });
      })
      .catch(err => {
        dispatch({ type: SEND_APPOINTMENT_ERROR });
      });
  };
};

import axios from "axios";
import { ROOT, SEND_MESSAGE, MESSAGE_SENT, SEND_MESSAGE_ERROR } from "./types";

export const sendMessage = message => {
  return dispatch => {
    dispatch({ type: SEND_MESSAGE });
    axios
      .post(`${ROOT}message`, message)
      .then(result => {
        console.log(result);
        dispatch({ type: MESSAGE_SENT });
      })
      .catch(err => {
        dispatch({ type: SEND_MESSAGE_ERROR });
      });
  };
};

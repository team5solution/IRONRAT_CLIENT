
import axios from "axios";
import { ROOT, SEND_CANDIDATE, CANDIDATE_SENT, SEND_CANDIDATE_ERROR } from "./types";

export const sendCandidate = (id, candidates)  => {
  return dispatch => {
    dispatch({ type: SEND_CANDIDATE });
    axios
      .post(`${ROOT}apply/:${id}`, candidates)
      .then(result => {
        console.log(result);
        dispatch({ type: CANDIDATE_SENT });
      })
      .catch(err => {
        dispatch({ type: SEND_CANDIDATE_ERROR });
      });
  };
};


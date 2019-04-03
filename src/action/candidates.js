import axios from "axios";
import {
  ROOT,
  SEND_CANDIDATE,
  CANDIDATE_SENT,
  SEND_CANDIDATE_ERROR
} from "./types";
import { SUCCESS, ERROR } from "../settings";
export const sendCandidate = (id, candidates) => dispatch => {
  console.log(candidates);
  dispatch({ type: SEND_CANDIDATE });
  let bodyFormData = new FormData();
  bodyFormData.set("name", candidates.name);
  bodyFormData.set("email", candidates.email);

  candidates.resume.forEach(file => {
    bodyFormData.append("resume", file);
  });
  axios
    .post(`${ROOT}career/apply/${id}`, bodyFormData)
    .then(result => {
      console.log(result);
      if (!result.data.code) {
        dispatch({ type: CANDIDATE_SENT, payload: SUCCESS });
      } else {
        dispatch({ type: CANDIDATE_SENT, payload: ERROR });
      }
    })
    .catch(err => {
      dispatch({ type: SEND_CANDIDATE_ERROR });
    });
};

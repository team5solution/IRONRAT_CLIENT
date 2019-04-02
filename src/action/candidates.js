
import axios from "axios";
import { ROOT, SEND_CANDIDATE, CANDIDATE_SENT, SEND_CANDIDATE_ERROR } from "./types";

export const sendCandidate = ({id, candidates})  => {
    
    dispatch({ type: SEND_CANDIDATE });
    axios
      .post(`${ROOT}${id}`, candidates)
      .then(result => {
        console.log(result);
        dispatch({ type: CANDIDATE_SENT });
      })
      .catch(err => {
        dispatch({ type: SEND_CANDIDATE_ERROR });
      });
  };



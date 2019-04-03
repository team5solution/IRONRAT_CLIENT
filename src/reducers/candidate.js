import {
  SEND_CANDIDATE,
  CANDIDATE_SENT,
  SEND_CANDIDATE_ERROR
} from "../action/types";

const INITIAL_STATE = {
  sendResult: "",
  isSent: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_CANDIDATE: {
      return {
        ...state,
        isSent: false
      };
    }
    case CANDIDATE_SENT: {
      return {
        ...state,
        isSent: true,
        sendResult: action.payload,
        error: ""
      };
    }
    case SEND_CANDIDATE_ERROR: {
      return {
        ...state,
        isSent: true,
        error: "error"
      };
    }
    default:
      return state;
  }
};

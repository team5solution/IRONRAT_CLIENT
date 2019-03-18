import {
  SEND_MESSAGE,
  MESSAGE_SENT,
  SEND_MESSAGE_ERROR
} from "../action/types";

const INITIAL_STATE = {
  isSent: false,
  isSending: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return { ...state, isSending: true, isSent: false };
    }
    case MESSAGE_SENT: {
      return { ...state, isSending: false, isSent: true };
    }
    case SEND_MESSAGE_ERROR: {
      return {
        ...state,
        isSending: false,
        isSent: false,
        error: "Cannot send message because network or server failed"
      };
    }
    default:
      return state;
  }
};

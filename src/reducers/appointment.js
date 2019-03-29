import {
    SEND_APPOINTMENT,
    APPOINTMENT_SENT,
    SEND_APPOINTMENT_ERROR
  } from "../action/types";
  
  const INITIAL_STATE = {
    isSent: false,
    isSending: false,
    error: null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SEND_APPOINTMENT: {
        return { ...state, isSending: true, isSent: false };
      }
      case APPOINTMENT_SENT: {
        return { ...state, isSending: false, isSent: true };
      }
      case SEND_APPOINTMENT_ERROR: {
        return {
          ...state,
          isSending: false,
          isSent: false,
          error: "Cannot make appointment because network or server failed"
        };
      }
      default:
        return state;
    }
  };
  
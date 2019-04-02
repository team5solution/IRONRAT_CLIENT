import {
    SEND_CANDIDATE,
  } from "../action/types";
  
  const INITIAL_STATE = {
    candidates: [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SEND_CANDIDATE: {
        return {
            ...state,
            candidates: [action.payload, ...state.candidates]
          };
      }
      default:
        return state;
    }
  };
  
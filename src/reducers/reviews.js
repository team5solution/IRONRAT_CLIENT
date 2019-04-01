import {
  REQUEST_REVIEW,
  RECEIVE_REVIEW,
  NEW_REVIEW,
  SEND_REVIEW,
  REVIEW_SENT,
  SEND_REVIEW_ERROR
} from "../action/types";

const INITIAL_STATE = {
  reviewItem: [],
  isFetching: false,
  isSent: false,
  isSending: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_REVIEW: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_REVIEW: {
      return { ...state, isFetching: false, reviewItem: action.payload };
    }
    case NEW_REVIEW: {
      return {
        ...state,
        isFetching: false,
        reviewItem: [action.payload, ...state.reviewItem]
      };
    }
      case SEND_REVIEW: {
        return { ...state, isSending: true, isSent: false };
    }
      case REVIEW_SENT: {
        return { ...state, isSending: false, isSent: true };
      }
      case SEND_REVIEW_ERROR: {
        return {
          ...state,
          isSending: false,
          isSent: false,
          error: "Cannot make review because network or server failed"
        };
    }
    default:
      return state;
  }
};

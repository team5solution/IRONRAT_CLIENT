import {
  REQUEST_REVIEW,
  RECEIVE_REVIEW,
  NEW_REVIEW
} from "../action/types";

const INITIAL_STATE = {
  reviewItem: [],
  isFetching: false
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
    default:
      return state;
  }
};

import {
  REQUEST_JOBS,
  RECEIVE_JOBS,
  NEW_JOBS,
  DELETE_JOB
} from "../action/types";

const INITIAL_STATE = {
  jobItems: [],
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_JOBS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_JOBS: {
      return { ...state, isFetching: false, jobItems: action.payload };
    }
    case NEW_JOBS: {
      return {
        ...state,
        isFetching: false,
        jobItems: [action.payload, ...state.jobItems]
      };
    }
    case DELETE_JOB: {
      const jobItems = state.jobItems.filter(
        item => item._id !== action.payload._id
      );
      return { ...state, jobItems: jobItems };
    }
    default:
      return state;
  }
};

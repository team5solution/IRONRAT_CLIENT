import {
    REQUEST_JOBS,
    RECEIVE_JOBS,
    NEW_JOBS,
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
      default:
        return state;
    }
  };
  
import axios from "axios";

import {
  ROOT,
  REQUEST_JOBS,
  RECEIVE_JOBS,
  NEW_JOBS,
  DELETE_JOB
} from "./types";

export const fetchJob = () => async dispatch => {
  try {
    /*dispatch the status "REQUEST_PRODUCTS" to product reducer */
    dispatch({ type: REQUEST_JOBS });
    /*fetch products with axios */
    const res = await axios.get(`${ROOT}career/all`);
    /* dispatch the status "RECEIVE_PRODUCT" and the fetch result to product reducer */
    dispatch({ type: RECEIVE_JOBS, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_JOBS, payload: [] });
  }
};
export const addNewJob = job => dispatch => {
  dispatch({ type: NEW_JOBS, payload: job });
};
export const deleteJob = job => dispatch => {
  dispatch({ type: DELETE_JOB, payload: job });
};

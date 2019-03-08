import axios from "axios";

import { ROOT, REQUEST_PRODUCTS, RECEIVE_PRODUCTS, NEW_PRODUCT } from "./types";

export const fetchProducts = () => async dispatch => {
  try {
    /*dispatch the status "REQUEST_PRODUCTS" to product reducer */
    dispatch({ type: REQUEST_PRODUCTS });
    /*fetch products with axios */
    const res = await axios.get(`${ROOT}product/all`);
    /* dispatch the status "RECEIVE_PRODUCT" and the fetch result to product reducer */
    dispatch({ type: RECEIVE_PRODUCTS, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_PRODUCTS, payload: [] });
  }
};
export const addNewProduct = product => dispatch => {
  dispatch({ type: NEW_PRODUCT, payload: product });
};

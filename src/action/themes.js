import {
  ROOT,
  REQUEST_THEME,
  RECEIVE_THEME,
  UPDATE_THEME,
  NEW_THEME
} from "./types";
import axios from "axios";
export const fetchTheme = () => async dispatch => {
  try {
    /*dispatch the status "REQUEST_PRODUCTS" to product reducer */
    dispatch({ type: REQUEST_THEME });
    /*fetch products with axios */
    const res = await axios.get(`${ROOT}theme/all`);
    /* dispatch the status "RECEIVE_PRODUCT" and the fetch result to product reducer */
    dispatch({ type: RECEIVE_THEME, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_THEME, payload: [] });
  }
};

export const addNewTheme = theme => dispatch => {
  dispatch({ type: NEW_THEME, payload: theme });
};

export const updateTheme = selectedThemeIndex => dispatch => {
  dispatch({ type: UPDATE_THEME, payload: selectedThemeIndex });
};

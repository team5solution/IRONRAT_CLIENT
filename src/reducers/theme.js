import {
  REQUEST_THEME,
  RECEIVE_THEME,
  NEW_THEME,
  UPDATE_THEME
} from "../action/types";

const INITIAL_STATE = {
  info: {},
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_THEME: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_THEME: {
      return { ...state, isFetching: false, info: action.payload };
    }
    case NEW_THEME: {
      let updatedTheme = state.info;
      updatedTheme.presets.push(action.payload);
      return { ...state, info: updatedTheme };
    }
    case UPDATE_THEME: {
      let updatedTheme = state.info;
      updatedTheme.selectedPresetIndex = action.payload;
      return { ...state, info: updatedTheme };
    }
    default:
      return state;
  }
};

// src/redux/reducers/errorReducer.js
import { SET_ERROR, CLEAR_ERROR, SET_VISIBILITY } from '../actions/errorActions';

const initialState = {
  message: '',
  buttonText: '',
  onPress: null,
  isVisible: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        message: action.payload.message,
        buttonText: action.payload.buttonText,
        onPress: action.payload.onPress,
        isVisible: true, // Set visibility to true when an error is set
      };
    case CLEAR_ERROR:
      return {
        ...initialState,
        isVisible: false, // Set visibility to false when clearing the error
      };
    case SET_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;

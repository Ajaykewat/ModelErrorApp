// src/redux/reducers/errorReducer.js
import { SET_ERROR, CLEAR_ERROR, SET_VISIBILITY,UPDATE_ERROR_TITLE } from '../actions/errorActions';

const initialState = {
  buttonText: '',
  onPress: null,
  isVisible: false,
  position: 'center',
type: 'info',
title: '',
description: '',
floating: true,
duration: 2000,
autoHide: true,
buttoncount: 0,
buttonname: []
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        // ...state,
        title: action.payload.title,
        description: action.payload.description,
        floating: action.payload.floating,
        duration: action.payload.duration,
        buttoncount: action.payload.buttoncount,
        buttonname: action.payload.buttonname,
        buttonText: action.payload.buttonText,
        onPress: action.payload.onPress,
        isVisible: true, 
      };
    case CLEAR_ERROR:
      return {
        ...initialState,
        type: '',
        buttoncount: 0,
        buttonname: [],
        isVisible: false, 
      };
    case SET_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload,
      };
    case UPDATE_ERROR_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;

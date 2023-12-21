// src/redux/actions/errorActions.js
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_VISIBILITY = 'SET_VISIBILITY';

export const setError = (message, buttonText, onPress) => ({
  type: SET_ERROR,
  payload: { message, buttonText, onPress, isVisible: true },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setVisibility = (isVisible) => ({
  type: SET_VISIBILITY,
  payload: isVisible,
});

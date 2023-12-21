// src/redux/actions/errorActions.js
export const setError = (errorDetails) => ({
  type: 'SET_ERROR',
  payload: {...errorDetails},
});

export const clearError = () => ({
  type: 'CLEAR_ERROR',
});

export const setVisibility = (isVisible) => ({
  type: 'SET_VISIBILITY',
  payload: isVisible,
});

// You can also create a more specific action to update a specific property
export const updateErrorTitle = (newTitle) => ({
  type: 'UPDATE_ERROR_TITLE',
  payload: newTitle,
});

// Add more specific update actions as needed

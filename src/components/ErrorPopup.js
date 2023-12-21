// src/components/ErrorPopup.js
import React, { useEffect } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { connect } from 'react-redux';
import { clearError, setVisibility } from '../redux/actions/errorActions';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const ErrorPopup = ({ message, buttonText, onPress, isVisible, clearError, setVisibility }) => {
  useEffect(() => {
    if (message && isVisible) {
      showMessage({
        position:"center",
        message: message,
        type: 'danger',
        duration: 3000,
        autoHide: false,
        onPress: () => {
          onPress();
          clearError();
        },
      });
    }
  }, [message, onPress, clearError, isVisible,setVisibility,buttonText]);

  return (
    <Modal
      visible={isVisible} // Set to false to prevent modal from being visible
      animationType="slide"
      transparent
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        {/* No need for the text and button inside the modal */}
      </View>
      <FlashMessage position="bottom" />
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  message: state.error.message,
  buttonText: state.error.buttonText,
  onPress: state.error.onPress,
  isVisible: state.error.isVisible,
});

export default connect(mapStateToProps, { clearError, setVisibility })(ErrorPopup);

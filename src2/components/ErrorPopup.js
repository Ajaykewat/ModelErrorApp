// src/components/ErrorPopup.js
import React, { useEffect } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { clearError, setVisibility } from '../redux/actions/errorActions';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';

const ErrorPopup = ({
    position,
  title,
  description,
  floating,
  duration,
  buttonText,
  onPress,
  isVisible,
  buttoncount,
  buttonname,
  clearError,
}) => {
    useEffect(() => {
      console.log('isVisible:', isVisible);
      console.log('title:', title);
      console.log("triger")
        if (isVisible) {
        showMessage({
            position:"top",
            type:"info",
            message: title,
            description,
            floating,
            // duration,
            autoHide,
            titleStyle: { color: 'blue', fontSize: 20 },
            textStyle: { color: 'blue', fontSize: 16 },
            onPress: () => {
              onPress();
              clearError();
            },
            onLongPress: () => {
                onPress();
                clearError();
            },
            // renderAfterContent: () => (
            //   <View style={styles.buttonRow}>{renderButtons(buttoncount)}</View>
            // ),
            onHide: () => {
                clearError();
            },
          });

        }
      }, [isVisible,
         title, 
         description, 
         floating, 
         duration, 
         buttonText, 
         onPress, 
         clearError, 
         buttoncount, 
         buttonname]);

      const renderButtons = (numberOfButtons) => {
        return Array.from({ length: numberOfButtons }, (_, i) => {
          const buttonStyles = [styles.button, { backgroundColor: getRandomColor() }];
      
          return (
            <TouchableOpacity
              key={i + 1}
              style={buttonStyles}
              onPress={() => {
                dispatch(playScreen());
                hideMessage();
              }}
            >
              <Text style={styles.buttonTextS}>{numberToText(i + 1)}</Text>
            </TouchableOpacity>
          );
        });
      };

      const numberToText = (number) => {
        return number === 0 ? '' :  buttonname[number - 1] || '';
      };
console.log("isVisible",isVisible)
  return (
    <Modal 
    //   visible={!!message}
    visible={isVisible}
      animationType="slide"
      transparent
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:"black" }}>
        <Button title={buttonText} onPress={() => { onPress(); clearError(); }} />
        </View>
      </View>
      <FlashMessage position="center" />
    </Modal>
  );
};


const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
      },
      text: {
        color: 'blue',
        fontSize: 20,
      },
      selecttext: {
        color: 'black',
        fontSize: 20,
        backgroundColor: 'white',
        padding: 5,
        margin: 2,
        borderRadius: 10,
      },
      buttonContainer: {
        margin: 5,
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      },
      button: {
        margin: 5,
      },
      buttonTextS: {
        color: 'black',
        fontSize: 18,
      },
})

const mapStateToProps = (state) => ({
    position: state.error.position,
    title: state.error.title,
    description: state.error.description,
    floating: state.error.floating,
    duration: state.error.duration,
    buttonText: state.error.buttonText,
    onPress: state.error.onPress,
    isVisible: state.error.isVisible,
    buttoncount: state.error.buttoncount,
    buttonname: state.error.buttonname,
  });

  export default connect(mapStateToProps, { clearError, setVisibility})(ErrorPopup);

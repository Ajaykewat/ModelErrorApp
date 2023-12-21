// Example: src/screens/ExampleScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { setError } from '../redux/actions/errorActions';

const ExampleScreen = ({ setError }) => {
  const simulateError = () => {
    setError('An error occurred!', 'Retry', () => {
      // Handle retry logic
    });
  };

  return (
    <View>
      <Button title="Simulate Error" onPress={simulateError} />
    </View>
  );
};

export default connect(null, { setError })(ExampleScreen);

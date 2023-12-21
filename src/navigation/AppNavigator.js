// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import ErrorPopup from '../components/ErrorPopup';
import ExampleScreen from '../screens/ExampleScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ message }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen name ="ExampleScreen" component={ExampleScreen}/>
      </Stack.Navigator>
      {message && <ErrorPopup />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  message: state.error.message,
});

export default connect(mapStateToProps)(AppNavigator);

// Example: src/screens/ExampleScreen.js
import React from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import { setError } from "../redux/actions/errorActions";

const ExampleScreen = ({ setError }) => {
    const simulateError = () => {
        console.log("simulateError")
        try{
        setError({
            title: "An error occurred!",
            description: "This is a detailed description of the error.",
            floating: true,
            duration: 3000,
            autoHide: true,
            buttoncount: "2",
            buttonname: ["ok", "cancel"],
            buttonText: "Retry",
            onPress: () => {
              console.log("Retry logic here");
            },
          });
          console.log("end")
        }catch(e){console.log(e)}
        };

  return (
    <View>
      <Button title="Simulate Error" onPress={simulateError} />
    </View>
  );
};

export default connect(null, { setError })(ExampleScreen);

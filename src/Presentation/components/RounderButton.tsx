import React from "react";
import { TouchableOpacity, Text, ToastAndroid, StyleSheet } from "react-native";
import { MyColors } from "../theme/AppThemes";

interface Props{
  text:string,
  onPress:() =>void,
}


const RounderButton = ({text, onPress}:Props) => {
  return (
    <TouchableOpacity
      style={sytles.roundeButton}
      onPress={() => onPress()}
    >
      <Text style={sytles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
const sytles = StyleSheet.create({
    roundeButton: {
      width: "100%",
      height:50,
      backgroundColor: 'orange',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15
    },
    textButton: {
      color: "white",
      fontWeight:'bold'
    },
  });
   
export default RounderButton;


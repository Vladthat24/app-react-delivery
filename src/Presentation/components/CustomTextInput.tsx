import React from 'react'
import {View,Image,TextInput,StyleSheet,KeyboardType } from 'react-native';

interface Props{
    image:string,
    placerholder:string,
    value:string,
    keyboardType:KeyboardType,
    secureTextEntry?:boolean,
    property:string,
    onChangeText: (property:string,value:any)=>void
}

const CustomTextInput=({
    image,
    placerholder,
    value,
    keyboardType,
    secureTextEntry=false,
    property,
    onChangeText
}:Props)=> {
  return (
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={image}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={placerholder}
            keyboardType={keyboardType}
            value={value}
            onChangeText={text => onChangeText(property,text)}
            secureTextEntry={secureTextEntry}
          />
        </View>
  )
}
const styles = StyleSheet.create({
    formInput: {
        flexDirection: "row",
        marginTop: 30,
      },
      formText: {
        fontWeight: "bold",
        fontSize: 20,
      },
      formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBEB",
        marginLeft: 15,
      },
      formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
      },
})

export default CustomTextInput;
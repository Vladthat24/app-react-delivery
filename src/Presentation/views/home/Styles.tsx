import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    imageBackground: {
      width: "100%",
      height: "100%",
      opacity: 8.7,
      bottom: "30%",
    },
    form: {
      width: "100%",
      height: "40%",
      backgroundColor: "white",
      bottom: 0,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      position: "absolute",
      padding: 30,
    },
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
    formRegister: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 30,
    },
    formRegisterText: {
      fontStyle: "italic",
      color: "orange",
      borderBottomWidth: 1,
      borderBottomColor: "orange",
      fontWeight: "bold",
      marginLeft: 10,
    },
    logoContainer: {
      position: "absolute",
      alignSelf: "center",
      top: "15%",
    },
    logoImage: {
      width: 100,
      height: 100,
      alignSelf: "center",
    },
    logoText: {
      color: "white",
      textAlign: "center",
      fontSize: 20,
      marginTop: 10,
      fontWeight: "bold",
    },
  });

  export default HomeStyles;
import { StyleSheet } from "react-native";

const ClientAddressMapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent:"center",
    alignItems:'center'
  },
  imageLocation:{
    width: "65px",
    height: "65px",
    justifyContent:'center',
    position:'absolute'
  },
  refPoint:{
    top:40,
    borderRadius:15,
    justifyContent:"center",
    alignContent:'center',
    position:"absolute",
    backgroundColor:'#d4d4d4',
    width:'70%',
    paddingVertical:4
  },
  refPointText:{
    textAlign:'center',
  },
  buttonRefPoint:{
    position:'absolute',
    bottom:40,
    width:7
  }
});

export default ClientAddressMapStyles;

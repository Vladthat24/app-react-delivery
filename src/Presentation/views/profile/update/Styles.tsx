import { StyleSheet } from "react-native";

const ProfileUpdateStyles = StyleSheet.create({
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
    height: "50%",
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
  formInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  formContent: {
    marginLeft: 15,
  },
  formTextDescription: {
    fontSize: 12,
    color: "gray",
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
    top: "11%",
  },
  logoImage: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 100,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  formImage: {
    width: 30,
    height: 30,
  },
  logout: {
    position: "absolute",
    top: 30,
    right: 15,
  },
  logoutImage: {
    width: 40,
    height: 40,
  }
});

export default ProfileUpdateStyles;

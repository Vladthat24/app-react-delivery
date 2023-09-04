import React, { useEffect,useState } from "react";
import { Text, View, Image, ScrollView, ToastAndroid,TouchableOpacity } from "react-native";
import RounderButton from "../../../Presentation/components/RounderButton";
import useViewModel from "./ViewModel";
import CustomElementRegistry from "../../../Presentation/components/CustomTextInput";
import styles from "./Styles";
import ModalPickImage from "../../components/ModalPickImage";

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    email,
    image,
    phone,
    password,
    confirmPassword,
    onChange,
    register,
    pickerImage,
    errorMessage,
  } = useViewModel();

  const [modalVisible,setModalVisible]=useState(false);

  useEffect(() => {
    if (errorMessage != "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={()=>setModalVisible(true)}>
          {
            image==''
            ? <Image
            style={styles.logoImage}
            source={require("../../../../assets/user_image.png")}/>
            : <Image
            style={styles.logoImage}
            source={{ uri: image }}/>

          }

        </TouchableOpacity>

        <Text style={styles.logoText}>Seleccionar Imagen</Text>
      </View>
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Registarse</Text>

          <CustomElementRegistry
            placerholder="Nombres"
            keyboardType="default"
            image={require("../../../../assets/user.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomElementRegistry
            placerholder="Apellidos"
            keyboardType="default"
            image={require("../../../../assets/my_user.png")}
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />
          <CustomElementRegistry
            placerholder="Cel/Telf"
            keyboardType="numeric"
            image={require("../../../../assets/phone.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
          />
          <CustomElementRegistry
            placerholder="Correo Eletronico"
            keyboardType="email-address"
            image={require("../../../../assets/email.png")}
            property="email"
            onChangeText={onChange}
            value={email}
          />
          <CustomElementRegistry
            placerholder="Contraseña"
            keyboardType="default"
            image={require("../../../../assets/password.png")}
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />
          <CustomElementRegistry
            placerholder="Confirmar Contraseña"
            keyboardType="default"
            image={require("../../../../assets/confirm_password.png")}
            property="confirmPassword"
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry={true}
          />
          <View style={{ marginTop: 30 }}>
            <RounderButton
              text="Confirmar"
              onPress={() => {
                register();
              }}
            />
          </View>
        </ScrollView>
      </View>

      <ModalPickImage
        openGallery={pickerImage}
        openCamara={pickerImage}
        modalUseState={modalVisible}
        setModalUserState={setModalVisible}
      />
    </View>
  );
};

export default RegisterScreen;

import React, { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator, ScrollView, ToastAndroid, TouchableOpacity } from "react-native";
import RounderButton from "../../../../Presentation/components/RounderButton";
import useViewModel from "./ViewModel";
import CustomElementRegistry from "../../../../Presentation/components/CustomTextInput";
import styles from "./Styles";
import ModalPickImage from "../../../components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { MyColors } from "../../../theme/AppThemes";

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> { };

//route=>Obtiene informacion se que envia de otras pantallas
export const ProfileUpdateScreen = ({ navigation, route }: Props) => {

  const {user}=route.params;
  
  const {
    name,
    lastname,
    image,
    phone,
    loading,
    onChange,
    update,
    onChangeInfoUpdate,
    pickerImage,
    takePhoto,
    errorMessage,
    successMessage,
  } = useViewModel(user);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage != "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);


  useEffect(() => {
    if (successMessage != "") {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage]);


  useEffect(()=>{
    console.log("prueba: user: ",user);
    onChangeInfoUpdate(user?.name!,user?.lastname!,user?.phone!);
  },[user])

  return (
    <View style={styles.container}>

      <Image
        style={styles.imageBackground}
        source={require("../../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {
            image == ''
              ? <Image
                style={styles.logoImage}
                source={{uri:user?.image}} />
              : <Image
                style={styles.logoImage}
                source={{ uri: image }} />

          }

        </TouchableOpacity>

        <Text style={styles.logoText}>Seleccionar Imagen</Text>
      </View>
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>ACTUALIZAR</Text>

          <CustomElementRegistry
            placerholder="Nombres"
            keyboardType="default"
            image={require("../../../../../assets/user.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomElementRegistry
            placerholder="Apellidos"
            keyboardType="default"
            image={require("../../../../../assets/my_user.png")}
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />
          <CustomElementRegistry
            placerholder="Cel/Telf"
            keyboardType="numeric"
            image={require("../../../../../assets/phone.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
          />
          <View style={{ marginTop: 30 }}>
            <RounderButton
              text="Confirmar"
              onPress={() => {
                update();
              }}
            />
          </View>
        </ScrollView>
      </View>

      <ModalPickImage
        openGallery={pickerImage}
        openCamara={takePhoto}
        modalUseState={modalVisible}
        setModalUserState={setModalVisible}
      />
      {
        loading &&
        <ActivityIndicator 
        size="large" 
        color={MyColors.primary} />
      }

    </View>
  );
};

export default ProfileUpdateScreen;

import React, { useState,useEffect } from "react";
import { View, Pressable, Image, ActivityIndicator, ToastAndroid } from "react-native";
import styles from "./Styles";
import CustomTextInput from "../../../../components/CustomTextInput";
import useViewModel from "./ViewModel";
import RounderButton from "../../../../components/RounderButton";
import ModalPickImage from "../../../../components/ModalPickImage";
import { MyColors } from "../../../../theme/AppThemes";

export const ClientAddressCreateScreen = () => {
  const {
    name,
    description,
    image,
    onChange,
    responseMessage,
    loading,
    pickerImage,
    takePhoto,
    createCategory,
  } = useViewModel();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(()=>{
    if(responseMessage!==''){
      ToastAndroid.show(responseMessage,ToastAndroid.LONG);
    }
  },[responseMessage])

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={() => setModalVisible(true)}
      >
        {image == "" ? (
          <Image
            style={styles.image}
            source={require("../../../../../../assets/image_new.png")}
          />
        ) : (
          <Image style={styles.image} source={{ uri: image }} />
        )}
      </Pressable>

      <View style={styles.form}>
        <CustomTextInput
          placerholder="Nombre de la Dirección"
          image={require("../../../../../../assets/categories.png")}
          keyboardType="default"
          property="name"
          value={name}
          onChangeText={onChange}
        />
        <CustomTextInput
          placerholder="Nombre de la Dirección"
          image={require("../../../../../../assets/description.png")}
          keyboardType="default"
          property="description"
          value={description}
          onChangeText={onChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RounderButton text="CREAR DIRECCIÓN" onPress={() => createCategory()} />
      </View>

      <ModalPickImage
        openGallery={pickerImage}
        openCamara={takePhoto}
        modalUseState={modalVisible}
        setModalUserState={setModalVisible}
      />
      {loading && <ActivityIndicator size="large" color={MyColors.primary} />}
    </View>
  );
};

import React, { useState } from "react";
import { View, Text, Pressable, Image, ActivityIndicator } from "react-native";
import styles from "./Styles";
import CustomTextInput from "../../../../components/CustomTextInput";
import useViewModel from "./ViewModel";
import { onChange } from "react-native-reanimated";
import RounderButton from "../../../../components/RounderButton";
import ModalPickImage from "../../../../components/ModalPickImage";
import { MyColors } from "../../../../theme/AppThemes";

export const AdminCategoryCreateScreen = () => {
  const {
    name,
    descripcion,
    image,
    onChange,
    successMessage,
    errorMessage,
    loading,
    pickerImage,
    takePhoto,
  } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
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
          placerholder="Nombre de la Categoria"
          image={require("../../../../../../assets/categories.png")}
          keyboardType="default"
          property="name"
          value={name}
          onChangeText={onChange}
        />
        <CustomTextInput
          placerholder="Nombre de la Categoria"
          image={require("../../../../../../assets/description.png")}
          keyboardType="default"
          property="descripcion"
          value={descripcion}
          onChangeText={onChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RounderButton text="CREAR CATEGORIA" onPress={() => {}} />
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

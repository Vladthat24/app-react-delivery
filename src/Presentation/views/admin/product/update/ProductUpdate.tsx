import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import styles from "./Styles";
import CustomTextInput from "../../../../components/CustomTextInput";
import useViewModel from "./ViewModel";
import { onChange } from "react-native-reanimated";
import RounderButton from "../../../../components/RounderButton";
import ModalPickImage from "../../../../components/ModalPickImage";
import { MyColors } from "../../../../theme/AppThemes";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductStackParamList } from "../../../../navigator/AdminProductNavigator";
import ModalPickIMultipleImage from "../../../../components/ModalPickIMultipleImage";
import { ScrollView } from "react-native-gesture-handler";

interface Props
  extends StackScreenProps<ProductStackParamList, "AdminProductUpdateScreen"> {}

export const AdminProductUpdateScreen = ({ navigation, route }: Props) => {
  const { category ,product} = route.params;
  const {
    name,
    description,
    image1,
    image2,
    image3,
    price,
    onChange,
    responseMessage,
    loading,
    pickerImage,
    takePhoto,
    updateProduct,
  } = useViewModel(product,category);

  const [modalVisible, setModalVisible] = useState(false);
  const [numberImage, setNumberImage] = useState(1);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable
          onPress={() => {
            setNumberImage(1);
            setModalVisible(true);
          }}
        >
          {image1 == "" ? (
            <Image
              style={styles.image}
              source={require("../../../../../../assets/image_new.png")}
            />
          ) : (
            <Image style={styles.image} source={{ uri: image1 }} />
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            setNumberImage(2);
            setModalVisible(true);
          }}
        >
          {image2 == "" ? (
            <Image
              style={styles.image}
              source={require("../../../../../../assets/image_new.png")}
            />
          ) : (
            <Image style={styles.image} source={{ uri: image2 }} />
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            setNumberImage(3);
            setModalVisible(true);
          }}
        >
          {image3 == "" ? (
            <Image
              style={styles.image}
              source={require("../../../../../../assets/image_new.png")}
            />
          ) : (
            <Image style={styles.image} source={{ uri: image3 }} />
          )}
        </Pressable>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <View style={styles.categoryInfo}>
            <Image
              style={styles.imageCategory}
              source={require("../../../../../../assets/categories.png")}
            />

            <Text style={styles.textCategory}>Categoria Seleccionada </Text>
            <Text>{category.name}</Text>
          </View>
          <CustomTextInput
            placerholder="Nombre del Producto"
            image={require("../../../../../../assets/categories.png")}
            keyboardType="default"
            property="name"
            value={name}
            onChangeText={onChange}
          />
          <CustomTextInput
            placerholder="Descripcion"
            image={require("../../../../../../assets/description.png")}
            keyboardType="default"
            property="description"
            value={description}
            onChangeText={onChange}
          />
          <CustomTextInput
            placerholder="Precio"
            image={require("../../../../../../assets/price.png")}
            keyboardType="numeric"
            property="price"
            value={price}
            onChangeText={onChange}
          />
          <View style={styles.buttonContainer}>
            <RounderButton
              text="ACTUALIZAR PRODUCTO"
              onPress={() => updateProduct()}
            />
          </View>
        </ScrollView>
      </View>

      <ModalPickIMultipleImage
        openGallery={pickerImage}
        openCamara={takePhoto}
        modalUseState={modalVisible}
        setModalUserState={setModalVisible}
        numberImage={numberImage}
      />
      {loading && <ActivityIndicator size="large" color={MyColors.primary} />}
    </View>
  );
};

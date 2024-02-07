import React, { useState, useEffect } from "react";
import {
  View,
  Pressable,
  Image,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";
import CustomTextInput from "../../../../components/CustomTextInput";
import useViewModel from "./ViewModel";
import RounderButton from "../../../../components/RounderButton";
import ModalPickImage from "../../../../components/ModalPickImage";
import { MyColors } from "../../../../theme/AppThemes";
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../navigator/ClientStackNavigator";

interface Props extends StackScreenProps<ClientStackParamList,'ClientAddressMapScreen'>{};
export const ClientAddressCreateScreen = ({navigation,route}:Props) => {
  const {
    address,
    neighborhood,
    refPoint,
    onChange,
    responseMessage,
    loading,
    createCategory,
  } = useViewModel();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={styles.image}
          source={require("../../../../../../assets/map.png")}
        />
      </Pressable>

      <View style={styles.form}>
        <CustomTextInput
          placerholder="Nombre de la Dirección"
          image={require("../../../../../../assets/categories.png")}
          keyboardType="default"
          property="address"
          value={address}
          onChangeText={onChange}
        />
        <CustomTextInput
          placerholder="Descripción"
          image={require("../../../../../../assets/description.png")}
          keyboardType="default"
          property="neighborhood"
          value={neighborhood}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('ClientAddressMapScreen')}>
          <CustomTextInput
            placerholder="Punto de referencia"
            image={require("../../../../../../assets/description.png")}
            keyboardType="default"
            property="refPoint"
            value={refPoint}
            onChangeText={onChange}
            editable={false}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.buttonContainer}>
        <RounderButton
          text="CREAR DIRECCIÓN"
          onPress={() => createCategory()}
        />
      </View>

      {loading && <ActivityIndicator size="large" color={MyColors.primary} />}
    </View>
  );
};

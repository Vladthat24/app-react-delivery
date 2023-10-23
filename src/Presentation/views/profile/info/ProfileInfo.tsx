import React, { useEffect } from "react";
import { View, Text, Button, Image, Pressable } from "react-native";
import useViewModel from "./ViewModel";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import RounderButton from "../../../components/RounderButton";
import { TouchableOpacity } from "react-native-gesture-handler";

//interface Props extends StackScreenProps<RootStackParamList> {}

export const ProfileInfoScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { removeUserSession, user } = useViewModel();
  console.log("Hola user12312", JSON.stringify(user));
  //removeSession();
  useEffect(() => {
    if (user.id === "") {
      navigation.navigate("HomeScreen");
    }
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../../assets/city.jpg")}
      />

      <Pressable
        style={styles.logout}
        onPress={() => {
          removeUserSession();
        }}
      >
        <Image
          source={require("../../../../../assets/logout.png")}
          style={styles.logoutImage}
        />
      </Pressable>

      <View style={styles.logoContainer}>
        {user?.image !== "" && (
          <Image style={styles.logoImage} source={{ uri: user?.image }} />
        )}
      </View>
      <View style={styles.form}>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/user.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>
              {user?.name} {user?.lastname}
            </Text>
            <Text style={styles.formTextDescription}>Nombre del Usuario</Text>
          </View>
        </View>

        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/email.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.email}</Text>
            <Text style={styles.formTextDescription}>Correo Electronico</Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 70 }}>
          <Image
            source={require("../../../../../assets/phone.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{user?.phone}</Text>
            <Text style={styles.formTextDescription}>Teléfono</Text>
          </View>
        </View>
        <RounderButton
          onPress={() => {
            navigation.navigate("ProfileUpdateScreen", { user: user! });
          }}
          text="ACTUALIZAR INFORMACION"
        />
      </View>
      {/* <Button
        onPress={() => {
          removeSession();
          navigation.navigate('HomeScreen');
        }}
        title='Cerrar Sesion'
      /> */}
    </View>
  );
};

import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import RounderButton from "../../../Presentation/components/RounderButton";
import CustomElementRegistry from "../../../Presentation/components/CustomTextInput";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from './ViewModel';
import styles from "./Styles";

interface Props extends StackScreenProps<RootStackParamList,'HomeScreen'>{};

const HomeScreen = ({navigation,route}:Props) => {

  const { email, password, onChange,login,error,user } = useViewModel();

  useEffect(()=>{
    if(error!==''){
      ToastAndroid.show(error,ToastAndroid.LONG);
    }
  },[error])

  useEffect(() => {
    if(user?.id !==null && user?.id!==undefined  && user?.id!==''){
      if(user.roles?.length!>1){
        navigation.replace('RolesScreen');
      }else{
        //Tiene un solo role
        navigation.replace('ClientTabsNavigator');
      }
      
    } 
  }, [user])
  



  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require("../../../../assets/logo.png")} />
        <Text style={styles.logoText}>AyudaPE.</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomElementRegistry
          image={require('../../../../assets/email.png')}
          placerholder='Correo Electronico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />

        <CustomElementRegistry
          image={require('../../../../assets/password.png')}
          placerholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          {/*           <Button
                title="Enviar"
                onPress={() => ToastAndroid.show("Click", ToastAndroid.LONG)}
                color="orange"
              /> */}
          <RounderButton
            text="Iniciar"
            /* onPress={() => ToastAndroid.show("Click", ToastAndroid.SHORT)} */
            onPress={() => {login()}}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default HomeScreen;

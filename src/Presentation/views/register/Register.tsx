import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ToastAndroid,
} from "react-native";
import RounderButton from '../../../Presentation/components/RounderButton';
import useViewModel from './ViewModel';
import CustomElementRegistry from "../../../Presentation/components/CustomTextInput";


export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, onChange } = useViewModel();

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require("../../../../assets/chef.jpg")}
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={require("../../../../assets/user_image.png")} />
                <Text style={styles.logoText}>Seleccionar Imagen</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>Registarse</Text>

                <CustomElementRegistry
                    placerholder='Nombres'
                    keyboardType='default'
                    image={require("../../../../assets/user.png")}
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />

                <CustomElementRegistry
                    placerholder='Apellidos'
                    keyboardType='default'
                    image={require("../../../../assets/my_user.png")}
                    property='lastname'
                    onChangeText={onChange}
                    value={lastname}
                />
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require("../../../../assets/phone.png")}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder="Cel/Telf"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require("../../../../assets/email.png")}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder="Correo Electronico"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require("../../../../assets/password.png")}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder="Contraseña"
                        keyboardType="default"
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require("../../../../assets/confirm_password.png")}
                    />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder="Confirmar Contraseña"
                        keyboardType="default"
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    {/*           <Button
                    title="Enviar"
                    onPress={() => ToastAndroid.show("Click", ToastAndroid.LONG)}
                    color="orange"
                  /> */}
                    <RounderButton
                        text="Confirmar"
                        onPress={() => ToastAndroid.show("Click", ToastAndroid.SHORT)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        height: "70%",
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
        top: "5%",
    },
    logoImage: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    logoText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold",
    },
});

export default RegisterScreen;
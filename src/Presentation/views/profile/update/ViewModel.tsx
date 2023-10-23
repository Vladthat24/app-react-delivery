import React, { useState,useContext } from "react";
import * as ImagePicker from "expo-image-picker";
//Importar caso de uso
import { SaveUserLocalUseCase } from "../../../../Domain/useCases/userLocal/SaveUserLocal";
import { useUserLocal } from "../../../hooks/useUserLocal";
import { UpdateUserUseCase } from "../../../../Domain/useCases/user/UpdateUser";
import { UpdateWithImageUserUseCase } from "../../../../Domain/useCases/user/UpdateWithImageUser";
import { User } from "../../../../Domain/entities/User";
import { ResponseApiDelivery } from "../../../../Data/sources/remote/models/ResponseApiDelivery";
import { UserContext } from "../../../context/UserContext";

const ProfileUpdateViewModel = (user: User) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [values, setValues] = useState(user);
  const [successMessage,setSuccessMessage]=useState('');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const {getUsersSession} = useUserLocal();
  const {saveUserSession}= useContext(UserContext);

  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const onChangeInfoUpdate = (
    name: string,
    lastname: string,
    phone: string
  ) => {
    setValues({ ...values, name, lastname, phone });
  };

  const update = async () => {
    if (isValidForm()) {
      setLoading(true);

      let response = {} as ResponseApiDelivery;

      if(values.image?.includes('https://')){
        response = await UpdateUserUseCase(values);
      }else{
        
        response = await UpdateWithImageUserUseCase(values,file!);
        console.log("responseProfile: ",response);
        
      }
      
      setLoading(false);
      console.log('RESULT: ' + JSON.stringify(response));  

      if (response.success) {
        saveUserSession(response.data);
        setSuccessMessage(response.message);
      } else {
        setErrorMessage(response.message);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("Ingresar tu nombre");
      return false;
    }
    if (values.lastname === "") {
      setErrorMessage("Ingresar apellidos");
      return false;
    }
    if (values.phone === "") {
      setErrorMessage("Ingresar cel/telf");
      return false;
    }

    return true;
  };

  return {
    ...values,
    onChange,
    update,
    onChangeInfoUpdate,
    pickerImage,
    takePhoto,
    errorMessage,
    user,
    loading,
    successMessage,
  };
};

export default ProfileUpdateViewModel;

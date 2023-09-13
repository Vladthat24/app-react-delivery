import React,{useState} from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import * as ImagePicker from 'expo-image-picker';

const RegisterViewModel=()=> {

    const [errorMessage,setErrorMessage]=useState('');

    const [values,setValues]=useState({
        name:'',
        lastname:'',
        phone:'',
        email:'',
        image:'',
        password:'',
        confirmPassword:'',
    })

    const [file,setFile]= useState<ImagePicker.ImagePickerAsset>()
    
    const pickerImage=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
      })

      if(!result.canceled){
        onChange('image',result.assets[0].uri);
        setFile(result.assets[0]);
      }
    }

    const takePhoto=async()=>{
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
    })

    if(!result.canceled){
      onChange('image',result.assets[0].uri);
      setFile(result.assets[0]);
    }
  }

    const onChange=(property:string, value:any)=> {
        setValues({...values,[property]:value})
    }

    const register= async ()=>{
      if(isValidForm()){
        console.log("Values: ",values);
        console.log("File: ",file!);
        //const apiResponse= await RegisterAuthUseCase(values)
        const apiResponse=await RegisterWithImageAuthUseCase(values,file!);
        console.log('Result: '+ JSON.stringify(apiResponse));
      }else{
        console.log("No paso validacion");
        
      }
    }

    const isValidForm = (): boolean =>{
      if(values.name===''){
        setErrorMessage('Ingresar tu nombre');
        return false;
      }
      if(values.lastname===''){
        setErrorMessage('Ingresar apellidos');
        return false;
      }
      if(values.email===''){
        setErrorMessage('Ingresar email');
        return false;
      }
      if(values.phone===''){
        setErrorMessage('Ingresar cel/telf');
        return false;
      }
      if(values.password===''){
        setErrorMessage('Ingresar contraseña');
        return false;
      }
      if(values.confirmPassword===''){
        setErrorMessage('Ingresar la confirmacion de la contraseña');
        return false;
      }
      if(values.password!==values.confirmPassword){
        setErrorMessage('Las contraseñas no coninciden');
        return false;
      }
      if(values.image===''){
        setErrorMessage('Seleccione una imagen');
        return false;
      }
      return true;
    }

  return {
    ...values,
    onChange,
    register,
    pickerImage,
    takePhoto,
    errorMessage,
  }
}

export default RegisterViewModel;
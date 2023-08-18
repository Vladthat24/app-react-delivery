import React,{useState} from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';


const RegisterViewModel=()=> {

    const [errorMessage,setErrorMessage]=useState('');

    const [values,setValues]=useState({
        name:'',
        lastname:'',
        phone:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    
    const onChange=(property:string, value:any)=> {
        setValues({...values,[property]:value})
    }

    const register= async ()=>{
      if(isValidForm()){
        const apiResponse= await RegisterAuthUseCase(values)
        console.log('Result: '+ JSON.stringify(apiResponse));
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
      return true;
    }

  return {
    ...values,
    onChange,
    register,
    errorMessage,
  }
}

export default RegisterViewModel;
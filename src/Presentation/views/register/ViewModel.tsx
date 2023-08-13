import React,{useState} from 'react'

const RegisterViewModel=()=> {

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

  return {
    ...values,
    onChange,
  }
}

export default RegisterViewModel;
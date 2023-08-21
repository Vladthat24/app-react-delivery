import React, { useState } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";

const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setErrorMessage] = useState("");

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("Respuesta de login: " + JSON.stringify(response));
      if(!response.success){
        setErrorMessage(response.message);3
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Ingresar el correo");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresar la contraseña");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    login,
    error,
  };
};

export default HomeViewModel;

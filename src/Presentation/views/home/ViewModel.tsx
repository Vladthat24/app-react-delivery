import React, { useState, useEffect } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";
import { SaveUserCase } from "../../../Domain/useCases/userLocal/SaveUser";
import { GetUserUseCase } from "../../../Domain/useCases/userLocal/GetUser";
import { useUserLocal } from "../../hooks/useUserLocal";

const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setErrorMessage] = useState("");

  const { user } = useUserLocal();

  console.log("Usuario de sesion:" + JSON.stringify(user));

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("Respuesta de login: " + JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        await SaveUserCase(response.data);
        console.log("Usuario Guardado:");
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
    user,
  };
};

export default HomeViewModel;

import React, { useState, useEffect } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCases/auth/LoginAuth";
import { SaveUserLocalUseCase } from "../../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../../Domain/useCases/userLocal/GetUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";

const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setErrorMessage] = useState("");

  const { user,getUsersSession } = useUserLocal();

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
        await SaveUserLocalUseCase(response.data);
        getUsersSession();
        console.log("Usuario Guardado:",response);
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

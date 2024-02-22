import { useContext, useEffect, useState } from "react";
import { Address } from "../../../../../Domain/entities/Address";
import { UserContext } from "../../../../context/UserContext";
import { GetByUserAddressUserUseCase } from "../../../../../Domain/useCases/address/GetByUserAddress";

const ClientAddressListViewModel = () => {
  const [address, setAddress] = useState<Address[]>();
  const { user, saveUserSession, getUserSession } = useContext(UserContext);
  const [checked, setChecked] = useState("");

  useEffect(() => {
    getAddress();
    if (user.address !== null && user.address !== undefined) {
      changeRadioValue(user.address!);
      console.log("USUARIO CON DIRECCION: ", JSON.stringify(user));
    }
  }, [user]);

  const changeRadioValue = (address: Address) => {
    setChecked(address.id!);
    user.address = address;
    saveUserSession(user);
  };

  const getAddress = async () => {
    const result = await GetByUserAddressUserUseCase(user.id!);
    setAddress(result);
  };

  return {
    address,
    checked,
    getAddress,
    changeRadioValue,
  };
};

export default ClientAddressListViewModel;

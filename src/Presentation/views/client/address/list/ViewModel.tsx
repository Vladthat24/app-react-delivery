import { useContext, useEffect, useState } from "react";
import { Address } from "../../../../../Domain/entities/Address";
import { UserContext } from "../../../../context/UserContext";
import { GetByUserAddressUserUseCase } from "../../../../../Domain/useCases/address/GetByUserAddress";
import { CreateOrderUseCase } from "../../../../../Domain/useCases/order/CreateOrder";
import { ShoppingBagContext } from "../../../../context/ShoppingBagContext";
import { Order } from "../../../../../Domain/entities/Order";

const ClientAddressListViewModel = () => {
  const [address, setAddress] = useState<Address[]>();
  const { user, saveUserSession, getUserSession } = useContext(UserContext);
  const { shoppingBag } = useContext(ShoppingBagContext);
  const [checked, setChecked] = useState("");
  const [responseMessage,setResponseMessage]= useState('');
  
  useEffect(() => {
    getAddress();
    if (user.address !== null && user.address !== undefined) {
      changeRadioValue(user.address!);
      console.log("USUARIO CON DIRECCION: ", JSON.stringify(user));
    }
  }, [user]);

  const createOrder = async () => {
    const order: Order = {
      id_client: user.id!,
      id_address: user.address?.id!,
      products: shoppingBag,
    };
    const result = await CreateOrderUseCase(order);
    setResponseMessage(result.message);
  };

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
    createOrder,
    responseMessage,
    getAddress,
    changeRadioValue,
  };
};

export default ClientAddressListViewModel;

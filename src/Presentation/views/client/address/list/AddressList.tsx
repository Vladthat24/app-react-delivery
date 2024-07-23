import React, { useEffect } from "react";
import { Text, ToastAndroid, View } from "react-native";
import useViewModel from "./ViewModel";
import { FlatList } from "react-native-gesture-handler";
import { AddressListItem } from "./item";
import RounderButton from "../../../../components/RounderButton";

export const ClientAddressListScreen = () => {
  const {
    address,
    getAddress,
    responseMessage,
    createOrder,
    checked,
    changeRadioValue,
  } = useViewModel();

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={address}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <AddressListItem
            address={item}
            checked={checked}
            changeRadioValue={changeRadioValue}
          />
        )}
      />

      <View style={{width:'100%',paddingHorizontal:20,paddingVertical:20}}>
        <RounderButton onPress={()=> createOrder()} text="Continuar" />
      </View>
    </View>
  );
};

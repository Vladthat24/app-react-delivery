import React, { useEffect } from "react";
import { Text, View } from "react-native";
import useViewModel from "./ViewModel";
import { FlatList } from "react-native-gesture-handler";
import { AddressListItem } from "./item";

export const ClientAddressListScreen = () => {
  const { address, getAddress, checked, changeRadioValue } = useViewModel();

  /* useEffect(() => {
    getAddress();
  }, []); */

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
    </View>
  );
};

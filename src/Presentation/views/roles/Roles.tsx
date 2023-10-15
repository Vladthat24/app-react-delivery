import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import useViewModel from "./ViewModel";
import { RolesItem } from "./Item";

export const RolesScreen = () => {
  const { user } = useViewModel();

  const width= Dimensions.get('window').width;

  return (
    <View>
      <FlatList
        data={user?.roles}
        renderItem={({ item }) => (
          <RolesItem rol={item} height={420} width={width-100} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

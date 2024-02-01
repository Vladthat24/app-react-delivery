import React, { useEffect } from "react";
import { View, Text } from "react-native";
import useViewModel from "./ViewModel";
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../navigator/ClientStackNavigator";
import { FlatList } from "react-native-gesture-handler";
import { ClientProductListItem } from "./item";

interface Props
  extends StackScreenProps<ClientStackParamList, "ClientProductListScreen"> {}

export const ClientProductListScreen = ({ navigation, route }: Props) => {
  const { idCategory } = route.params;
  const { products, getProducts } = useViewModel();

  useEffect(() => {
    getProducts(idCategory);
  }, []);
  console.log("Producto .:",products);
  
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => <ClientProductListItem product={item} navigation={navigation}/>}
      />
    </View>
  );
};

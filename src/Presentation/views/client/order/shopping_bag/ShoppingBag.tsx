import React from "react";
import { Text, View } from "react-native";
import useViewModel from './ViewModel';
import { FlatList } from "react-native-gesture-handler";
import { ShoppingBagItem } from "./item";
import RounderButton from "../../../../components/RounderButton";
import styles from "./Styles";

export const ClientShoppingBagScreen = () => {

    const {shoppingBag, total, addItem,subtractItem,_deleteItem}=useViewModel();

  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingBag}
        keyExtractor={(item)=>item.id!}
        renderItem={({item})=><ShoppingBagItem product={item} 
            addItem={addItem}
            subtracItem={subtractItem}
            deleteITem={_deleteItem}
        />}
      />
      <View style={styles.totalToPay}>
        <View style={styles.totalInfo}>
            <Text style={styles.totalText}>Total</Text>
            <Text>S/. {total} </Text>
        </View>
        <View style={styles.buttonAdd}>
            <RounderButton text='CONFIRMAR ORDEN' onPress={()=>{}}/>
        </View>
      </View>
    </View>
  );
};

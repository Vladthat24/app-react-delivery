import React from "react";
import { Order } from "../../../../../Domain/entities/Order";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { DateFormatter } from "../../../../utils/DateFormatter";
import { AdminOrderStackParamList } from "../../../../navigator/AdminOrderStackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  order: Order;
  navigation: StackNavigationProp<
    AdminOrderStackParamList,
    "AdminOrderListScreem",
    undefined
  >;
}

export const OrderListItem = ({ order, navigation }: Props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AdminOrderDetailScreen", { order: order })
      }
    >
      <View style={styles.container}>
        <Text style={styles.order}>Order # {order.id}</Text>
        <Text style={{ ...styles.info, marginTop: 10 }}>
          Fecha del perdido: {DateFormatter(order.timestamp!)}
        </Text>
        <Text style={styles.info}>Cliente: {order.client?.name}</Text>
        <Text style={styles.info}>Direccion: {order.address?.address}</Text>
        <Text style={styles.info}>Zona: {order.address?.neighborhood}</Text>
        <View style={styles.divider}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  order: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginTop: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#e2e2e2",
    marginTop: 10,
  },
  info: {
    fontSize: 13,
  },
});

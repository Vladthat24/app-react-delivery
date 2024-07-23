import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AdminOrderListScreem } from "../views/admin/order/list/OrderList";
import { AdminOrderDetailScreen } from "../views/admin/order/detail/OrderDetail";
import { Order } from "../../Domain/entities/Order";

export type AdminOrderStackParamList = {
  AdminOrderListScreem: undefined;
  AdminOrderDetailScreen: { order: Order };
};

const Stack = createNativeStackNavigator<AdminOrderStackParamList>();

export const AdminOrderStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AdminOrderListScreem"
        component={AdminOrderListScreem}
      />
      <Stack.Screen
        name="AdminOrderDetailScreen"
        component={AdminOrderDetailScreen}
        options={{
          headerShown: true,
          title: "Detalle de la Orden",
        }}
      />
    </Stack.Navigator>
  );
};

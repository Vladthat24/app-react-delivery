import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/home/Home";
import { AdminCategoryListScreem } from "../views/admin/category/list/CategoryList";
import { AdminOrderListScreem } from "../views/admin/order/list/OrderList";
import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { Image, Pressable } from "react-native";
import { AdminCategoryNavigator } from "./AdminCategoryNavigator";

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Tab.Screen
        name="AdminCategoryNavigator"
        component={AdminCategoryNavigator}
        options={{
          title: "Listado",
          tabBarLabel: "Listado",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/list.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AdminOrderListScreem"
        component={AdminOrderListScreem}
        options={{
          title: "Pedidos",
          tabBarLabel: "Pedidos",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/orders.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        options={{
          title: "Perfil",
          tabBarLabel: "Perfil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/user_menu.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

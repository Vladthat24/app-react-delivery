import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/home/Home";
import { ClientCategoryListScreem } from "../views/client/category/list/CategoryList";
import { ClientOrderListScreem } from "../views/client/order/list/OrderList";
import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ClientCategoryListScreem"
        component={ClientCategoryListScreem}
        options={{
          title: "Categorias",
          tabBarLabel: "Categorias",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/list.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ClientOrderListScreem"
        component={ClientOrderListScreem}
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
          headerShown:false,
          tabBarLabel: "Perfil",
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

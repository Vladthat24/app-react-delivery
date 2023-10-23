import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/home/Home";
import { AdminCategoryListScreem } from "../views/admin/category/list/CategoryList";
import { AdminOrderListScreem } from "../views/admin/order/list/OrderList";
import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { Image, Pressable } from "react-native";

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminCategoryListScreem"
        component={AdminCategoryListScreem}
        options={({ route, navigation }) => ({
          title: "Categorias",
          tabBarLabel: "Categorias",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/list.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("AdminCategoryCreateScreen")}
            >
              <Image
                source={require("../../../assets/add.png")}
                style={{ width: 35, height: 35, marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
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

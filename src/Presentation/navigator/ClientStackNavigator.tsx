import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientCategoryListScreen } from "../views/client/category/list/CategoryList";
import { ClientProductListScreen } from "../views/client/product/list/ProductList";
import { Product } from "../../Domain/entities/Product";
import { ClientProductDetailScreen } from "../views/client/product/list/detail/ProductDetail";
import { ShoppingBagProvider } from "../context/ShoppingBagContext";
import { Image, Pressable } from "react-native";
import { ClientShoppingBagScreen } from "../views/client/shopping_bag/ShoppingBag";
import { ClientAddressListScreen } from "../views/client/address/list/AddressList";
import { ClientAddressCreateScreen } from "../views/client/address/create/AddressCreate";

export type ClientStackParamList = {
  ClientCategoryListScreen: undefined;
  ClientProductListScreen: { idCategory: string };
  ClientProductDetailScreen: { product: Product };
  ClientShoppingBagScreen: undefined;
  ClientAddressListScreen: undefined;
  ClientAddressCreateScreen: undefined;
};

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
  return (
    <ShoppingBagState>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="ClientCategoryListScreen"
          component={ClientCategoryListScreen}
          options={({ route, navigation }) => ({
            title: "Categorias",
            headerShown: true,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("ClientShoppingBagScreen")}
              >
                <Image
                  source={require("../../../assets/shopping_cart.png")}
                  style={{ width: 30, height: 30 }}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ClientProductListScreen"
          component={ClientProductListScreen}
          options={({ route, navigation }) => ({
            title: "Productos",
            headerShown: true,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("ClientShoppingBagScreen")}
              >
                <Image
                  source={require("../../../assets/shopping_cart.png")}
                  style={{ width: 30, height: 30 }}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ClientProductDetailScreen"
          component={ClientProductDetailScreen}
        />

        <Stack.Screen
          name="ClientShoppingBagScreen"
          component={ClientShoppingBagScreen}
          options={{
            headerShown: true,
            title: "Mi Orden",
          }}
        />

        <Stack.Screen
          name="ClientAddressListScreen"
          component={ClientAddressListScreen}
          options={({ route, navigation }) => ({
            title: "Mis Direcciones",
            headerShown: true,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("ClientAddressCreateScreen")}
              >
                <Image
                  source={require("../../../assets/add.png")}
                  style={{ width: 30, height: 30 }}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ClientAddressCreateScreen"
          component={ClientAddressCreateScreen}
          options={{
            headerShown: true,
            title: "Nueva Dirección",
          }}
        />
      </Stack.Navigator>
    </ShoppingBagState>
  );
};

//Propagacion de bolda de shopping
const ShoppingBagState = ({ children }: any) => {
  return <ShoppingBagProvider>{children}</ShoppingBagProvider>;
};

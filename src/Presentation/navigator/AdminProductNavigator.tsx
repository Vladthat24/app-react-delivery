import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AdminProductListScreen } from "../views/admin/product/list/ProductList";
import { Category } from "../../Domain/entities/Category";
import { CategoryStackParamList } from "./AdminCategoryNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { AdminProductCreateScreen } from "../views/admin/product/create/ProductCreate";
import { Image, Pressable } from "react-native";
import { ProductProvider } from "../context/ProductContext";

export type ProductStackParamList = {
  AdminProductListScreen: { category: Category };
  AdminProductCreateScreen: { category: Category };
};

const Stack = createNativeStackNavigator<ProductStackParamList>();
interface Props
  extends StackScreenProps<CategoryStackParamList, "AdminProductNavigator"> { }

export const AdminProductNavigator = ({ navigation, route }: Props) => {
  return (
    <ProductState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AdminProductListScreen"
          component={AdminProductListScreen}
          initialParams={{ category: route.params.category }}
          options={({ route, navigation }) => ({
            title: "Productos",
            headerShown: true,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("AdminProductCreateScreen")}
              >
                <Image
                  source={require("../../../assets/add.png")}
                  style={{ width: 35, height: 35 }}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="AdminProductCreateScreen"
          component={AdminProductCreateScreen}
          initialParams={{ category: route.params.category }}
          options={{
            headerShown: true,
            title: "Nuevo Producto"
          }}
        />
      </Stack.Navigator>
    </ProductState>

  );
};


const ProductState = ({ children }: any) => {
  return (
    <ProductProvider>{children}</ProductProvider>
  )
}

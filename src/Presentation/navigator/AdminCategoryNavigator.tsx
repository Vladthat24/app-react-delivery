import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Category } from "../../Domain/entities/Category";
import { CategoryProvider } from "../context/CategoryContext";
import { AdminCategoryCreateScreen } from "../../../src/Presentation/views/admin/category/create/CategoryCreate";
import { AdminCategoryUpdateScreen } from "../../../src/Presentation/views/admin/category/update/CategoryUpdate";
import { AdminCategoryListScreem } from "../views/admin/category/list/CategoryList";
import { Image, Pressable } from "react-native";

export type CategoryStackParamList = {
  AdminCategoryListScreem: undefined;
  AdminCategoryCreateScreen: undefined;
  AdminCategoryUpdateScreen: { category: Category };
};

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export const AdminCategoryNavigator = () => {
  return (
    <CategoryState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AdminCategoryListScreem"
          component={AdminCategoryListScreem}
          options={({ route, navigation }) => ({
            title: "Categorias",
            headerShown:true,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("AdminCategoryCreateScreen")}
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
          name="AdminCategoryCreateScreen"
          component={AdminCategoryCreateScreen}
          options={{
            headerShown: true,
            title: "Nueva categoria",
          }}
        />
        <Stack.Screen
          name="AdminCategoryUpdateScreen"
          component={AdminCategoryUpdateScreen}
          options={{
            headerShown: true,
            title: "Editar categoria",
          }}
        />
      </Stack.Navigator>
    </CategoryState>
  );
};

const CategoryState = ({ children }: any) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};

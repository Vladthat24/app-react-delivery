import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientCategoryListScreen } from "../views/client/category/list/CategoryList";
import { ClientProductListScreen } from "../views/client/product/list/ProductList";
import { Product } from "../../Domain/entities/Product";
import { ClientProductDetailScreen } from "../views/client/product/list/detail/ProductDetail";


export type ClientStackParamList = {
  ClientCategoryListScreen: undefined,
  ClientProductListScreen:{idCategory:string},
  ClientProductDetailScreen:{product:Product},
};

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ClientCategoryListScreen"
        component={ClientCategoryListScreen}
        options={{
            headerShown:true,
            title:"Categorias"
        }}
      />
      <Stack.Screen
        name="ClientProductListScreen"
        component={ClientProductListScreen}
        options={{
            headerShown:true,
            title:'Productos'
        }}
      />
      <Stack.Screen
        name="ClientProductDetailScreen"
        component={ClientProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

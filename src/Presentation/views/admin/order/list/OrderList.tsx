import React, { useEffect } from "react";
import { Text, View } from "react-native";
import userViewModel from "./ViewModal";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { FlatList } from "react-native-gesture-handler";
import { OrderListItem } from "./Item";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AdminOrderStackParamList } from "../../../../navigator/AdminOrderStackNavigator";

interface Props {
  status: string;
}
const OrderListView = ({ status }: Props) => {
  const {
    ordersPayed,
    ordersDelivery,
    ordersDispatched,
    ordersOnTheWay,
    getOrders,
  } = userViewModel();
  const navigation =
    useNavigation<
      StackNavigationProp<AdminOrderStackParamList, "AdminOrderListScreem">
    >();

  useEffect(() => {
    getOrders(status);
  }, []);

  return (
    <View>
      <FlatList
        data={
          status == "PAGADO"
            ? ordersPayed
            : status == "DESPACHADO"
            ? ordersDispatched
            : status == "EN CAMINO"
            ? ordersOnTheWay
            : status == "ENTREGADO"
            ? ordersDelivery
            : []
        }
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <OrderListItem order={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const renderScene = ({ route }: any) => {
  switch (route.key) {
    case "first":
      return <OrderListView status="PAGADO" />;
    case "second":
      return <OrderListView status="DESPACHADO" />;
    case "third":
      return <OrderListView status="EN CAMINO" />;
    case "fourth":
      return <OrderListView status="ENTREGADO" />;
    default:
      return <OrderListView status="PAGADO" />;
  }
};

export const AdminOrderListScreem = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "PAGADO" },
    { key: "second", title: "DESPACHADO" },
    { key: "third", title: "EN CAMINO" },
    { key: "fourth", title: "ENTREGADO" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: "#e2e2e2" }}
          activeColor="black"
          inactiveColor="gray"
          scrollEnabled={true}
          style={{
            paddingTop: 10,
            backgroundColor: "white",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )}
    />
  );
};

import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Styles";
import { FlatList } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { AdminOrderStackParamList } from "../../../../navigator/AdminOrderStackNavigator";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { OrderDetailItem } from "./item";
import { DateFormatter } from "../../../../utils/DateFormatter";
import useViewModel from "./ViewModal";

interface Props
  extends StackScreenProps<
    AdminOrderStackParamList,
    "AdminOrderDetailScreen"
  > {}
export const AdminOrderDetailScreen = ({ navigation, route }: Props) => {
  const { order } = route.params;
  const {total}=useViewModel(order);

  return (
    <View style={styles.container}>
      <View style={styles.products}>
        <FlatList
          data={order.products}
          keyExtractor={(item) => item.id!}
          renderItem={({ item }) => <OrderDetailItem product={item} />}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Fecha del pedido</Text>
            <Text style={styles.infoDescription}>
              {DateFormatter(order.timestamp!)}
            </Text>
          </View>
          <Image
            style={styles.infoImage}
            source={require("../../../../../../assets/reloj.png")}
          />
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Cliente y telefono</Text>
            <Text style={styles.infoDescription}>
              {order.client?.name} {order.client?.lastname} - {order.client?.phone}
            </Text>
          </View>
          <Image
            style={styles.infoImage}
            source={require("../../../../../../assets/user.png")}
          />
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Direccion de Entrega</Text>
            <Text style={styles.infoDescription}>
              {order.address?.address} - {order.address?.neighborhood}
            </Text>
          </View>
          <Image
            style={styles.infoImage}
            source={require("../../../../../../assets/location.png")}
          />
        </View>

        <Text style={styles.deliveries}>REPARTIDORES DISPONIBLES</Text>
        <View>
          <Text>TOTAL: {total}</Text>
        </View>
      </View>
    </View>
  );
};

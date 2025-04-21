import React, { useEffect } from "react";
import { Image, Text, ToastAndroid, View } from "react-native";
import styles from "./Styles";
import { FlatList } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { AdminOrderStackParamList } from "../../../../navigator/AdminOrderStackNavigator";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { OrderDetailItem } from "./item";
import { DateFormatter } from "../../../../utils/DateFormatter";
import useViewModel from "./ViewModal";
import RounderButton from "../../../../components/RounderButton";
import DropDownPicker from "react-native-dropdown-picker";

interface Props
  extends StackScreenProps<
    AdminOrderStackParamList,
    "AdminOrderDetailScreen"
  > {}
export const AdminOrderDetailScreen = ({ navigation, route }: Props) => {
  const { order } = route.params;
  const {
    total,
    getTotal,
    deliveryMen,
    getDeliveryMen,
    open,
    setOpen,
    value,
    setValue,
    items,
    setItems,
    dispatchOrder,
    responseMessage,
  } = useViewModel(order);

  useEffect(()=>{
    if(responseMessage !==""){
      ToastAndroid.show(responseMessage,ToastAndroid.LONG);
    }
  },[responseMessage])
  
  useEffect(() => {
    if (total === 0.0) {
      getTotal();
    }

    getDeliveryMen();
  }, []);

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
              {order.client?.name} {order.client?.lastname} -{" "}
              {order.client?.phone}
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

        {
          order.status=='PAGADO'
          ?  
          <View>
            <Text style={styles.deliveries}>REPARTIDORES DISPONIBLES</Text>
            <View style={styles.dropDown}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
          </View>
          :  <Text style={styles.deliveries}>REPARTIDORES ASIGNADO: {order.delivery?.name}</Text>  
        }

        <View style={styles.totalInfo}>
          <Text style={styles.total}>TOTAL: {total}</Text>
          <View style={styles.button}>
          {
            order.status =='PAGADO' &&
            <RounderButton text="DESPACHAR ORDER" onPress={() => dispatchOrder()} />
          }
          </View>
        </View>
      </View>
    </View>
  );
};

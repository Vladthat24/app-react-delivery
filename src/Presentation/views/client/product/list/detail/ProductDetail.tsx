import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { ClientStackParamList } from "../../../../../navigator/ClientStackNavigator";
import styles from "./Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import useViewModel from "./ViewModel";
import RounderButton from "../../../../../components/RounderButton";

interface Props
  extends StackScreenProps<ClientStackParamList, "ClientProductDetailScreen"> {}

export const ClientProductDetailScreen = ({ navigation, route }: Props) => {
  const { product } = route.params;

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const { shoppingBag,productImageList, quantity, price,addToBag, addItem, removeItem } =
    useViewModel(product);

  return (
    <View style={styles.container}>

      <GestureHandlerRootView>
        <Carousel
          loop={false}
          width={width}
          height={height / 1.3}
          autoPlay={true}
          data={productImageList}
          autoPlayInterval={10000}
          scrollAnimationDuration={10000}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.productImage} />
          )}
        />
      </GestureHandlerRootView>
      <View style={styles.productDetail}>
        <View style={styles.productInfo}>
          <Text style={styles.name}>{product.name}</Text>

          <View style={styles.divider}></View>

          <Text style={styles.descriptionTitle}>Descripcion</Text>
          <Text style={styles.descriptionContent}>{product.description}</Text>

          <View style={styles.divider}></View>

          <Text style={styles.descriptionTitle}>Precio</Text>
          <Text style={styles.descriptionContent}>S./ {product.price}</Text>

          <View style={styles.divider}></View>

          <Text style={styles.descriptionTitle}>Tu Orden</Text>
          <Text style={styles.descriptionContent}>Cantidad: {quantity} </Text>
          <Text style={styles.descriptionContent}>
            Precio Total: S./ {price}
          </Text>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.productActions}>
          <TouchableOpacity
            style={styles.actionLess}
            onPress={() => removeItem()}
          >
            <Text style={styles.actionText}>-</Text>
          </TouchableOpacity>
          <View style={styles.quantity}>
            <Text style={styles.actionText}>{quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.actionAdd}
            onPress={() => {
              addItem();
            }}
          >
            <Text style={styles.actionText}>+</Text>
          </TouchableOpacity>

          <View style={styles.buttonAdd}>
            <RounderButton text="AGREGAR" onPress={() => addToBag()} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={()=>navigation.pop()} 
        style={styles.back}>
        <Image
          style={styles.backImage}
          source={require("../../../../../../../assets/back.png")}
        />
      </TouchableOpacity>

    </View>
  );
};

import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Product } from "../../../../../Domain/entities/Product";
import { ProductStackParamList } from "../../../../navigator/AdminProductNavigator";
import { Category } from "../../../../../Domain/entities/Category";

interface Props {
  product: Product;
  category:Category;
  remove:(product:Product)=>void;
}

export const AdminProductListItem = ({ product,category,remove }: Props) => {
    console.log("Producto en AdminProudctLisItem: ",product );
    
    const navigation =useNavigation<StackNavigationProp<ProductStackParamList>>();

  return (
    <Pressable
      //onPress={()=>navigation.navigate('AdminProductNavigator',{category:category})}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image3 }} />
        <View style={styles.info}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}> S./ {product.price}</Text>
        </View>
        <View style={styles.acctionContainer}>
          <Pressable
            onPress={()=>navigation.navigate('AdminProductUpdateScreen',{product:product, category:category})}
          >
            <Image
              style={styles.acctionImage}
              source={require("../../../../../../assets/edit.png")}
            />
          </Pressable>
          <Pressable 
            onPress={()=>remove(product)}>
            <Image
              style={styles.acctionImage}
              source={require("../../../../../../assets/trash.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.divider}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 90,
    marginHorizontal: 20,
    marginTop: 10,
    paddingTop:10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 15,
  },
  description: {
    color: "gray",
    fontSize: 12,
    marginTop: 3,
  },
  price:{
    color:"green",
    fontSize: 12,
    fontWeight:'bold'
  },
  acctionContainer: {
    marginRight: 40,
  },
  acctionImage: {
    width: 25,
    height: 25,
    marginVertical: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#f2f2f2",
    marginHorizontal:30,
    flex: 1,
  },
});

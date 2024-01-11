import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryStackParamList } from "../../../../navigator/AdminCategoryNavigator";
import { Product } from "../../../../../Domain/entities/Product";

interface Props {
  product: Product;
  remove:(id:string)=>void;
}

export const AdminProductListItem = ({ product,remove }: Props) => {

    const navigation =useNavigation<StackNavigationProp<CategoryStackParamList>>();

  return (
    <Pressable
      //onPress={()=>navigation.navigate('AdminProductNavigator',{category:category})}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image1 }} />
        <View style={styles.info}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.acctionContainer}>
          <Pressable
            //onPress={()=>navigation.navigate('AdminCategoryUpdateScreen',{category:category})}
          >
            <Image
              style={styles.acctionImage}
              source={require("../../../../../../assets/edit.png")}
            />
          </Pressable>
          <Pressable 
            onPress={()=>remove(product.id!)}>
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
    height: 70,
    marginHorizontal: 20,
    marginTop: 10,
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

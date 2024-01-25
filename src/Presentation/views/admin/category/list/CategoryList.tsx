import React, { useEffect } from "react";
import { Text, ToastAndroid, View } from "react-native";
import useViewModel from "./ViewModel";
import { FlatList } from "react-native-gesture-handler";
import { AdminCategoryListItem } from "./item";

export const AdminCategoryListScreem = () => {
  const { categories, responseMessage, getCategories, deleteCategories } =
    useViewModel();

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <AdminCategoryListItem category={item} remove={deleteCategories} />
        )}
      />
    </View>
  );
};

import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import useViewModel from './ViewModel';
import { AdminProductListItem } from './item';

interface Props extends StackScreenProps<ProductStackParamList,'AdminProductListScreen'>{};

export const AdminProductListScreen = ({navigation,route}:Props) => {

  const {category}=route.params;
  const {products,getProducts}= useViewModel();
  
  useEffect(()=>{
    getProducts(category.id!);
  },[])
  return (
    <View style={{backgroundColor:'white'}}>
        <FlatList
          data={products}
          keyExtractor={(item)=>item.id!}
          renderItem={(({item})=> <AdminProductListItem product={item} remove={()=>{}}/>)}
        >
        </FlatList>
    </View>
  )
}

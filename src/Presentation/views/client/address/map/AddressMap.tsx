import React, { useEffect } from "react";
import {Image, Text, ToastAndroid, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./Styles";
import useViewModel from "./ViewModel";
import RounderButton from "../../../../components/RounderButton";
import stylesMap from "./StylesMap";


export const ClientAddressMapScreen = () => {
  const { messagePermissions, position, mapRef,onRegionChangeComplete,name } = useViewModel();

  useEffect(() => {
    if (messagePermissions != "") {
      ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
    }
  }, [messagePermissions]);
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        customMapStyle={stylesMap}
        style={{ height: "100%", width: "100%" }}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={(region)=>{
          onRegionChangeComplete(region.latitude,region.longitude);
        }}
      />
       <Image
        source={require("../../../../../../assets/location_home.png")}
        style={styles.imageLocation}
      />
      <View style={styles.refPoint}>
        <Text style={ styles.refPointText}>
          {name}
        </Text>
      </View>
      <View style={styles.buttonRefPoint}>
        <RounderButton
          text="Seleccionar Punto"
          onPress={()=>{}}
        />
      </View>
    </View>
  );
};

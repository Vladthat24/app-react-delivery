import { StyleSheet, View, Text } from "react-native";
import { Address } from "../../../../../Domain/entities/Address";
import { RadioButton } from "react-native-paper";
import { add } from "react-native-reanimated";

interface Props {
  address: Address;
  checked: string;
  changeRadioValue: (address: Address) => void;
}

export const AddressListItem = ({
  address,
  checked,
  changeRadioValue,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <RadioButton
          value={address.id!}
          status={checked === address.id ? "checked" : "unchecked"}
          onPress={() => changeRadioValue(address)}
        />
        <View style={styles.infoAddress}>
          <Text style={styles.address}>{address.address}</Text>
          <Text style={styles.neighborhood}>{address.neighborhood}</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginTop:15
  },
  info: {
    flexDirection: "row",
  },
  divider:{
    width:'100%',
    height:1,
    backgroundColor:'#f2f2f2',
    marginTop:10
  },
  infoAddress:{
    marginLeft:10
  },
  address:{
    fontWeight:'bold',
    fontSize:13
  },
  neighborhood:{
    fontSize:12
  }
});

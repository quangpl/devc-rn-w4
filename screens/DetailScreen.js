import * as WebBrowser from "expo-web-browser";
import React from "react";

import { Feather } from "@expo/vector-icons";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function DetailScreen(props) {
  const data = props.navigation.getParam("data");
  return (
    <View style={styles.container}>
      {data.status === "active" ? (
        <Feather size={45} style={styles.icon} color="gray" name="circle" />
      ) : (
        <Feather
          size={45}
          style={styles.icon}
          color="green"
          name="check-circle"
        />
      )}
      <Text style={{ fontSize: 15 ,marginBottom:10, marginTop:10}}>{data.id}</Text>
      <Text style={{ fontSize: 35 }}>{data.name}</Text>
    </View>
  );
}

DetailScreen.navigationOptions = {
  title: "Detail"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});

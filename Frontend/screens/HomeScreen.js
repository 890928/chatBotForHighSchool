import React from "react";
import {
  Button,
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//首頁
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>升學診斷寶</Text>
      <Text style={styles.logoChdText}>更懂升學更懂你</Text>
      <Image
        style={styles.firstLogo}
        source={require("../image/LogoBot.png")}
      />
      <View style={styles.btnTogther}>
        <TouchableOpacity
          style={styles.stbutton}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("登入")}
        >
          <Text style={styles.btnTxt}>開始使用</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sysbutton}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("系統說明")}
        >
          <Text style={styles.btnTxt}>系統說明</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  firstLogo: {
    width: 400,
    height: 400,
  },
  logoText: {
    fontSize: 36,
  },
  logoChdText: {
    fontSize: 20,
    marginTop: 8,
    color: "gray",
  },
  startBtn: {
    marginTop: 15,
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  stbutton: {
    width: 100,
    alignItems: "center",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
    marginRight:10
  },
  sysbutton: {
    width: 100,
    alignItems: "center",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
  },
  btnTogther:{
    flexDirection:"row",
  }
});
export default HomeScreen;

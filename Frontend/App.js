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
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/RegisterScreen";
import Sysillustrate from "./screens/Sysillustrate";
import SelectScreen from "./screens/SelectScreen";
import BackScreen from "./screens/BackScreen";
import UserReport from "./screens/UserReport";
import AptitudeScreen from "./screens/AptitudeScreen";
//導覽
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="首頁"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#FFEC8B",
            },
          }}
        />
        <Stack.Screen
          name="選單"
          component={SelectScreen}
          options={{
            headerStyle: {
              backgroundColor: "#FFEC8B",
            },
          }}
        />
        <Stack.Group
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#FFEC8B",
            },
            headerLeft: () => (
              <View style={styles.account}>
                <TouchableOpacity
                  style={styles.btnmargin}
                  onPress={() => navigation.navigate("首頁")}
                >
                  <Image
                    style={styles.firstLogo2}
                    source={require("./image/home.png")}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={styles.account}>
                <TouchableOpacity onPress={() => navigation.navigate("選單")}>
                  <Image
                    style={styles.firstLogo1}
                    source={require("./image/dots.png")}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        >
          <Stack.Screen name="升學診斷寶" component={ChatScreen} />
          <Stack.Screen name="登入" component={LoginScreen} />
          <Stack.Screen name="註冊" component={RegisterScreen} />
          <Stack.Screen name="系統說明" component={Sysillustrate} />
          <Stack.Screen name="數據管理" component={BackScreen} />
          <Stack.Screen name="使用者回饋" component={UserReport} />
          <Stack.Screen name="性向測驗" component={AptitudeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  btnmargin: {
    marginLeft: 0,
  },
  firstLogo1: {
    width: 20,
    height: 20,
  },
  firstLogo2: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  NomralLogo: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  account: {
    flexDirection: "row",
  },
});
export default App;

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("遊客");
  //存到storage
  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("error", e);
    }
  };
  //取得storage
  const getData = async (key) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    const checkData = async () => {
      if ((await getData("UserName"))) {
        navigation.navigate("升學診斷寶");
      }
    };
    checkData();
  });
  //刪除storage
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("UserName");
    } catch (e) {
      console.log("error", e);
    }
  };
  //存取使用者名稱
  const saveUserName = async () => {
    await removeData();
    await saveData("UserName", userName);
    await setModalVisible(true);
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>用戶{userName}歡迎使用</Text>
            <View style={styles.btnRow}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.modalLeftBtn}
                onPress={() => navigation.navigate("升學診斷寶")}
              >
                <Text style={styles.buttonTextStyle}>確認</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.imgcen}>
        <Image
          style={styles.firstLogo}
          source={require("../image/login.png")}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="請輸入使用者名稱"
        onChangeText={(text) => setUserName(text)}
      />
        <TouchableOpacity
          style={styles.Lgbutton}
          activeOpacity={0.6}
          onPress={() => saveUserName()}
        >
          <Text style={styles.btnTxt}>開始</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.Lgbutton}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("升學診斷寶")}
        >
          <Text style={styles.btnTxt}>遊客登入</Text>
        </TouchableOpacity> */}
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },

  Lgbutton: {
    alignItems: "center",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  Mgbtn: {
    width: 150,
    alignItems: "center",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
  },
  btnblock: {
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  firstLogo: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
  imgcen: {
    marginTop: 0,
    flex: 0,
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 24,
  },
  modalLeftBtn: {
    width: 100,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
  },
  btnRow: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
});

export default LoginScreen;

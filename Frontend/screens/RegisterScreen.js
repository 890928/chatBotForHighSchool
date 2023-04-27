import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

export default function RegisterScreen({ navigation }) {
  const [value, onChangeText] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAwareScrollView style={styles.container}>
      {/* 彈跳視窗 */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>註冊成功，請重新登入</Text>
            <View style={styles.btnRow}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.modalLeftBtn}
                onPress={() => navigation.navigate("登入")}
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
          source={require("../image/Register.png")}
        />
      </View>
      <TextInput style={styles.input} placeholder="請輸入帳號" />
      <TextInput style={styles.input} placeholder="請輸入密碼" />
      <TextInput style={styles.input} placeholder="請輸入確認密碼" />
      <TextInput style={styles.input} placeholder="請輸入信箱" />
      <TouchableOpacity
        style={styles.Lgbutton}
        activeOpacity={0.6}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTxt}>註冊</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    padding: 10,
  },
  modalView: {
    margin: 20,
    marginTop: 300,
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
  input: {
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  inputText: {
    fontSize: 18,
    marginBottom: 15,
  },
  Lgbutton: {
    alignItems: "center",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
  },
  firstLogo: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
  imgcen: {
    flex: 0,
    alignItems: "center",
  },
  firstLogo: {
    width: 300,
    height: 300,
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

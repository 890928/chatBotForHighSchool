import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";

function UserReport({ navigation }) {
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  // Empty Star. You can also give the path from local
  const starImageCorner =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";

  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  };

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const [value, onChangeText] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* 彈跳視窗 */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>提交成功，感謝您的回饋</Text>
            <View style={styles.btnRow}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.modalLeftBtn}
                onPress={() => navigation.navigate("首頁")}
              >
                <Text style={styles.buttonTextStyle}>確認</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.modalRightBtn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonTextStyle}>關閉</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.imgcen}>
          <Image
            style={styles.firstLogo}
            source={require("../image/feedback.png")}
          />
        </View>
        <Text style={styles.textStyle}>升學診斷寶</Text>
        <Text style={styles.textStyleSmall}>
          非常感謝您的使用，您的回饋可以讓我們變得更好
        </Text>
        <CustomRatingBar />
        <View
          style={{
            backgroundColor: value,
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
          }}
        >
          <UselessTextInput
            multiline
            numberOfLines={4}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            style={styles.inputStyle}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonTextStyle}>提交</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
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

  inputStyle: {
    fontSize: 20,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: 10,
    marginTop: 15,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 23,
    color: "#000",
    marginTop: 15,
  },
  imgcen: {
    flex: 0,
    alignItems: "center",
  },
  textStyleSmall: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  firstLogo: {
    width: 250,
    height: 250,
    justifyContent: "center",
  },
  modalText: {
    fontSize: 22,
  },
  modalLeftBtn: {
    width: 100,
    marginRight: 10,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
  },
  modalRightBtn: {
    width: 100,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 15,
  },
  btnRow: {
    marginTop: 20,
    flexDirection: "row",
  },
});

export default UserReport;

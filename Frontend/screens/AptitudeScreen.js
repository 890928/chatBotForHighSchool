import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AptitudeScreen({ navigation }) {
  const [countQuest1, setCountQuest1] = useState(0);
  const [countQuest2, setCountQuest2] = useState(0);
  const [countQuest3, setCountQuest3] = useState(0);
  const [countQuest4, setCountQuest4] = useState(0);
  const [countQuest5, setCountQuest5] = useState(0);
  const [countQuest6, setCountQuest6] = useState(0);
  const [countQuest7, setCountQuest7] = useState(0);
  const [countQuest8, setCountQuest8] = useState(0);
  const [countQuest9, setCountQuest9] = useState(0);
  const [countQuest10, setCountQuest10] = useState(0);
  const buttonChange = (questNum, num) => {
    if (questNum === 1) {
      setCountQuest1((prev) => num);
    } else if (questNum === 2) {
      setCountQuest2((prev) => num);
    } else if (questNum === 3) {
      setCountQuest3((prev) => num);
    } else if (questNum === 4) {
      setCountQuest4((prev) => num);
    } else if (questNum === 5) {
      setCountQuest5((prev) => num);
    } else if (questNum === 6) {
      setCountQuest6((prev) => num);
    } else if (questNum === 7) {
      setCountQuest7((prev) => num);
    } else if (questNum === 8) {
      setCountQuest8((prev) => num);
    } else if (questNum === 9) {
      setCountQuest9((prev) => num);
    } else if (questNum === 10) {
      setCountQuest10((prev) => num);
    }
  };
  const btnClick = () => {
    //理工
    let poly = 0;
    //醫
    let medical = 0;
    //農
    let farm = 0;
    //文
    let arts = 0;
    //法
    let law = 0;
    //商
    let business = 0;
    if (countQuest1 === 1) {
      arts += 12.5;
    }
    if (countQuest2 == 3) {
      arts += 12.5;
      law += 12.5;
      farm += 12.5;
    }
    if (countQuest3 === 1) {
      arts += 12.5;
      law += 12.5;
    }
    if (countQuest4 === 2) {
      arts += 12.5;
      business += 12.5;
    }
    if (countQuest5 === 3) {
      arts += 12.5;
      law += 12.5;
    }
    if (countQuest6 === 3) {
      arts += 12.5;
      law += 12.5;
    }
    if (countQuest7 === 3) {
      business += 12.5;
      poly += 12.5;
      farm += 12.5;
    }
    if (countQuest8 === 2) {
      business += 12.5;
      farm += 12.5;
    }
    if (countQuest9 === 4) {
      law += 12.5;
      business += 12.5;
    }
    if (countQuest10 === 1) {
      poly += 25;
    } else if (countQuest10 === 2) {
      medical += 25;
    } else if (countQuest10 === 3) {
      farm += 25;
    } else if (countQuest10 === 4) {
      arts += 25;
    } else if (countQuest10 === 5) {
      law += 25;
    } else if (countQuest10 === 6) {
      business += 25;
    }
    //比大小
    let resutlt = [
      { name: "理工", value: poly },
      { name: "醫", value: medical },
      { name: "農", value: farm },
      { name: "文", value: arts },
      { name: "法", value: law },
      { name: "商", value: business },
    ];
    resutlt.sort((a, b) => {
      return b.value - a.value;
    });
    saveData("keepAptitude", resutlt[0].name);
    alert("您最適合的為"+resutlt[0].name+"科");
    navigation.navigate("升學診斷寶");
  };
  //存到storage
  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* 第一題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>1.甲丙戊庚＿</Text>
          <TouchableOpacity onPress={() => buttonChange(1, 1)}>
            <View
              style={[
                { backgroundColor: countQuest1 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 壬</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(1, 2)}>
            <View
              style={[
                { backgroundColor: countQuest1 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 癸</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(1, 3)}>
            <View
              style={[
                { backgroundColor: countQuest1 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 己</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(1, 4)}>
            <View
              style={[
                { backgroundColor: countQuest1 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 丁</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(1, 5)}>
            <View
              style={[
                { backgroundColor: countQuest1 === 5 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(5) 甲</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第二題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>2. 噱頭、政見、傳單、標語</Text>
          <TouchableOpacity onPress={() => buttonChange(2, 1)}>
            <View
              style={[
                { backgroundColor: countQuest2 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 語言</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(2, 2)}>
            <View
              style={[
                { backgroundColor: countQuest2 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 文字</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(2, 3)}>
            <View
              style={[
                { backgroundColor: countQuest2 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 宣傳</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(2, 4)}>
            <View
              style={[
                { backgroundColor: countQuest2 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 民心</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第三題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>
            3. 孔子和名詞的關係，好像嗚呼和什麼的關係？
          </Text>
          <TouchableOpacity onPress={() => buttonChange(3, 1)}>
            <View
              style={[
                { backgroundColor: countQuest3 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 感歎詞</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(3, 2)}>
            <View
              style={[
                { backgroundColor: countQuest3 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 代名詞</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(3, 3)}>
            <View
              style={[
                { backgroundColor: countQuest3 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 前置詞</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(3, 4)}>
            <View
              style={[
                { backgroundColor: countQuest3 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 形容詞</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第四題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>4. 這種車輛很難「適應」那種道路</Text>
          <TouchableOpacity onPress={() => buttonChange(4, 1)}>
            <View
              style={[
                { backgroundColor: countQuest4 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 開進</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(4, 2)}>
            <View
              style={[
                { backgroundColor: countQuest4 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 配合</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(4, 3)}>
            <View
              style={[
                { backgroundColor: countQuest4 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 應付</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(4, 4)}>
            <View
              style={[
                { backgroundColor: countQuest4 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 駛出</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第五題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>
            5. 過去和後悔的關係，好像未來和什麼的關係？
          </Text>
          <TouchableOpacity onPress={() => buttonChange(5, 1)}>
            <View
              style={[
                { backgroundColor: countQuest5 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 夢幻</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(5, 2)}>
            <View
              style={[
                { backgroundColor: countQuest5 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 失落</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(5, 3)}>
            <View
              style={[
                { backgroundColor: countQuest5 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 希望</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(5, 4)}>
            <View
              style={[
                { backgroundColor: countQuest5 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 預測</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第六題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>6. 「存心」的意義和什麼相似？</Text>
          <TouchableOpacity onPress={() => buttonChange(6, 1)}>
            <View
              style={[
                { backgroundColor: countQuest6 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 堅決</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(6, 2)}>
            <View
              style={[
                { backgroundColor: countQuest6 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 目標</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(6, 3)}>
            <View
              style={[
                { backgroundColor: countQuest6 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 有意</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(6, 4)}>
            <View
              style={[
                { backgroundColor: countQuest6 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 虛心</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第七題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>
            7. 一面旗子有5種顏色，同樣的旗子20面，請問共有幾種顏色？
          </Text>
          <TouchableOpacity onPress={() => buttonChange(7, 1)}>
            <View
              style={[
                { backgroundColor: countQuest7 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 15</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(7, 2)}>
            <View
              style={[
                { backgroundColor: countQuest7 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 25</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(7, 3)}>
            <View
              style={[
                { backgroundColor: countQuest7 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(7, 4)}>
            <View
              style={[
                { backgroundColor: countQuest7 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 100</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第八題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>
            8. 某物原價25元，先打八折，再減三成後，售價是多少？
          </Text>
          <TouchableOpacity onPress={() => buttonChange(8, 1)}>
            <View
              style={[
                { backgroundColor: countQuest8 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 12.5元</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(8, 2)}>
            <View
              style={[
                { backgroundColor: countQuest8 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 14元</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(8, 3)}>
            <View
              style={[
                { backgroundColor: countQuest8 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 14.5元</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(8, 4)}>
            <View
              style={[
                { backgroundColor: countQuest8 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 17元</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第九題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>9. 12，＿，18，19，24，25，26</Text>
          <TouchableOpacity onPress={() => buttonChange(9, 1)}>
            <View
              style={[
                { backgroundColor: countQuest9 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1) 13</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(9, 2)}>
            <View
              style={[
                { backgroundColor: countQuest9 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2) 14</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(9, 3)}>
            <View
              style={[
                { backgroundColor: countQuest9 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3) 15</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(9, 4)}>
            <View
              style={[
                { backgroundColor: countQuest9 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4) 17</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 第十題 */}
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>10. 請問您自認適合從事那種行業？</Text>
          <TouchableOpacity onPress={() => buttonChange(10, 1)}>
            <View
              style={[
                { backgroundColor: countQuest10 === 1 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(1)理工</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(10, 2)}>
            <View
              style={[
                { backgroundColor: countQuest10 === 2 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(2)醫</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(10, 3)}>
            <View
              style={[
                { backgroundColor: countQuest10 === 3 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(3)農</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(10, 4)}>
            <View
              style={[
                { backgroundColor: countQuest10 === 4 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(4)文</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(10, 5)}>
            <View
              style={[
                { backgroundColor: countQuest10 === 5 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(5)法</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => buttonChange(10, 6)}>
            <View
              style={[
                { backgroundColor: countQuest10 === 6 ? "#f05c38" : "#fff" },
              ]}
            >
              <Text style={styles.textContent}>(6)商</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.Lgbutton}
          activeOpacity={0.6}
          onPress={() => btnClick()}
        >
          <Text style={styles.btnTxt}>送出</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  Lgbutton: {
    alignItems: "center",
    backgroundColor: "#2574F6",
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  viewBlock: {
    borderBottomWidth: 3,
    borderColor: "#274C77",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textContent: {
    fontSize: 16,
  },
});

export default AptitudeScreen;

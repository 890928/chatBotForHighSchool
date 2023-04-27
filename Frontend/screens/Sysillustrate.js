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

function Sysill({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView} >
        <View style={styles.viewBlock1}>
          <Text style={styles.textTitle}>使用對象</Text>
          <Text style={styles.textContent}>
            本系統主要使用的對象為即將升學且對選擇學校、科系尚有疑惑的高中/職生，以及管理後台系統的管理者，以學生為使用者做出發點，本系統結合了「政府資料開放平臺資料」以及「自然語言處理(NLP)」，幫助使用者了解自身的性向以外，也能讓使用者可以清楚的知道現在的熱門科系，並提供使用者選擇科系的方向。後台部分提供管理者接收使用者在系統使用上的問題回報，且根據回報對系統做相對應的問題修復，以達到方便維護的效果。
          </Text>
        </View>
        <View style={styles.viewBlock2}>
          <Text style={styles.textTitle}>系統特色</Text>
          <Text style={styles.textContent}>
            聊天機器人在各大領域上非常盛行，卻未曾在升學領域上看見它大展身手，於是本團隊決定製作一個專門為即將升學的高中職生解惑的升學診斷聊天機器人，本系統主要是透過「分數」、「未來發展」、「性向」進行分析，同時也提供了「複合式篩選」以及「綜合分析三角圖」，根據上述功能，本系統能夠更全面的幫助使用者選擇未來該就讀的校系。
            使用者可以在與機器人聊天後，得知自身適性學校及科系，相較於現今的其他升學諮詢平台，不僅包含了各校、各科系招收人數以及歷年落點分數，還多了性向與複合式篩選及綜合分析三角圖等，讓使用者能在本系統獲得最完整的諮詢。
          </Text>
        </View>
        <View style={styles.viewBlock3}>
          <Text style={styles.textTitle}>系統貢獻</Text>
          <Text style={styles.textContent}>
            本系統「升學診斷寶」藉由聊天機器人獲取學生資訊，透過「分數」、「職業」、「性向」等三大面向進行分析，提供使用者能更加了解自己的錄取機率、就讀科系、適合自己的行業、目標科系的社會觀感，以降低使用者不夠了解自身符合的條件，導致錄取不理想學校的情況，並依照使用者想要的面向進行客製化分析，不僅能了解自身適合的科系，也可以嘗試往其他方向去做考量，希望藉由我們的系統能夠幫助使用者選擇自己心儀且適合的學校以及科系。
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  viewBlock1: {
    borderWidth: 4,
    borderColor: "#274C77",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  viewBlock2: {
    borderWidth: 4,
    borderColor: "#6D96BA",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  viewBlock3: {
    borderWidth: 4,
    borderColor: "#A3CEF1",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textContent: {
    fontSize: 18,
  },
});

export default Sysill;

import React, { useState, Component } from "react";
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
import { ProgressBar, List } from "react-native-paper";
import { Row, Rows, Table } from "react-native-table-component";

const optionsChange = {
  tableHead: ["內容", "用戶"],
  tableData: [
    ["牛逼", "訪客"],
    ["太神拉", "廖O翰"],
    ["拜託幾個勒", "廖O翰"],
    ["那我要睡啦", "廖O翰"],
    ["好餓", "訪客"],
    ["早餐", "陳O緯"],
    ["薯餅", "陳O緯"],
    ["還錢", "張O元"],
  ],
};
function Sysill({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.countTitle}>流量統計</Text>
        <View style={styles.viewBlock}>
          <Text style={styles.textTitle}>總人數</Text>
          <ProgressBar progress={1} style={styles.ProgressSty} />
          <Text style={styles.textContent}>368</Text>
        </View>
        <View style={styles.viewRowBlock}>
          <View style={styles.viewBlock_row}>
            <Text style={styles.textTitle}>會員人數</Text>
            <ProgressBar progress={0.3} style={styles.ProgressSty} />
            <Text style={styles.textContent}>103</Text>
          </View>
          <View style={styles.viewBlock_row}>
            <Text style={styles.textTitle}>訪客人數</Text>
            <ProgressBar progress={0.7} style={styles.ProgressSty} />
            <Text style={styles.textContent}>265</Text>
          </View>
        </View>
        <Text style={styles.countTitle}>無法辨識詞庫</Text>
        <Table borderStyle={styles.tableStyle}>
          <Row
            data={optionsChange.tableHead}
            flexArr={[2, 1]}
            style={styles.tablehead}
            textStyle={styles.tabletext}
          />
          <Rows
            data={optionsChange.tableData}
            flexArr={[2, 1]}
            style={styles.tableRows}
            textStyle={styles.tabletext}
          />
        </Table>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginBottom:30
  },
  countTitle: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 10,
  },
  ProgressSty: {
    height: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  tableStyle: {
    borderWidth: 2,
    borderColor: "black",
  },
  tablehead: {
    height: 36,
    backgroundColor: "#F5F5DC",
  },
  tableRows: {
    height: 30,
  },
  tabletext: {
    textAlign: "center",
  },
  viewBlock: {
    borderWidth: 4,
    borderColor: "#274C77",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  viewRowBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewBlock_row: {
    width: 150,
    borderWidth: 4,
    borderColor: "#274C77",
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
    fontSize: 50,
    textAlign: "center",
  },
});

export default Sysill;

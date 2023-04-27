import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "首頁",
    listherf:"首頁"
  },
  {
    id: "2",
    title: "系統說明",
    listherf:"系統說明"
  },
  {
    id: "3",
    title: "聊天室",
    listherf:"升學診斷寶"
  },
  // {
  //   id: "4",
  //   title: "數據管理",
  //   listherf:"數據管理"
  // },
  {
    id: "5",
    title: "使用者回饋",
    listherf:"使用者回饋"
  },
  {
    id: "6",
    title: "性向測驗",
    listherf:"性向測驗"
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

function SelectScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate(item.listherf)}
        style={styles.title}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onPress={() => setSelectedId(item.id)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#F0E68C",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
  },
});

export default SelectScreen;

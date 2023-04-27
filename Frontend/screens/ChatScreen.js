import React, { useState, useCallback, useEffect } from "react";
import {
  Button,
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  DevSettings,
} from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
// 引入中文语言包
import "dayjs/locale/zh-cn";
function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const startData = async () => {
      const item = await getData("UserName");
      setMessages([
        {
          _id: 2,
          text: "如果對於診斷條件不滿意，可以跟小寶說重新診斷。",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "阿寶",
            avatar: require("../image/ai.png"),
          },
        },
        {
          _id: 1,
          text: "親愛的" + item + "您好，我是機器人小寶。",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "阿寶",
            avatar: require("../image/ai.png"),
          },
        },
      ]);
      messagesReport();
    };
    startData();
  }, []);
  let tmplenght = 100000;
  const onSend = useCallback((msg = []) => {
    tmplenght++;
    console.log(msg);
    setMessages((previousMessages) => GiftedChat.append(previousMessages, msg));
    messagesReport(msg[0].text);
  }, []);
  //使用者回傳訊息
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: "black",
          },
        }}
        wrapperStyle={{
          left: {
            //機器人氣泡
            backgroundColor: "white",
          },
          right: {
            //使用者氣泡
            backgroundColor: "#95ec69",
          },
        }}
      />
    );
  };
  //存到storage
  const saveData = async (key, value) => {
    try {
      if (key == "國文") {
        key = "keepChi";
      } else if (key == "數學") {
        key = "keepMath";
      } else if (key == "英文") {
        key = "keepEng";
      } else if (key == "專一" || key == "專業(一)") {
        key = "keepMajor1";
      } else if (key == "專二" || key == "專業(二)") {
        key = "keepMajor2";
      }
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("error", e);
    }
  };
  //刪除storage
  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
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
  //設定APIUrl
  const getApiUrl = async (url) => {
    const taxa = await getData("keepTaxa");
    const chi = await getData("keepChi");
    const eng = await getData("keepEng");
    const math = await getData("keepMath");
    const major1 = await getData("keepMajor1");
    const major2 = await getData("keepMajor2");
    const aptitu = await getData("keepAptitude");
    if (taxa) {
      url += `&taxa=${taxa}`;
    }
    if (chi) {
      url += `&chi=${chi}`;
    }
    if (eng) {
      url += `&eng=${eng}`;
    }
    if (math) {
      url += `&math=${math}`;
    }
    if (major1) {
      url += `&major1=${major1}`;
    }
    if (major2) {
      url += `&major2=${major2}`;
    }
    if (aptitu) {
      url += `&aptitu=${aptitu}`;
    }
    return await url;
  };
  //串接pythonApi
  let result = "";
  const messagesReport = async (message) => {
    console.log("req:" + message);
    if (message === "重新診斷") {
      await removeData("keepTaxa");
      await removeData("keepChi");
      await removeData("keepEng");
      await removeData("keepMath");
      await removeData("keepMajor1");
      await removeData("keepMajor2");
      await removeData("keepAptitude");
      await removeData("UserName");
      DevSettings.reload();
    } else {
      let messageUrl = `http://192.168.172.96:3000/GetMessage/Message?message=${message}`;
      messageUrl = await getApiUrl(messageUrl);
      console.log(messageUrl);
      const apti = await getData("keepAptitude");
      await fetch(messageUrl, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then(async (data) => {
          console.log(data);
          let resultMessage = "";
          if (data.storgeName) {
            saveData(data.storgeName, data.message);
            console.log(data.message);
            messagesReport();
          } else if (data.message === "請您完成性向測驗") {
            if (apti) {
              resultMessage = "您的性向測驗結果為" + apti;
            } else {
              navigation.navigate("性向測驗");
            }
          } else {
            if (data.resultSchool) {
              let count = 0;
              data.resultSchool.forEach((element) => {
                if (count === 0) {
                  resultMessage = element;
                } else {
                  resultMessage += "\n" + element;
                }
                count++;
              });
              if (apti) {
                resultMessage += "\n您的性向診斷為:" + apti;
              }
            } else if (data.aptitu) {
              resultMessage = "您的科系診斷為:" + apti + "\n適合科系如下";
              data.aptitu.forEach((element) => {
                resultMessage += "\n" + element;
              });
            } else if (data.future) {
              resultMessage = "您未來可以參考的職業如下:";
              data.future.forEach((element) => {
                resultMessage += "\n" + element;
              });
            } else {
              resultMessage = data.message;
            }
            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, {
                _id: tmplenght,
                text: resultMessage,
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: "阿寶",
                  avatar: require("../image/ai.png"),
                },
              })
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //輸入訊息
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{ marginRight: 10, marginBottom: 15 }}>
          <Text style={{ color: "#0366d6", fontSize: 16 }}>傳送</Text>
        </View>
      </Send>
    );
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      showUserAvatar={true}
      locale={"zh-cn"}
      showAvatarForEveryMessage={true}
      renderBubble={renderBubble}
      placeholder={"請輸入訊息！"}
      renderSend={renderSend}
      user={{
        _id: 50,
        name: "我",
      }}
    />
  );
}

export default ChatScreen;

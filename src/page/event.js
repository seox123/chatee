import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { Agenda } from "react-native-calendars";
import { useState } from "react";
import { Card, Avatar } from "react-native-paper";
import SubmitButton from "../components/SubmitButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

export default function Eventscreen() {
  const [items, setItems] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 30; i++) {
        // for (let i = -; i < 3; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        // console.log("day timestamp: " + i + " " + time);
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          // const numItems = Math.floor(Math.random() * 3 + 1);
          // for (let j = 0; j < numItems; j++) {
          // items[strTime].push({
          //   name: "Item for " + strTime,
          //   height: Math.max(50, Math.floor(Math.random() * 150)),
          // });
          // }
        }
      }
      items["2022-06-22"] = [{ name: "Dr-Strange movie at Nex" }];
      items["2022-06-23"] = [{ name: "Beach day" }];
      items["2022-06-25"] = [
        { name: "Lunch @ The Deck" },
        { name: "Orbital meeting" },
      ];
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const addEntry = () => {
    console.log(date);
    function convert(n) {
      n = String(n);
      if (n.length == 1) {
        n = "0" + n;
      }
      return n;
    }
    const dateStr =
      date.getFullYear() +
      "-" +
      convert(date.getMonth()) +
      "-" +
      convert(date.getDate());
    console.log(dateStr);
    if (items[dateStr] == undefined) {
      items[dateStr] = [];
    }
    items[dateStr].push({ name: name });
  };

  items.push;
  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ ...styles.container }}>
          <TextInput
            style={{ ...styles.input }}
            placeholder='Task Name'
            onChangeText={setName}
          />
          <DateTimePicker
            value={date}
            mode='date'
            display='default'
            onChange={(event, date) => {
              //...some code here
              setDate(date);
              console.log(date);
            }}
            style={{ width: 115, backgroundColor: "white" }}
          />
          <SubmitButton
            onPress={() => {
              // Minus points
              // Place the item
              // Remove item from shop data list
              addEntry();
              setModalVisible(!modalVisible);
            }}
            text='Add'
          />
          <SubmitButton
            onPress={() => setModalVisible(!modalVisible)}
            text='Cancel'
          />
        </View>
      </Modal>
      <Agenda
        selected={new Date()}
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        // items={{
        //   "2022-06-22": [{ name: "Dr-Strange movie at Nex" }],
        //   "2022-06-23": [{ name: "Beach day" }],

        // "2022-06-25": [
        //   { name: "Lunch @ The Deck" },
        //   { name: "Orbital meeting" },
        // ],
        // }}
      />
      {/* <SubmitButton
        text="Sign Out"
        onPress={() => {
          items[1656288000000].push({
            name: "New Event",
            height: Math.max(50, Math.floor(Math.random() * 150)),
          });
        }}
      /> */}
      <View
        style={{
          position: "absolute",
          transform: [{ translateX: 330 }, { translateY: 550 }],
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          {/* <Image source={require("../components/wood-planks.png")} /> */}
          <Ionicons name={"add-circle-outline"} size={60} color={"grey"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#E0FFFF",
    height: "100%",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%",
  },
  input: {
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    padding: "2%",
    width: "80%",
    margin: "1%",
  },
});

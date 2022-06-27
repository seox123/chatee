import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";
import { useState } from "react";
import { Card, Avatar } from "react-native-paper";
import SubmitButton from "../components/SubmitButton";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

export default function Eventscreen() {
  const [items, setItems] = useState({});

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
              <Avatar.Text label="CS" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        selected={new Date()}
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        // items={{
        //   "2022-06-22": [{ name: "item 1 - any js object" }],
        //   "2022-06-23": [{ name: "item 2 - any js object",  }],
        //   "2022-06-24": [{ name: "item 1231 - any js object" }],
        //   "2022-06-25": [
        //     { name: "item 3 - any js object" },
        //     { name: "any js object" },
        //   ],
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
    </View>
  );
}

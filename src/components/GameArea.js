import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Background from "./Background";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
    backgroundColor: "yellow",
    // // justifyContent: "center",
    // // alignItems: "center",
    // padding: 20,
  },
});

export default function GameArea() {
  return (
    <View style={styles.container}>
      <Background />
    </View>
  );
}

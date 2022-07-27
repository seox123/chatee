import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftWidth: 20,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    borderLeftColor: "transparent",
  },
  square: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftWidth: 20,
    borderTopColor: "red",
    borderRightColor: "red",
    borderBottomColor: "red",
    borderLeftColor: "red",
  },
});

export default function GamepadButton(props) {
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH / 2,
        marginTop: 200,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={props.move[0]}
        style={{
          position: "absolute",
          transform: [
            { translateY: -30 },
            { rotateZ: "0deg" },
            { translateY: 30 },
          ],
        }}
      >
        <View style={styles.triangle} />
        <View style={styles.square} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.move[1]}
        style={{
          position: "absolute",
          transform: [
            { translateY: -30 },
            { rotateZ: "90deg" },
            { translateY: 30 },
          ],
        }}
      >
        <View style={styles.triangle} />
        <View style={styles.square} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.move[2]}
        style={{
          position: "absolute",
          transform: [
            { translateY: -30 },
            { rotateZ: "180deg" },
            { translateY: 30 },
          ],
        }}
      >
        <View style={styles.triangle} />
        <View style={styles.square} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.move[3]}
        style={{
          position: "absolute",
          transform: [
            { translateY: -30 },
            { rotateZ: "270deg" },
            { translateY: 30 },
          ],
        }}
      >
        <View style={styles.triangle} />
        <View style={styles.square} />
      </TouchableOpacity>
    </View>
  );
}

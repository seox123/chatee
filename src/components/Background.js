import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";

export const NUM_TILES = 10;

const Square = (row, col) => {
  // backgroundColour redundant, just to see whr the grid is.
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor = (col + offset) % 2 === 0 ? WHITE : BLACK;
  return (
    <>
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        <Image
          style={{ flex: 1, width: undefined, height: undefined }}
          source={require("./wood-planks.png")}
        />
      </View>
    </>
  );
};

const Row = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {new Array(NUM_TILES).fill(0).map((_, col) => (
        <Square key={col} row={props.row} col={col} />
      ))}
    </View>
  );
};

export default function Background() {
  return (
    <View style={{ flex: 1 }}>
      {new Array(NUM_TILES).fill(0).map((_, row) => (
        <Row key={row} row={row} />
      ))}
    </View>
  );
}

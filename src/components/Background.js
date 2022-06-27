import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";

interface RowProps {
  row: Number;
}

interface SquareProps extends RowProps {
  col: Number;
}

const Square = ({ row, col }: SquareProps) => {
  // backgroundColour redundant, just to see whr the grid is.
  // const offset = row % 2 === 0 ? 1 : 0;
  // const backgroundColor = (col + offset) % 2 === 0 ? WHITE : BLACK;
  return (
    // <ImageBackground source={require("./brick-tiling.png")} />
    // <View style={{ flex: 1, backgroundColor }}>
    <View style={{ flex: 1 }}>
      <Image
        style={{ flex: 1, width: undefined, height: undefined }}
        source={require("./brick-tiling.png")}
      />
    </View>
  );
};

const Row = ({ row }: RowProps) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {new Array(8).fill(0).map((_, col) => (
        <Square key={col} row={row} col={col} />
      ))}
    </View>
  );
};

export default function Background() {
  return (
    <View style={{ flex: 1 }}>
      {new Array(8).fill(0).map((_, row) => (
        <Row key={row} row={row} />
      ))}
    </View>
  );
}

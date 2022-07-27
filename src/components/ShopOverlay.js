import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NUM_TILES } from "./Background";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";

const WIDTH = Dimensions.get("window").width;

const Square = ({ row, col, placeItem }) => {
  // backgroundColour redundant, just to see whr the grid is.
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor = (col + offset) % 2 === 0 ? WHITE : BLACK;
  return (
    <>
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        <TouchableOpacity
          style={{ width: WIDTH / NUM_TILES, height: WIDTH / NUM_TILES }}
          onPress={() => {
            placeItem(row, col);
          }}
        >
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={require("./wood-planks.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const Row = ({ row, placeItem }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {new Array(NUM_TILES).fill(0).map((_, col) => (
        <Square key={col} row={row} col={col} placeItem={placeItem} />
      ))}
    </View>
  );
};

export default function ShopOverlay({ placeItem }) {
  return (
    <View style={{ WIDTH, height: WIDTH, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        {new Array(NUM_TILES).fill(0).map((_, row) => (
          <Row key={row} row={row} placeItem={placeItem} />
        ))}
      </View>
    </View>
  );
}

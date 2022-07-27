import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import { NUM_TILES } from "../components/Background";
import GameArea from "../components/GameArea";
import ShopOverlay from "../components/ShopOverlay";
import SubmitButton from "../components/SubmitButton";

const WIDTH = Dimensions.get("window").width;

var data = [
  {
    id: "1",
    key: "Chest",
    path: require("../../assets/sprites/items/chest/red-and-gold-chest1.png"),
    price: 20,
  },
  {
    id: "2",
    key: "Sofa",
    path: require("../../assets/sprites/items/sofa/red-sofa1.png"),
    price: 20,
  },
];

export default function Shop({ navigation: { setParams }, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currItemVisible, setCurrItemVisible] = useState(false);
  const [currItem, setCurrItem] = useState({});
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          border: "solid",
          borderColor: "#808080",
          borderWidth: 2,
          borderRadius: 20,
          height: WIDTH / 2,
          width: WIDTH / 2,
        }}
      >
        <Image resizeMode='contain' source={item.path} />
        <Text>{item.key}</Text>
        <Text>{item.price + "¢"}</Text>
        <SubmitButton
          onPress={() => {
            setModalVisible(true);
            setCurrItem(item);
          }}
          text='Buy'
        />
      </View>
    );
  };

  const placeItem = (item) => {
    return (row, col) => {
      setCurrItemVisible(true);
      setRow(row * 39);
      setCol(col * 39);
    };
  };

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
        <View style={{ top: 100 }}>
          <ShopOverlay placeItem={placeItem(currItem)} />
          {currItemVisible ? (
            <Image
              resizeMode='contain'
              source={currItem.path}
              style={{
                position: "absolute",
                top: row,
                left: col,
                width: WIDTH / NUM_TILES,
                height: WIDTH / NUM_TILES,
              }}
            />
          ) : (
            <View />
          )}
          <SubmitButton
            onPress={() => {
              // Minus points
              // Remove item from shop data list
              const boughtItem = data.splice(data.indexOf(currItem), 1);
              boughtItem[0].row = row;
              boughtItem[0].col = col;
              // console.log(boughtItem);
              // Place the item
              route.params.bought(boughtItem);
              setCurrItemVisible(false);
              setModalVisible(!modalVisible);
            }}
            text='Confirm'
          />
          <SubmitButton
            onPress={() => {
              setCurrItemVisible(false);
              setModalVisible(!modalVisible);
            }}
            text='Cancel'
          />
        </View>
      </Modal>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

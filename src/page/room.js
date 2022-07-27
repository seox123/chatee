import SubmitButton from "../components/SubmitButton";
import { React, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import GameArea from "../components/GameArea";
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
  Animated,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import GamepadButton from "../components/GamepadButton";
import Background, { NUM_TILES } from "../components/Background";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SIZE = WIDTH / NUM_TILES;
const animationTiming = 200;
const GUY_MOVE = WIDTH / NUM_TILES;
let x = 0;
let y = WIDTH - GUY_MOVE;

export default function Room(props) {
  const { route } = props;
  const {
    params: { channel },
  } = route;

  const [avatarType, setAvatarType] = useState(
    require("../../assets/sprites/characters/guy/guy1.png")
  );
  const [boughtItems, setBoughtItems] = useState([]);

  const navigation = useNavigation();

  // // To remove the navigation bar from previous screen.
  // useEffect(() => {
  //   navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
  //   return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  // }, [navigation]);

  const transX = useRef(new Animated.Value(x)).current;
  const transY = useRef(new Animated.Value(y)).current;
  const moveLeft = () => {
    if (x > 0) {
      x -= GUY_MOVE;
      setAvatarType(
        require("../../assets/sprites/characters/guy/guy-left.png")
      );
      Animated.timing(transX, {
        duration: animationTiming,
        toValue: x,
        useNativeDriver: true,
      }).start();
    }
  };
  const moveRight = () => {
    if (x < WIDTH - GUY_MOVE) {
      x += GUY_MOVE;
      setAvatarType(require("../../assets/sprites/characters/guy/guy1.png"));
      Animated.timing(transX, {
        duration: animationTiming,
        toValue: x,
        useNativeDriver: true,
      }).start();
    }
  };
  const moveUp = () => {
    if (y > 0) {
      y -= GUY_MOVE;
      setAvatarType(
        require("../../assets/sprites/characters/guy/guy-back.png")
      );
      Animated.timing(transY, {
        duration: animationTiming,
        toValue: y,
        useNativeDriver: true,
      }).start();
    }
  };
  const moveDown = () => {
    if (y < WIDTH - GUY_MOVE) {
      y += GUY_MOVE;
      setAvatarType(
        require("../../assets/sprites/characters/guy/guy-forward.png")
      );
      Animated.timing(transY, {
        duration: animationTiming,
        toValue: y,
        useNativeDriver: true,
      }).start();
    }
  };

  const bought = (boughtItem) => {
    setBoughtItems(boughtItems.concat(boughtItem));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#403a39",
      }}
    >
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/10/30/12/19/sunset-2902357_960_720.jpg",
        }}
        resizeMode='cover'
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {/* <Text>{channel.name}</Text> */}
        </View>

        <View
          style={{ WIDTH, height: WIDTH, backgroundColor: "white", top: 100 }}
        >
          <Background />
          {boughtItems.map((item) => {
            console.log("here");
            return (
              <Image
                source={item.path}
                style={{
                  position: "absolute",
                  top: item.row,
                  left: item.col,
                  width: WIDTH / NUM_TILES,
                  height: WIDTH / NUM_TILES,
                }}
              />
            );
          })}
          <Animated.View
            style={{
              position: "absolute",
              flex: 1,
              alignItems: "center",
              width: SIZE,
              height: SIZE,
              // backgroundColor: "black",
              transform: [{ translateX: transX }, { translateY: transY }],
            }}
          >
            <Image
              source={avatarType}
              resizeMode='contain'
              style={{
                height: GUY_MOVE,
              }}
            />
          </Animated.View>
        </View>

        <GamepadButton move={[moveDown, moveLeft, moveUp, moveRight]} />

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "green",
            justifyContent: "space-around",
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          {/* <SubmitButton
        text="Go to Chat"
        onPress={() => {
          navigation.navigate("Chat", { channel });
        }}
      /> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          >
            {/* <Image source={require("../components/wood-planks.png")} /> */}
            <Ionicons name={"ribbon-outline"} size={60} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Chat", { channel });
            }}
          >
            {/* <Image source={require("../components/wood-planks.png")} /> */}
            <Ionicons name={"chatbubbles-outline"} size={60} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Shop", { bought: bought });
            }}
          >
            {/* <Image source={require("../components/wood-planks.png")} /> */}
            <Ionicons name={"home-outline"} size={60} color={"white"} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "green",
//     height: 40,
//     width: 100,
//     alignItems: "center",
//     borderRadius: 10,
//     padding: 10,
//     margin: 3,
//   },
// });

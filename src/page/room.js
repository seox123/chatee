import SubmitButton from "../components/SubmitButton";
import React from "react";
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

export default function Room(props) {
  const { route } = props;
  const {
    params: { channel },
  } = route;

  const navigation = useNavigation();

  // // To remove the navigation bar from previous screen.
  // useEffect(() => {
  //   navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
  //   return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  // }, [navigation]);

  const WIDTH = Dimensions.get("window").width;
  const SIZE = WIDTH / 8;

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
        source={{ uri: "https://wallpaperaccess.com/full/1660549.jpg" }}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text> {channel.name} </Text>
        </View> */}

        <GameArea />

        <Animated.View
          style={{
            position: "absolute",
            width: SIZE,
            height: SIZE,
            // backgroundColor: "black",
            transform: [{ translateY: 129 }],
          }}
        >
          <Image
            source={require("./guy1.png")}
            style={{ width: SIZE, height: SIZE }}
          />
        </Animated.View>

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "green",
            justifyContent: "space-around",
            marginTop: 40,
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
              navigation.navigate("Shop");
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

import React from "react";
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import SubmitButton from "../components/SubmitButton";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { urlRegex } from "stream-chat-expo";
import { chatUserId } from "../../chatConfig";
import { StretchInX } from "react-native-reanimated";

export default function Settings() {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  // const profile = () => {
  //   return (
  //     <Image
  //       source={{
  //         uri: "https://t3.ftcdn.net/jpg/05/03/03/10/240_F_503031043_IhQN7eohBnVjlBtHQlWjdupDiHWW48mD.jpg",
  //       }}
  //     />
  //   );
  // };

  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <View
      style={{
        flex: 1,
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          // flexDirection: "row",
          alignItems: "center",
          // justifyContent: "center",
          // backgroundColor: "green",
          marginHorizontal: 60,
        }}
      >
        <Avatar.Image
          size={200}
          // source={profile}
          source={{
            uri: "https://t3.ftcdn.net/jpg/05/03/03/10/240_F_503031043_IhQN7eohBnVjlBtHQlWjdupDiHWW48mD.jpg",
          }}
        />
      </View>
      <View
        style={{
          // flexDirection: "row",
          alignItems: "center",
          // justifyContent: "center",
          // backgroundColor: "green",
          marginTop: 20,
          marginHorizontal: 60,
        }}
      >
        {/* <Text style={{ fontSize: 26, fontWeight: "bold" }}>{chatUserId}</Text> */}
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          {auth.currentUser.displayName}
        </Text>
      </View>

      {/* <SubmitButton text="Sign Out" onPress={handleLogout} /> */}
      {/* <SubmitButton
        text="Sign Out"
        onPress={() => {
          alert("signing out");
        }}
      /> */}

      <View
        style={{
          // backgroundColor: "white",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            height: 60,
            width: 300,
            alignItems: "center",
            borderRadius: 60,
            // padding: 20,
            margin: 3,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            height: 60,
            width: 300,
            alignItems: "center",
            borderRadius: 60,
            // padding: 20,
            margin: 3,
            justifyContent: "center",
          }}
          onPress={handleLogout}
        >
          <Text style={{ color: "white" }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

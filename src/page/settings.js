import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
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
  const [tempNickname, setTempNickname] = useState(
    // auth.currentUser.displayName
    chatUserId
  );
  const [nickname, setNickname] = useState(chatUserId);
  const [modalVisible, setModalVisible] = useState(false);

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
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TextInput
            style={{
              borderColor: "gray",
              borderStyle: "solid",
              borderWidth: 2,
              borderRadius: 10,
              padding: "2%",
              width: "80%",
              margin: "1%",
            }}
            placeholder='Change nickname'
            onChangeText={setTempNickname}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              height: 50,
              width: 100,
              alignItems: "center",
              borderRadius: 60,
              // padding: 20,
              margin: 3,
              justifyContent: "center",
            }}
            onPress={() => {
              setModalVisible(false);
              setNickname(tempNickname);
            }}
          >
            <Text style={{ color: "white" }}>Confirm changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              height: 50,
              width: 100,
              alignItems: "center",
              borderRadius: 60,
              // padding: 20,
              margin: 3,
              justifyContent: "center",
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: "white" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>{nickname}</Text>
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
          onPress={() => setModalVisible(true)}
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

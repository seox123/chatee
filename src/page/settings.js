import React from "react";
import { View, Text, Alert } from "react-native";
import SubmitButton from "../components/SubmitButton";

export default function Settings() {
  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       navigation.replace("Login");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Settings</Text>
      {/* <SubmitButton text="Sign Out" onPress={handleLogout} /> */}
      <SubmitButton
        text="Sign Out"
        onPress={() => {
          alert("signing out");
        }}
      />
    </View>
  );
}

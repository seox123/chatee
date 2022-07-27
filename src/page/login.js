import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../../App";
import { auth } from "../../firebase";
import PasswordInput from "../components/PasswordInput";
import SubmitButton from "../components/SubmitButton";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.replace("Home");
      })
      .catch((error) => alert("Invalid Email/Password"));
  };

  return (
    <AppContext.Consumer>
      {({ sendBird }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={{ ...styles.screen }}>
            <View style={styles.container}>
              <Image source={require("../../assets/readme/chatee-logo.png")} />
              <TextInput
                style={{ ...styles.input, marginTop: "10%" }}
                placeholder="Email"
                onChangeText={setEmail}
              />
              <PasswordInput onChangeText={setPassword} />
              <SubmitButton onPress={handleLogin} text="Log In" />
              <Text>OR</Text>
              <SubmitButton
                onPress={() =>
                  navigation.navigate("Signup", { userEmail: email })
                }
                text="Sign Up"
              />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f0fafa",
    height: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%",
  },
  input: {
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    padding: "2%",
    width: "80%",
    margin: "1%",
  },
});

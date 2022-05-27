import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Platform,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from "react-native-vector-icons/MaterialIcons";

import { AppContext } from "../../App";
import { auth } from "../../firebase";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <AppContext.Consumer>
      {({ sendBird }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* <StatusBar backgroundColor='#AFEEEE' barStyle='light-content' /> */}
          <SafeAreaView style={{ ...styles.screen }}>
            <View style={styles.container}>
              <Image source={require("../../assets/chatee-logo.png")} />
              <TextInput
                style={{ ...styles.input, marginTop: "10%" }}
                placeholder='Username'
                onChangeText={setUsername}
              />
              <View
                style={{
                  ...styles.input,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextInput
                  placeholder='Password'
                  style={{ width: "100%" }}
                  maxLength={30}
                  secureTextEntry={hidden}
                  keyboardType={hidden ? "default" : "visible-password"}
                  onChangeText={setPassword}
                />
                <TouchableHighlight style={styles.icon} underlayColor={"blue"}>
                  <Icon
                    style={{ fontSize: 25 }}
                    name={hidden ? "visibility-off" : "visibility"}
                    onPress={() => setHidden(!hidden)}
                  />
                </TouchableHighlight>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log(username + "\n" + password)}
                color='#841584'
              >
                <Text style={{ color: "white" }}>Log In</Text>
              </TouchableOpacity>
              <Text>OR</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Signup", { user: username })
                }
                color='#841584'
              >
                <Text style={{ color: "white" }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#E0FFFF",
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
  button: {
    backgroundColor: "green",
    height: 40,
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  icon: {
    position: "absolute",
    right: 8,
  },
});

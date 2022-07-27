import { StyleSheet, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { auth } from "../../firebase";
import PasswordInput from "../components/PasswordInput";
import SubmitButton from "../components/SubmitButton";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup({ route, navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateProfile(user, { displayName: username });
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={{ ...styles.screen }}>
      <View style={{ ...styles.container }}>
        <TextInput
          style={{ ...styles.input }}
          placeholder="Username"
          onChangeText={setUsername}
        />
        <TextInput
          style={{ ...styles.input }}
          placeholder="Email"
          defaultValue={route.params.userEmail}
          onChangeText={setEmail}
        />
        <PasswordInput onChangeText={setPassword} />
        <PasswordInput
          onChangeText={setPassword}
          placeholder="Confirm Password"
        />
        <SubmitButton onPress={handleSignUp} text="Confirm" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#E0FFFF",
    height: "100%",
  },
  container: {
    backgroundColor: "#E0FFFF",
    height: "100%",
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

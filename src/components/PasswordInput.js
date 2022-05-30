import { useState } from "react";
import { StyleSheet, TouchableHighlight, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function PasswordInput(props) {
  const [hidden, setHidden] = useState(true);

  return (
    <View
      style={{
        ...styles.input,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder={props.placeholder}
        style={{ width: "100%" }}
        maxLength={30}
        secureTextEntry={hidden}
        keyboardType={hidden ? "default" : "visible-password"}
        onChangeText={props.onChangeText}
      />
      <TouchableHighlight style={styles.icon} underlayColor={"blue"}>
        <Icon
          style={{ fontSize: 25 }}
          name={hidden ? "visibility-off" : "visibility"}
          onPress={() => setHidden(!hidden)}
        />
      </TouchableHighlight>
    </View>
  );
}

PasswordInput.defaultProps = {
  placeholder: "Password",
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    padding: "2%",
    width: "80%",
    margin: "1%",
  },
  icon: {
    position: "absolute",
    right: 8,
  },
});

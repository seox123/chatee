import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SubmitButton(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
      color='#841584'
    >
      <Text style={{ color: "white" }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    height: 40,
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
});

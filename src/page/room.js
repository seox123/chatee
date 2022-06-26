import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

export default function Room(props) {
  const { route } = props;
  const {
    params: { channel },
  } = route;

  const navigation = useNavigation();

  return (
    <SubmitButton
      text="Go to Chat"
      onPress={() => {
        navigation.navigate("Chatscreen", { channel });
      }}
    />
  );
}

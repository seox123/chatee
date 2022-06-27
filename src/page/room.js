import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import GameArea from "../components/GameArea";
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

  return (
    <>
      <GameArea />
      <SubmitButton
        text="Go to Chat"
        onPress={() => {
          navigation.navigate("Chat", { channel });
        }}
      />
    </>
  );
}

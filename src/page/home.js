import { ChannelList } from "stream-chat-expo";
// import { useChatClient } from "../../useChatClient";
import { chatApiKey, chatUserId } from "../../chatConfig";

import SubmitButton from "../components/SubmitButton";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { StreamChat } from "stream-chat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Home({ navigation }) {
  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       navigation.replace("Login");
  //     })
  //     .catch((error) => alert(error.message));
  // };
  const chatClient = StreamChat.getInstance(chatApiKey);

  // const onChannelPressed = (channel) => {
  //   console.log(channel);
  // };

  return (
    // <OverlayProvider>
    //   <Chat client={chatClient}>
    <>
      <SubmitButton
        text="test"
        onPress={() => {
          console.log("clicked");
          navigation.navigate("Settings");
        }}
      />
      <ChannelList
        onSelect={
          // onChannelPressed
          (channel) => {
            navigation.navigate("Room", { channel });
          }
        }
      />

      {/* <SubmitButton
          text="Sign Out"
          onPress={handleLogout)}
        /> */}
    </>
    //   </Chat>
    // </OverlayProvider>
  );
}

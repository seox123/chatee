import { ChannelList } from "stream-chat-expo";
import { useChatClient } from "../../useChatClient";
import SubmitButton from "../components/SubmitButton";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Home({ navigation }) {
  const { clientIsReady } = useChatClient();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <ChannelList />
      <SubmitButton text='Sign Out' onPress={handleLogout} />
    </>
  );
}

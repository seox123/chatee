import { ChannelList } from "stream-chat-expo";
import SubmitButton from "../components/SubmitButton";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { StreamChat } from "stream-chat";

export default function Channelscreen({ navigation }) {
  return (
    <>
      <ChannelList
        onSelect={(channel) => {
          navigation.navigate("Room", { channel });
        }}
      />
    </>
  );
}

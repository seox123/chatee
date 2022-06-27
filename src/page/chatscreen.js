import { Channel, MessageList, MessageInput } from "stream-chat-expo";

const Chatscreen = (props) => {
  const { route } = props;
  const {
    params: { channel },
  } = route;

  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default Chatscreen;

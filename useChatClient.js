import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  chatApiKey,
  chatUserId,
  chatUserName,
  chatUserToken,
} from "./chatConfig";

const user = {
  id: chatUserId,
  name: chatUserName,
};

const chatClient = StreamChat.getInstance(chatApiKey);

export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);

  useEffect(() => {
    const setupClient = async () => {
      try {
        await chatClient.connectUser(user, chatUserToken);
        setClientIsReady(true);
        console.log("Stream Chat connect user");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    if (!chatClient.userID) {
      setupClient();
    }
  }, []);

  return {
    clientIsReady,
  };
};

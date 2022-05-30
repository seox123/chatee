import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";

const API_KEY = "uznq5vffb77t";
const testUserID = "seox123";
const testUserToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2VveDEyMyJ9.Ggj98zlpcEzJVrUQqdqodTJgdIaQzZXtIG4ZvoPqVIY";
const testUserName = "seox123";

const user = {
  id: testUserID,
  name: testUserName,
};

const chatClient = StreamChat.getInstance(API_KEY);

export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);

  useEffect(() => {
    const setupClient = async () => {
      try {
        console.log("here");
        await chatClient.connectUser(user, testUserToken);

        setClientIsReady(true);
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

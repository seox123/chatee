// import { StatusBar } from "expo-status-bar";
import "./ignoreWarnings";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/page/login";
import Signup from "./src/page/signup";
import Home from "./src/page/home";
import Chatscreen from "./src/page/chatscreen";
import Room from "./src/page/room";
import Settings from "./src/page/settings";
import Eventscreen from "./src/page/event";
import Channelscreen from "./src/page/channelList";

import { StreamChat } from "stream-chat";
import { ChannelList, Chat, OverlayProvider } from "stream-chat-expo";
import { useChatClient } from "./useChatClient";
import { chatApiKey } from "./chatConfig";
import Test from "./src/page/test";
import GameRoom from "./src/page/gameRoom";

const chatClient = StreamChat.getInstance(chatApiKey);

export const AppContext = React.createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  // const { clientIsReady } = useChatClient();

  // if (!clientIsReady) {
  //   return <Text>Loading chat ...</Text>;
  // }

  console.log("app restarted");
  return (
    <NavigationContainer>
      <OverlayProvider>
        <Chat client={chatClient}>
          <AppContext.Provider value={"hello"}>
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerTitle: "", headerTransparent: true }}
              />
              <Stack.Screen
                name='Signup'
                component={Signup}
                options={{ headerTransparent: true }}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name='Test'
                component={Test}
              />
            </Stack.Navigator>
          </AppContext.Provider>
        </Chat>
      </OverlayProvider>
    </NavigationContainer>
  );
}

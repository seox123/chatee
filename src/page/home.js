import { ChannelList } from "stream-chat-expo";
// import { useChatClient } from "../../useChatClient";
import { chatApiKey, chatUserId } from "../../chatConfig";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SubmitButton from "../components/SubmitButton";
import { StreamChat } from "stream-chat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Import pages for navigation tab
import Eventscreen from "./event";
import Channelscreen from "./channelList";
import Settings from "./settings";
import Room from "./room";
import Chatscreen from "./chatscreen";
import GameRoom from "./gameRoom";
import Dashboard from "./dashboard";
import Shop from "./shop";

const ChatStack = createNativeStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Channels" component={Channelscreen} />
      {/* <ChatStack.Screen name="GameRoom" component={GameRoom} /> */}
      <ChatStack.Screen
        options={{ headerShown: false }}
        name="Room"
        component={Room}
      />
      <ChatStack.Screen name="Chat" component={Chatscreen} />
      <ChatStack.Screen name="Dashboard" component={Dashboard} />
      <ChatStack.Screen name="Shop" component={Shop} />
    </ChatStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <>
      <Tab.Navigator
        initialRouteName={"Chats"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === "Chats") {
              iconName = focused
                ? "chatbox-ellipses"
                : "chatbox-ellipses-outline";
            } else if (rn === "Events") {
              iconName = focused ? "calendar" : "calendar-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Events" component={Eventscreen} />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Chats"
          component={ChatStackScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </>
  );
}

{
  /* <SubmitButton
        text="test"
        onPress={() => {
          console.log("clicked");
        }}
      /> */
}

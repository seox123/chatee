import { ChannelList } from "stream-chat-expo";
import { chatApiKey, chatUserId } from "../../chatConfig";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SubmitButton from "../components/SubmitButton";
import { StreamChat } from "stream-chat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Import pages for navigation tab
import Shop from "./shop";
import Dashboard from "./dashboard";
import Room from "./room";

// const ChatStack = createNativeStackNavigator();

// function ChatStackScreen() {
//   return (
//     <ChatStack.Navigator>
//       <ChatStack.Screen name="Channels" component={Channelscreen} />
//       <ChatStack.Screen name="Room" component={Room} />
//       <ChatStack.Screen name="Chat" component={Chatscreen} />
//     </ChatStack.Navigator>
//   );
// }

const GameTab = createBottomTabNavigator();

export default function GameRoom({ navigation }) {
  return (
    <>
      <GameTab.Navigator
        initialRouteName={"Room"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Dashboard") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === "Room") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Shop") {
              iconName = focused ? "list" : "list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <GameTab.Screen name="Room" component={Room} />
        <GameTab.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={Dashboard}
        />
        <GameTab.Screen
          // options={{ headerShown: false }}
          name="Shop"
          component={Shop}
        />
      </GameTab.Navigator>
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

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "./src/page/login";
import Signup from "./src/page/signup";
import Home from "./src/page/home";

import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";

const API_KEY = "uznq5vffb77t";
const client = StreamChat.getInstance(API_KEY);

export const AppContext = React.createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <OverlayProvider>
      <Chat client={client}>
        <NavigationContainer>
          <AppContext.Provider value={"hello"}>
            <Stack.Navigator>
              {/* <View style={styles.container}>
                <Text>Hello World!</Text>
                <StatusBar style="auto" />
              </View> */}
              <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerTitle: "", headerTransparent: true }}
              />
              <Stack.Screen
                name='Signup'
                component={Signup}
                options={{ headerTransparent: true }}
              />
              <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
          </AppContext.Provider>
        </NavigationContainer>
      </Chat>
    </OverlayProvider>
  );
}

const defaultHeaderOptions = {
  headerStyle: {
    height: 1,
    backgroundColor: "#fff",
  },
  headerTintColor: "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2",
    alignItems: "center",
    justifyContent: "center",
  },
});

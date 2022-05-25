import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from './src/page/login';
import Lobby from './src/page/lobby';
import SendBird from 'sendbird';

const APP_ID = 'D64A1C3C-01F3-4B09-8173-6556C729FA33';
const sb = new SendBird({appId: APP_ID});
export const AppContext = React.createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppContext.Provider value={ sb }>
        <Stack.Navigator>
          {/* <View style={styles.container}>
            <Text>Hello World!</Text>
            <StatusBar style="auto" />
          </View> */}
          <Stack.Screen name="Login" component={Login} options={{ headerTitle: '', headerTransparent: true }} />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
}

const defaultHeaderOptions = {
  headerStyle: {
    height: 1,
    backgroundColor: '#fff',
  },
  headerTintColor: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

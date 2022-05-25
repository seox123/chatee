import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform, Button, TextInput, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Icon from 'react-native-vector-icons/MaterialIcons';

import { AppContext } from '../../App';

export default function Lobby() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AppContext.Consumer>
      {({ sendBird }) => (
        <>
          <StatusBar backgroundColor='#AFEEEE' barStyle='light-content' />
          <SafeAreaView style={{backgroundColor: '#E0FFFF', height:'100%'}}>
            <View style={styles.container}>
              <Image source={require('../../assets/chatee-logo.png')} />
              <TextInput
                style={{...styles.input, marginTop: '10%'}}
                placeholder='Username'
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log(username + '\n' + password)}
                color='#841584'
              >
                <Text style={{color: 'white'}}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => 1+1}
                color='#841584'
              >
                <Text style={{color: 'white'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    padding: '2%',
    width: '80%',
    textAlign: 'center',
    margin: '1%',
  },
  button: {
    backgroundColor: 'green',
    height: 40,
    width: 100,
    alignItems: 'center',
    borderRadius:10,
    padding: 10,
    margin: 3,
  },
});

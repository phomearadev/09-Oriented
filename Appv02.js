import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';


import { SafeAreaView, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';

import HomeScreen from './app/Myhome';
import FlyScreen from './app/Myfly';
import OrientScreen from './app/MyOrient';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Myhome" component={HomeScreen} />
        <Stack.Screen name="Myfly" component={FlyScreen} />
        <Stack.Screen name="MyOrient" component={OrientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
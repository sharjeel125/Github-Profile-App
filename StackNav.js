import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from './screen/Splashscreen';
import Home from './screen/Home';
import Form from './screen/Form';
import Flashlight from './screen/Flashlight';
import RealtimeSearch from './screen/RealtimeSearch';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={Splashscreen} />
      <Stack.Screen name="form" component={Form} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="flashlight" component={Flashlight} />
      <Stack.Screen name="RealtimeSearch" component={RealtimeSearch} />
    </Stack.Navigator>
  );
}

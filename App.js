import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from './screen/Splashscreen';
import Home from './screen/Home';
import Form from './screen/Form';
import Flashlight from './screen/Flashlight';
import RealtimeSearch from './screen/RealtimeSearch';
import StackNav from './StackNav'

export default function App() {
  return (
    <NavigationContainer>
     <StackNav/>
    </NavigationContainer>
  );
}

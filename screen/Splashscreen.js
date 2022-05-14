import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export default function Splashscreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.replace('home');
        } else {
          navigation.replace('form');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
        alignItems: 'center',
      }}>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            source={require('../images/splash.gif')}
            style={{height: 200, width: 200}}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

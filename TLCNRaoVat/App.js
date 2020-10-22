/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import ForgotPassword from './src/screen/ForgotPassword';
import StackNavigator from './src/navigators/StackNavigator';

const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
        <StatusBar barStyle = 'light-content'/>
        <StackNavigator/>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;

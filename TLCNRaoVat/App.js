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
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import ForgotPassword from './src/screen/ForgotPassword';


const App = () => {
  return (
    <View style = {{flex:1}}>
        {/* <LoginScreen/> */}
        {/* <RegisterScreen/> */}
        <ForgotPassword/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

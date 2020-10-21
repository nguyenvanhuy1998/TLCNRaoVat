import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import styles from './styles'
import { background_Login } from '../../images'
export default class LoginScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <ImageBackground source = {background_Login} style = {{flex:1}}>
                    
                </ImageBackground>
            </View>
        )
    }
}



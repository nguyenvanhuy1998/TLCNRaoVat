import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
export default class ProfileScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}


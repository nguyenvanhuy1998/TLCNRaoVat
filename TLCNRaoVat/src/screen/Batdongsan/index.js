import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
export default class Batdongsan extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style = {styles.container}>
                <Header title = {"Bất động sản"} onPress = {() => navigation.pop()}/>
            </View>
        )
    }
}


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
export default class ProfileScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                  <Header noBack title = {'Thông tin cá nhân'}/>
                  <NotLogin/>
            </View>
        )
    }
}


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'

export default class PostScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                  <Header noBack title = {'Bài đăng'}/>
            </View>
        )
    }
}



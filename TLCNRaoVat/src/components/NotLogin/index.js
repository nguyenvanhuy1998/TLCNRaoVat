import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import IconNotLogin from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationHelpersContext } from '@react-navigation/native'
export default class NotLogin extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <IconNotLogin style={styles.viewIcon} name='ios-person' />
                <Text style={styles.titleError}>Rất tiếc</Text>
                <Text style={styles.text}>Bạn cần đăng nhập để sử dụng tính năng này</Text>
                {/* <TouchableOpacity style = {styles.viewButtonDangNhap} onPress = {() => alert('123')}>
                <View style={[StyleSheet.absoluteFill,{ backgroundColor: 'black', opacity: 0.1}] } />
                    <Text style = {styles.btnLogin}>Đăng nhập</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style = {styles.viewButtonDangNhap}>
                    <Text style = {styles.btnLogin}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { iconBack } from '../../images'
export default class Header extends Component {
    render() {
        const { title, onPress, noBack } = this.props
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                {
                    !noBack ? <TouchableOpacity style = {{
                        width: 50,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                   }} onPress = {onPress}>
                       <Image source = {iconBack}/>
                   </TouchableOpacity> : null
                }
                
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                </View>
            </View>
        )
    }
}


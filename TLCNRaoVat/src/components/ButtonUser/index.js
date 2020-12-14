import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'
export default class ButtonUser extends Component {
    
    render() {
        const {title, nameIcon, content, onPress} = this.props
        return (
            <View style={{ marginHorizontal: 16, marginBottom: 16 }}>
                <Text>{title}</Text>
                <TouchableOpacity onPress = {onPress} style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 1,
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 4,
                    borderColor: colors.grayColor,
                    alignItems: 'center'
                }}>
                    <Icon name={nameIcon} style={{ fontSize: 24 }} />
                    <Text>{content}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'
import IconRight from 'react-native-vector-icons/Ionicons'

export default class InforItem extends Component {
    render() {
        const {nameIcon, title, content, disabled, onPress } = this.props
        return (
            <TouchableOpacity style={{
                marginTop: 10,
                alignItems: 'center',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8
            }} disabled = {disabled} onPress = {onPress}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconRight name={nameIcon} color={colors.colorDisplay} style={{ fontSize: 20 }} />
                <Text style={{ marginLeft: 8, fontSize: 16 }}>{title}</Text>
                </View>
                <Text>{content}</Text>
            </TouchableOpacity>
        )

    }
}

const styles = StyleSheet.create({
    containerInfo: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    title: {
        fontSize: 12, color: colors.colorDisplay, fontWeight: '600'
    },
    primary: {
        fontSize: 14, marginTop: 6
    }

})

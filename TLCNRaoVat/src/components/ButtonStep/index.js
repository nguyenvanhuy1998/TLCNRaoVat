import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import metrics from '../../styles/metrics'
import colors from '../../styles/colors'

export default class ButtonStep extends Component {
    render() {
        const {onPress, name} = this.props
        return (
            <TouchableOpacity onPress = {onPress} style = {{
                backgroundColor:colors.headerColor,
                paddingVertical:15,
                alignItems:'center',
                marginBottom:metrics.safePadding
            }}>
                <Text style = {{
                    fontSize:24,
                    color:'white', fontWeight:'bold'
                }}>{name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})

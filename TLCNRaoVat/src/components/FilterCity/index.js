import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { iconDownFilter } from '../../images'

export default class FilterCity extends Component {
    render() {
        const { onPress, title, type } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={{ borderRightWidth: 1, width: 107, padding: 10 }}>
                <Text style={{
                    fontSize: 12,
                    color: '#8B8B8B',
                    marginBottom: 4
                }}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, }}>{type}</Text>
                    <Image source={iconDownFilter} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

})

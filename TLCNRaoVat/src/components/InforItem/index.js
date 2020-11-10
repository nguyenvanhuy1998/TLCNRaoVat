import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'
import IconRight from 'react-native-vector-icons/Ionicons'

export default class InforItem extends Component {
    render() {
        const { title, primary } = this.props
        return (
            <TouchableOpacity style={styles.containerInfo}>
                <View style={{}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.primary}>{primary}</Text>
                </View>
                <IconRight name="chevron-forward-outline" style={{ fontSize: 20 }} color={colors.colorDisplay} />
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

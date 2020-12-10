import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'
import colors from '../../styles/colors'

export default class Button extends Component {
    render() {
        const { title, onPress } = this.props
        return (
            <TouchableOpacity style={styles.viewDangBai} onPress={onPress}>
                <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.headerColor, opacity: 0.1 }]} />
                <Text style={styles.btnPost}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    viewDangBai: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    btnPost: {
        textAlign: 'center',
        color: colors.headerColor,
        fontWeight: 'bold'
    },

})

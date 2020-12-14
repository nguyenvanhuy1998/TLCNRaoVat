import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'
import colors from '../../styles/colors'

export default class Button extends Component {
    render() {
        const { title, onPress } = this.props
        return (
            <TouchableOpacity style={styles.viewDangBai} onPress={onPress}>
                <Text style={styles.btnPost}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    viewDangBai: {
        backgroundColor:colors.headerColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal:16,
        marginTop:16,
        borderRadius:8,
    },
    btnPost: {
        textAlign: 'center',
        color: 'white',
    },

})

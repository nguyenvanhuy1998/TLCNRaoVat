import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class ViewTextInputPost extends Component {
    render() {
        const {title, placeholder, value, onChangeText,marginTop} = this.props
        return (
            <View style = {{marginTop:marginTop}}>
                <Text style={styles.title}>{title}</Text>
                <TextInput
                    style={styles.textInput}
                    multiline
                    numberOfLines={4}
                    placeholder= {placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
    },
    title:{
        fontSize: 16,
        fontWeight: '600'
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#979797',
        marginTop: 10,
        padding: 10,
        textAlign:'justify',
    }
})

import React, { Component } from 'react'
import { Text, StyleSheet, View , TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'

export default class TextInputUser extends Component {
    render() {
        const {title, nameIcon, value, placeholder, onChangeText} = this.props
        return (
            <View style={{marginVertical:8, marginHorizontal:16}}>
                <Text>{title}</Text>
                <View style={{ marginBottom: 16, flexDirection: 'row', marginTop: 8, padding: 8, borderRadius: 4, borderWidth: 1, borderColor: colors.grayColor }}>
                    <Icon name={nameIcon} style={{ fontSize: 24 }} />
                    <TextInput style={styles.textInput}
                        placeholder={placeholder}
                        placeholderTextColor={colors.grayColor}
                        value={value}
                        onChangeText={onChangeText}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        marginLeft:6,
        flex:1,
    }
})

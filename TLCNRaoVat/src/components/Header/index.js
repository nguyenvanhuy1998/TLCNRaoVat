import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { iconBack } from '../../images'
import IconSearch from 'react-native-vector-icons/Ionicons'
export default class Header extends Component {
    render() {
        const { title, onPress, noBack, noSearch, onPressSearch } = this.props
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {
                        !noBack ? <TouchableOpacity style={styles.iconLeft} onPress={onPress}>
                            <Image source={iconBack} />
                        </TouchableOpacity> : null
                    }

                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    {
                        !noSearch ? <TouchableOpacity style={styles.iconRight} onPress={onPressSearch}>
                            <IconSearch name="ios-search" style={{ fontSize: 24 }} color='white' />
                        </TouchableOpacity> : null
                    }

                </View>
            </View>
        )
    }
}


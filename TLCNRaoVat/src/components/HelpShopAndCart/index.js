import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import styles from './styles'
import { iconHelpContent, iconDownHelp } from '../../images'
export default class HelpShopAndCart extends Component {
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.containerItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width:300 }}>
                    <Image source={iconHelpContent} />
                    <Text style={{ marginLeft: 8 }} numberOfLines={2}>{item.content}</Text>
                </View>
                <Image source={iconDownHelp} />

            </View>
        )
    }
    render() {
        const { data } = this.props
        return (
            <FlatList data={data}
                style={{ flex: 1 }}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                ItemSeparatorComponent={() => <View style={styles.viewHeight} />}
            />
        )
    }
}


import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataHome } from '../../Data'
import IconRight from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'
export default class PostStepFirst extends Component {
    _renderItem = ({ item, index }) => {
        const {navigation} = this.props
        return (
            <TouchableOpacity onPress = {() => navigation.navigate("PostStepSecond", {data:item.name}) } style={styles.containerItem}>
                <Text style={{ fontSize: 16 }}>{item.name}</Text>
                <IconRight name="chevron-forward-outline" style={{ fontSize: 20 }} color={colors.colorRegular} />
            </TouchableOpacity>
        )
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header title="Chọn danh mục" onPress={() => navigation.pop()} />
                <FlatList data={dataHome}
                    alwaysBounceVertical = {false}
                    showsVerticalScrollIndicator = {false}
                    style={{ flex: 1 }}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

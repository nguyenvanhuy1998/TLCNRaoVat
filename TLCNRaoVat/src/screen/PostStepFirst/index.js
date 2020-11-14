import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataHome } from '../../Data'
import IconRight from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'
export default class PostStepFirst extends Component {
    _renderItem = ({item,index}) => {
        return(
            <View style = {styles.containerItem}>
                    <Text style = {{fontSize:16}}>{item.name}</Text>
                    <IconRight name="chevron-forward-outline" style={{ fontSize: 20 }} color={colors.colorRegular} />
            </View>
        )
    }
    render() {
        const {navigation} = this.props
        return (
            <View style = {styles.container}>
                <Header title = "Chọn danh mục" onPress = {() => navigation.pop()}/>
                <FlatList data={dataHome}
                            style={{ flex: 1}}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}


import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataTitleBatdongsan, dataBatdongsan } from '../../Data'
import { iconDownFilter } from '../../images'
import FilterCity from '../../components/FilterCity'
import colors from '../../styles/colors'
import { numberToString } from '../../util'
export default class Batdongsan extends Component {
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.viewItemFilter}>
                <Image style={{ flex: 1 }} source={item.image} />
                <Text style={styles.titleFilter}>{item.title}</Text>
            </View>
        )
    }
    _renderItemPrimary = ({ item, index }) => {
        return (
            <View style={styles.containerItemPrimary}>
                <Image source={item.image} resizeMode = 'stretch' style={styles.imageBatdongsan} />
                <Text numberOfLines={1} style={styles.titlePrimary}>{item.title}</Text>
                <Text style={styles.price}>{numberToString(item.price)}</Text>
                <Text style={styles.city}>{item.city}</Text>
            </View>
        )
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header title={"Bất động sản"} onPress={() => navigation.pop()} />
                <View style={styles.primaryFilter}>
                    <FlatList
                        style={{ padding: 10 }}
                        data={dataTitleBatdongsan}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    // alwaysBounceHorizontal={false}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                        <FilterCity title={"Tỉnh/Thành"} type="Tất cả" />
                        <FilterCity title={"Số phòng"} type="Tất cả" />
                    </View>
                    <FlatList
                        style={{ marginHorizontal: 16, paddingTop: 16 }}
                        data={dataBatdongsan}
                        numColumns={2}
                        renderItem={this._renderItemPrimary}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>

            </View>
        )
    }
}


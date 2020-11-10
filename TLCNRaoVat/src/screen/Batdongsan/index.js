import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataTitleBatdongsan } from '../../Data'
import metrics from '../../styles/metrics'
export default class Batdongsan extends Component {
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.viewItemFilter}>
                <Image style={{ flex: 1 }} source={item.image} />
                <Text style={styles.titleFilter}>{item.title}</Text>
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
            </View>
        )
    }
}


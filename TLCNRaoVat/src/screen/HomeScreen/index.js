import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView,FlatList,TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native'
import styles from './styles'
import helper from '../../helper'
import metrics from '../../styles/metrics'
import IconSearch from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import { dataHome } from '../../Data'
const numColumns = 2

export default class HomeScreen extends Component {
    formatData = (dataList, numColumns) => {
        const totalRows = Math.floor(dataList.length / numColumns)
        let totalLastRow = dataList.length - (totalRows * numColumns)
        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            // dataList.push({ "name": "Null", empty: true })
            totalLastRow++
        }
        return dataList
    }
    _renderItem = ({item, index}) => {
        return(
            <TouchableOpacity style = {styles.item} onPress = {() => {alert('123')}}>
                <Image source = {item.image} resizeMode = 'contain' style = {{width:84, height:84}}/>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBarHeight} />
                <View style={styles.viewContainerSearch}>
                    <View style={styles.viewSearch}>
                        <IconSearch name="search" size={16} color = {colors.grayColor} />
                        <Text style = {styles.textSearch}>Tìm kiếm</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator = {false} style = {styles.viewPrimary}>
                        <Text style = {styles.title}>Khám phá danh mục</Text>
                        <FlatList
                            style = {styles.viewFlatList}
                            data = {this.formatData(dataHome, numColumns)}
                            renderItem = {this._renderItem}
                            numColumns={numColumns}
                            showsVerticalScrollIndicator={false}
                            keyExtractor = {(item,index) => index.toString()}
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}



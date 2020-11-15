import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataTitleBatdongsan } from '../../Data'
import IconRight from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'
export default class PostStepSecond extends Component {
    constructor(props){
        super(props)
        const data = props.route?.params?.data 
        this.state = {
            data
        }
    }
    _renderItem = ({ item, index }) => {
        const {navigation} = this.props
        return (
            <TouchableOpacity onPress = {() => navigation.navigate("PostStepThird") } style={styles.containerItem}>
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
                <IconRight name="chevron-forward-outline" style={{ fontSize: 20 }} color={colors.colorRegular} />
            </TouchableOpacity>
        )
    }
    render() {
        const { navigation } = this.props
        const {data} = this.state
        
        return (
            <View style={styles.container}>
                <Header title= {data} onPress={() => navigation.pop()} />
                <FlatList data={dataTitleBatdongsan}
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


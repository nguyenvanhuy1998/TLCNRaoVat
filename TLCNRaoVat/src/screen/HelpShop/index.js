import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataHelpShop } from '../../Data/index'
import { iconHelp, iconHelpContent, iconDownHelp } from '../../images'
import HelpShopAndCart from '../../components/HelpShopAndCart'

export default class HelpShop extends Component {
   constructor(props){
       super(props)
   }
    render() {
        return (
            <View style={styles.container}>
                <Header title={"Hỗ trợ người bán"} onPress={() => this.props.navigation.pop()} />
                <HelpShopAndCart data = {this.props.route.params.dataShop}/>

            </View>
        )
    }
}


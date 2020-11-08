import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import HelpShopAndCart from '../../components/HelpShopAndCart'
import { dataHelpCart } from '../../Data'
export default class HelpCart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header title={"Hỗ trợ người mua"} onPress={() => this.props.navigation.pop()} />
                <HelpShopAndCart data = {dataHelpCart}/>
            </View>
        )
    }
}


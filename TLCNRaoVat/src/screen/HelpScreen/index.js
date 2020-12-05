import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import HelpTitle from '../../components/HelpTitle'
import { iconShop, iconCart } from '../../images'
export default class HelpScreen extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style = {styles.container}>
                  <Header noBack title = {'Hỗ trợ'}/>
                  {/* <View style = {{flex:1, justifyContent:'center', alignItems:'center', paddingHorizontal:16}}>
                       <HelpTitle onPress = {() => navigation.navigate('HelpShop') } image = {iconShop} title = {"Tôi là người bán"} content = {"Những mẹo vặt, các hướng dẫn giúp bán hàng nhanh chóng và tiện lợi trên  Rao Vặt"}/>
                       <HelpTitle onPress = {() => navigation.navigate('HelpCart') } image = {iconCart} title = {"Tôi là người mua"} content = {"Những mẹo vặt, các hướng dẫn giúp mua hàng nhanh chóng và tiện lợi trên Rao Vặt "}/>
                  </View> */}
                  <NotLogin/>
            </View>
        )
    }
}


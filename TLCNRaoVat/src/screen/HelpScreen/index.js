import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import HelpTitle from '../../components/HelpTitle'
import { iconShop, iconCart } from '../../images'
import AsyncStorage from '@react-native-community/async-storage'
import { BASE_URL } from '../../network/config'
export default class HelpScreen extends Component {
    constructor(props) {
        super(props)
        this._getToken()
        this.state = {
            user: null,
            data: {}
        }
    }
    componentDidMount = () => {
        this._unsubscribe = this.props.navigation.addListener('focus', this.componentDidFocus)

    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    componentDidFocus = () => {
        this._getToken()
    }


    _getToken = async () => {
        try {
            await AsyncStorage.getItem('Token')
                .then(resultToken => {
                    // VerifyToken
                    let axios = require('axios')
                    let qs = require('qs')
                    let data = qs.stringify({
                        'Token': resultToken
                    })
                    var config = {
                        method: 'post',
                        url: BASE_URL + '/verifyToken',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: data
                    }
                    axios(config)
                        .then((res) => {
                            if (res.data.kq == 1) {

                                this.setState({
                                    user: res.data.User
                                })
                                let dataHelp = qs.stringify({
                                   
                                })
                                var config = {
                                    method: 'post',
                                    url: BASE_URL + '/help',
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    },
                                    data: dataHelp
                                }
                                axios(config)
                                .then((response) => {
                                   
                                    if(response.data.kq == 1){
                                        this.setState({
                                            data: response.data.list
                                        })
                                    }else {
                                        console.log('====================================');
                                        console.log("Error");
                                        console.log('====================================');
                                    }
                                })
                                .catch((err)=> {
                                    console.log('====================================');
                                    console.log(err);
                                    console.log('====================================');
                                }) 

                            } else {
                                console.log(res.data.errMsg)
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
        } catch (error) {
            console.log("error", error)
        }
    }
    render() {
        const { navigation } = this.props
        const { user, data} = this.state
       
        return (
            <View style={styles.container}>
                <Header noSearch noBack title={'Hỗ trợ'} />
                {
                    user != null
                        ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
                            <HelpTitle onPress={() => navigation.navigate('HelpShop', {
                                dataShop: data.filter(x => x.Type == "Người bán")
                            })} image={iconShop} title={"Tôi là người bán"} content={"Những mẹo vặt, các hướng dẫn giúp bán hàng nhanh chóng và tiện lợi trên  Rao Vặt"} />
                            <HelpTitle onPress={() => navigation.navigate('HelpCart', {
                                dataCart: data.filter(x => x.Type == "Người mua")
                            })} image={iconCart} title={"Tôi là người mua"} content={"Những mẹo vặt, các hướng dẫn giúp mua hàng nhanh chóng và tiện lợi trên Rao Vặt "} />
                        </View> :
                        <NotLogin onPress={() => navigation.navigate("Login")} />
                }


            </View>
        )
    }
}


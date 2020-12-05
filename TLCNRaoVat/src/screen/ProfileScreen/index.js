import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import { iconAvatar } from '../../images'
import colors from '../../styles/colors'
import InforItem from '../../components/InforItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import AsyncStorage from "@react-native-community/async-storage";
import { BASE_URL } from '../../network/config'
import helper from '../../helper'

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Huy Nguyễn",
            user:null
        }
    }
    // Check login
    // Nếu chưa login thì hiển thị màn hình login
    async componentDidMount() {
        try {
            await AsyncStorage.getItem('Token')
                .then(resultToken => {
                    // VerifyToken
                    let axios = require('axios')
                    let qs = require('qs')
                    let data =  qs.stringify({
                        'Token':resultToken
                    })
                    var config = {
                        method:'post',
                        url:BASE_URL + '/verifyToken',
                        headers: { 
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data:data
                    }
                    axios(config)
                    .then((res) => {
                        if(res.data.kq == 1){
                         
                            this.setState({
                                user:res.data.User
                            })
                        }else {
                            helper.alert("Thông báo", res.data.errMsg)
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
        const { name, user } = this.state
        console.log('====================================');
        console.log("user", user);
        console.log('====================================');
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header noBack title={'Thông tin cá nhân'} />
                {/* <NotLogin onPress={() => navigation.navigate("Login")} /> */}
                {
                    user != null 
                        ?
                        <ScrollView alwaysBounceVertical = {false}>
                            <View style={{ flexDirection: 'row', padding: 16 }}>
                                <Image source={iconAvatar} />
                                <View style={{ marginLeft: 8, padding: 8, flex: 1, borderColor: 'gray', borderWidth: 1, borderRadius: 8 }}>
                                    <Text style={{ fontSize: 12, color: colors.colorDisplay, fontWeight: '600', marginBottom: 4 }}>Họ và tên</Text>
                                    <TextInput
                                        style={{ fontSize: 14 }}
                                        placeholder={"Huy Nguyễn"}
                                        placeholderTextColor={'#C4C4C4'}
                                        onChangeText={(text) => { this.setState({ name: text }) }}
                                        value={name}
                                        blurOnSubmit={false}
                                    />
                                </View>
                            </View>
                            <InforItem title={'Số điện thoại'} primary={'Thêm số điện thoại'} />
                            <InforItem title={'Email'} primary={'Thêm địa chỉ email'} />
                            <InforItem title={'Địa chỉ'} primary={'Thêm địa chỉ'} />
                            <InforItem title={'Mật khẩu '} primary={'Đổi mật khẩu'} />
                            <InforItem title={'Giới tính'} primary={'Chưa có thông tin'} />
                            <InforItem title={'Ngày, tháng, năm sinh'} primary={'Chưa có thông tin'} />
                            <Button title={'ĐĂNG XUẤT'} />
                        </ScrollView>
                        :
                        <NotLogin onPress={() => navigation.navigate("Login")} />
                }
            </View>
        )
    }
}


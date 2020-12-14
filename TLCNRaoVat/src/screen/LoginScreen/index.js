import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { background_Login, logo } from '../../images'
import { BASE_URL } from '../../network/config'
import helper from '../../helper'
import AsyncStorage from "@react-native-community/async-storage";
import Loader from '../../components/Loader'
import {connect} from 'react-redux'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: '',
            error:''
        }
    }
    _submitLogin =  () => {
        const { phone, password } = this.state
        const {navigation} = this.props
        let newPhone = phone
        if (newPhone.substr(0, 1) == '0') {
            newPhone = newPhone.replace('0', '+84')
        } else if (newPhone.substr(0, 2) == '84') {
            newPhone = '+' + newPhone
        } else if (newPhone.substr(0, 1) == '') {
            newPhone = newPhone
        } else if (newPhone.substr(0, 1) != '+' && newPhone.substr(0, 1) != '0' && newPhone.substr(0, 2) != '84') {
            newPhone = '+84' + newPhone
        }
        let axios = require('axios');
        let qs = require('qs');
        var data = qs.stringify({
         'phone': newPhone,
        'passWord': password 
        });
        var config = {
          method: 'post',
          url: BASE_URL + '/login',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data : data
        };
        Loader.show()
        axios(config)
        .then(async (response)  =>  {
            Loader.hide()          
            if(response.data.kq == 1){
                await AsyncStorage.setItem('Token', response.data.Token)
                navigation.navigate("Home")
                // navigation.navigate("Home")
            }else {
                this.setState({
                    error: response.data.errMsg
                })
            }
        })
        .catch(function (error) {
          console.log(error);
        });
      


    }
 
    render() {
        const { phone, password, error } = this.state
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <ImageBackground source={background_Login} style={{ flex: 1 }}>
                    <View style={{ flex: 1, marginTop: 250 }}>
                        <TextInput style={styles.textInput}
                            onSubmitEditing={() => { this.secondTextInput.focus() }}
                            placeholder="Số điện thoại"
                            placeholderTextColor="white"
                            value={phone}
                            onChangeText={(text) => this.setState({ phone: text })}
                            returnKeyType='next'
                            keyboardType='name-phone-pad'
                        />
                        <TextInput style={styles.textInput}
                            ref={(input) => { this.secondTextInput = input }}
                            placeholder="Mật khẩu"
                            placeholderTextColor="white"
                            value={password}
                            onChangeText={(text) => this.setState({ password: text })}
                            secureTextEntry={true}
                            returnKeyType='go'
                        />
                        <TouchableOpacity style={styles.btnDangNhap} onPress = {this._submitLogin}>
                            <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                        {
                            !error ? null :  <Text style = {styles.textError}>{error}</Text>
                        }
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }} 
                        onPress = {() =>  navigation.navigate('Register')}>
                            <Text>Bạn chưa có tài khoản?</Text>
                            <Text style={styles.textRegister}>Đăng ký</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => navigation.navigate('ForgotPassword')} style={{ alignItems: 'center' }}>
                            <Text style={styles.textRegister}>Quên mật khẩu?</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}




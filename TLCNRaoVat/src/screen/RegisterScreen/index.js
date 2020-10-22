import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import {background_Register} from '../../images/index'
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: '',
            fullName:''

        }
    }
    render() {
        const { phone, password, fullName } = this.state
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <ImageBackground source={background_Register} style={{ flex: 1 }}>
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
                            onSubmitEditing={() => { this.thirdTextInput.focus() }}
                            placeholder="Mật khẩu"
                            placeholderTextColor="white"
                            value={password}
                            onChangeText={(text) => this.setState({ password: text })}
                            secureTextEntry={true}
                            returnKeyType='next'
                        />
                         <TextInput style={styles.textInput}
                            ref={(input) => { this.thirdTextInput = input }}
                            placeholder="Họ và Tên"
                            placeholderTextColor="white"
                            value={fullName}
                            onChangeText={(text) => this.setState({ fullName: text })}
                            returnKeyType='go'
                        />
                        <TouchableOpacity style={styles.btnDangNhap}>
                            <Text style={styles.textLogin}>ĐĂNG KÝ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => navigation.popToTop()} style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }}>
                            <Text>Bạn đã có tài khoản?</Text>
                            <Text style={styles.textRegister}>Đăng nhập</Text>
                        </TouchableOpacity>
                       

                    </View>
                </ImageBackground>
            </View>
        )
    }
}



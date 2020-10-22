import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { background_Login, logo } from '../../images'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: ''
        }
    }
    render() {
        const { phone, password } = this.state
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
                        <TouchableOpacity style={styles.btnDangNhap}>
                            <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }} onPress = {() =>  navigation.navigate('RegisterScreen')}>
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



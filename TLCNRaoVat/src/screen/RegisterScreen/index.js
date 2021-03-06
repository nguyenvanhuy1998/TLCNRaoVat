import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { background_Register } from '../../images/index'
import helper from '../../helper'
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            register: {
                phone: '',
                passWord: '',
                fullName: ''
            },
            error: {

            }


        }
    }
    _register = () => {
        const { navigation } = this.props
        const { phone, passWord, fullName } = this.state.register
        const { register } = this.state
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
        let data = {
            ...register,
            phone: newPhone
        }
        // console.log("Data", data)

        if (this.validateData(data)) {
            console.log("Data", data.phone, data.fullName, data.passWord)
            console.log(typeof (data.phone)),
                fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        phone: data.phone,
                        passWord: data.passWord,
                        fullName: data.fullName
                    })
                })
                    .then(res => res.json())
                    .then(json => console.log("json123", json))
        } else {
            // alert("Không hợp lệ")
        }
    }

    validateData = (register) => {
        let phone = helper.validatePhoneNumber(register.phone) ? null : "Số điện thoại không hợp lệ"
        let passWord = helper.validatePassword(register.passWord) ? null : "Mật khẩu tối thiểu 8 kí tự"
        let fullName = helper.validateFullName(register.fullName) ? null : "Họ và tên quá ngắn"
        this.setState({
            error: {
                phone,
                passWord,
                fullName
            }
        })
        return !(phone || passWord || fullName)
    }

    render() {
        const { register, error } = this.state
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <ImageBackground source={background_Register} style={{ flex: 1 }}>
                    <View style={{ flex: 1, marginTop: 250 }}>
                        <Text style={styles.textError}>{error.phone}</Text>
                        <TextInput style={styles.textInput}
                            onSubmitEditing={() => { this.secondTextInput.focus() }}
                            placeholder="Số điện thoại"
                            placeholderTextColor="white"
                            value={register.phone}
                            onChangeText={(text) => this.setState({
                                register: {
                                    ...this.state.register,
                                    phone: text
                                }
                            })}
                            returnKeyType='next'
                            keyboardType='name-phone-pad'
                        />
                        <Text style={{ ...styles.textError, marginTop: 82 }}>{error.passWord}</Text>
                        <TextInput style={styles.textInput}
                            ref={(input) => { this.secondTextInput = input }}
                            onSubmitEditing={() => { this.thirdTextInput.focus() }}
                            placeholder="Mật khẩu"
                            placeholderTextColor="white"
                            value={register.passWord}
                            onChangeText={(text) => this.setState({
                                register: {
                                    ...this.state.register,
                                    passWord: text
                                }
                            })}
                            secureTextEntry={true}
                            returnKeyType='next'
                        />
                        <Text style={{ ...styles.textError, marginTop: 144 }}>{error.fullName}</Text>
                        <TextInput style={styles.textInput}
                            ref={(input) => { this.thirdTextInput = input }}
                            placeholder="Họ và Tên"
                            placeholderTextColor="white"
                            value={register.fullName}
                            onChangeText={(text) => this.setState({
                                register: {
                                    ...this.state.register,
                                    fullName: text
                                }
                            })}
                            returnKeyType='go'
                        />
                        <TouchableOpacity style={styles.btnDangNhap} onPress={this._register}>
                            <Text style={styles.textLogin}>ĐĂNG KÝ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.popToTop()} style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }}>
                            <Text>Bạn đã có tài khoản?</Text>
                            <Text style={styles.textRegister}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}



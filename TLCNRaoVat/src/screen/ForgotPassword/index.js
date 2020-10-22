import React, { Component } from 'react'
import { Text, StyleSheet, View , ImageBackground, Image, TouchableOpacity, TextInput} from 'react-native'
import { background_Register } from '../../images'
import styles from './styles'
export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
           
        }
    }
    render() {
        const { phone } = this.state
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <ImageBackground source={background_Register} style={{ flex: 1 }}>
                    <View style={{ flex: 1, marginTop: 250 }}>
                        <TextInput style={styles.textInput}
                            placeholder="Số điện thoại"
                            placeholderTextColor="white"
                            value={phone}
                            onChangeText={(text) => this.setState({ phone: text })}
                            returnKeyType='next'
                            keyboardType='name-phone-pad'
                        />
                       
                        <TouchableOpacity style={styles.btnDangNhap}>
                            <Text style={styles.textLogin}>LẤY MẬT KHẨU</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => navigation.navigate('RegisterScreen')} style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }}>
                            <Text>Bạn chưa có tài khoản?</Text>
                            <Text style={styles.textRegister}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}



import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'
import Button from '../../components/Button'
import TextInputUser from '../../components/TextInputUser'
import ButtonUser from '../../components/ButtonUser'
export default class UpdateUser extends Component {
    constructor(props) {
        super(props)
        console.log('====================================');
        console.log(props.route.params);
        console.log('====================================');
        this.state = {
            email: '',
            fullName: '',
            address: ''
        }
    }
    _changeEmail = () => {

    }
    render() {
        const { navigation } = this.props
        const { email, fullName, address } = this.state
        return (
            <View style={styles.container}>
                <Header noSearch onPress={() => navigation.pop()} title={'Thông tin cá nhân'} />
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <TextInputUser
                        title="Email"
                        nameIcon="mail"
                        value={email}
                        onChangeText={(text) => this.setState({ email: text })}
                        placeholder="Vui lòng nhập Email" />
                    <TextInputUser
                        title="Họ và tên"
                        nameIcon="person-circle"
                        value={fullName}
                        onChangeText={(text) => this.setState({ fullName: text })}
                        placeholder="Vui lòng nhập Tên" />
                    <TextInputUser
                        title="Địa chỉ"
                        nameIcon="location"
                        value={address}
                        onChangeText={(text) => this.setState({ address: text })}
                        placeholder="Vui lòng nhập địa chỉ" />
                    <ButtonUser title="Giới tính" nameIcon="people" content="Khác" onPress={() => alert("123")} />
                    <ButtonUser title="Năm sinh" nameIcon="calendar" content="03/06/1998" onPress={() => alert("123")} />
                    <Button title={'HOÀN TẤT'} onPress={this._changeEmail} />
                </View>
            </View>
        )
    }
}


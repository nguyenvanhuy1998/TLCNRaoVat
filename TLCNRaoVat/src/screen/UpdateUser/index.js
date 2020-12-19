import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'
import Button from '../../components/Button'
import TextInputUser from '../../components/TextInputUser'
import ButtonUser from '../../components/ButtonUser'
import BottomSheet from 'react-native-bottomsheet'
export default class UpdateUser extends Component {
    constructor(props) {
        super(props)
        const data = props?.route?.params?.data
        this.state = {
            email: data.email,
            fullName: data.fullName,
            address: data.address,
            sex:data.sex,
            birthday: data.birthday
            
        }
    }
    _changeEmail = () => {

    }
    _selectGender = () => {
        BottomSheet.showBottomSheetWithOptions({
            options: [this.getString('None'), this.getString('Male'), this.getString('Female'), this.getString('Cancel')],
            cancelButtonIndex: 3,
        }, (value) => {
            if (value != 3) {
                const info = {
                    gender: value
                }
                this.saveUserInfo(info);
            }
        });
    }
    render() {
        const { navigation } = this.props
        const { email, fullName, address, sex, birthday } = this.state
       
        return (
            <View style={styles.container}>
                <Header noSearch onPress={() => navigation.pop()} title={'Thông tin cá nhân'} />
                <ScrollView alwaysBounceVertical = {false} showsVerticalScrollIndicator = {false} style={{ flex: 1, backgroundColor: 'white' }}>
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
                    <ButtonUser title="Giới tính" nameIcon="people" content={sex} onPress={this._selectGender} />
                    <ButtonUser title="Năm sinh" nameIcon="calendar" content={birthday} onPress={() => alert("123")} />
                    <Button title={'HOÀN TẤT'} onPress={this._changeEmail} />
                </ScrollView>
            </View>
        )
    }
}


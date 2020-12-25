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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { dateToString } from '../../util'
import { BASE_URL } from '../../network/config'
import helper from '../../helper'
export default class UpdateUser extends Component {
    constructor(props) {
        super(props)
        const data = props?.route?.params?.data
        this.state = {
            userId: data.IdUser,
            email: data.email,
            fullName: data.fullName,
            address: data.address,
            sex: data.sex,
            birthday: data.birthday,
            isDatePickerVisible: false

        }
    }

    showDatePicker = () => {
        this.setState({
            isDatePickerVisible: true
        })
    };
    hideDatePicker = () => {
        this.setState({
            isDatePickerVisible: false
        })
    };
    handleConfirm = async (date) => {
        const coverDate = await dateToString(date)
        this.setState({
            birthday: coverDate
        })
        this.hideDatePicker();
    };

    updateUser = () => {
        const { email, fullName, address, sex, birthday, userId } = this.state
        const {navigation} = this.props
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'UserId': userId,
            'fullName': fullName,
            'address': address,
            'email': email,
            'sex': sex,
            'birthday': birthday
        });
        var config = {
            method: 'post',
            url: BASE_URL + '/account/update',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
              if(response.data.kq == 1){
                  helper.alert("Thông báo", response.data.errMsg, () => navigation.goBack())
              } else {
                  console.log("error")
              }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    _selectGender = () => {
        BottomSheet.showBottomSheetWithOptions({
            options: ["Nam", "Nữ", "Hủy"],
            cancelButtonIndex: 3,
        }, (value) => {
            switch (value) {
                case 0: this.setState({
                    sex: 'Nam'
                })
                    break
                case 1: this.setState({
                    sex: 'Nữ'
                })
                    break
                default:
                    break;
            }
        });
    }
    render() {
        const { navigation } = this.props
        const { email, fullName, address, sex, birthday, isDatePickerVisible } = this.state

        return (
            <View style={styles.container}>
                <Header noSearch onPress={() => navigation.pop()} title={'Thông tin cá nhân'} />
                <ScrollView alwaysBounceVertical={false} showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
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
                    <ButtonUser title="Năm sinh" nameIcon="calendar" content={birthday} onPress={this.showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={this.handleConfirm}
                        onCancel={this.hideDatePicker}
                    />
                    <Button title={'HOÀN TẤT'} onPress={this.updateUser} />
                </ScrollView>
            </View>
        )
    }
}


import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import { iconAvatar } from '../../images'
import colors from '../../styles/colors'
import InforItem from '../../components/InforItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../components/Button'
export default class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Huy Nguyễn",
        }
    }
    render() {
        const { name } = this.state
        return (
            <View style={styles.container}>
                <Header noBack title={'Thông tin cá nhân'} />
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
                <Button title = {'ĐĂNG XUẤT'}/>
               


            </View>
        )
    }
}


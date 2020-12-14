import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import { iconAvatar } from '../../images'
import InforItem from '../../components/InforItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from "@react-native-community/async-storage";
import { BASE_URL } from '../../network/config'
import helper from '../../helper'
import Loader from '../../components/Loader'
import ImagePicker from 'react-native-image-picker';
import {dateToString} from '../../util'
import Button from '../../components/Button'

const options = {
    title: "Chọn hình ảnh",
    cancelButtonTitle: "Hủy",
    takePhotoButtonTitle: "Chụp hình",
    chooseFromLibraryButtonTitle: "Chọn từ thư viện",
    maxWidth: 500, maxHeight: 500,
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this._getToken()
        this.state = {
            name: "",
            user: null,
            filePath: ''
        }
    }

    componentDidMount = () => {
        this._unsubscribe = this.props.navigation.addListener('focus', this.componentDidFocus)

    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    componentDidFocus = () => {
        this._getToken()
    }

    _getToken = async () => {
        try {
            await AsyncStorage.getItem('Token')
                .then(resultToken => {
                    // VerifyToken
                    let axios = require('axios')
                    let qs = require('qs')
                    let data = qs.stringify({
                        'Token': resultToken
                    })
                    var config = {
                        method: 'post',
                        url: BASE_URL + '/verifyToken',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: data
                    }
                    axios(config)
                        .then((res) => {
                            if (res.data.kq == 1) {

                                this.setState({
                                    user: res.data.User
                                })
                            } else {
                                console.log(res.data.errMsg)
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


    _logout = async () => {
        const { navigation } = this.props
        try {
            await AsyncStorage.getItem('Token')
                .then(resultToken => {
                    // VerifyToken
                    let axios = require('axios')
                    let qs = require('qs')
                    let data = qs.stringify({
                        'Token': resultToken
                    })
                    var config = {
                        method: 'post',
                        url: BASE_URL + '/logout',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: data
                    }
                    axios(config)
                        .then(async (res) => {
                            if (res.data.kq == 1) {
                                await AsyncStorage.removeItem("Token")
                                helper.alert("Thông báo", res.data.errMsg, () => navigation.replace("Login"))
                            } else {
                                console.log(res.data.errMsg)
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
    _changeAvatar = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (!response.didCancel && !response.error) {
                this.setState({
                    filePath: response
                })

            }
        })
    }
    render() {
        const { name, user, filePath } = this.state
        console.log('====================================');
        console.log("user", user);
        console.log('====================================');
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header noBack title={'Thông tin cá nhân'} />
                {
                    user != null
                        ?
                        <ScrollView style={{ backgroundColor: '#ECEEEF' }} alwaysBounceVertical={false}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16 }}>
                                <TouchableOpacity onPress={this._changeAvatar}>
                                    <Image style={{ width: 65, height: 65, borderRadius: 32.5 }} resizeMode='contain' source={filePath == '' ? iconAvatar : { uri: filePath.uri }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>Số điện thoại</Text>
                                    <Text>{user?.phone}</Text>
                                </View>
                            </View>
                           <InforItem title = "Ngày tham gia" nameIcon = "calendar" content = {dateToString(user?.registerDate)}/>
                           <InforItem title = "Đổi mật khẩu" nameIcon = "lock-closed" onPress = {() => navigation.navigate("123")}/>
                           <InforItem title = "Cập nhật thông tin" nameIcon = "refresh-circle" onPress = {() => navigation.navigate("UpdateUser")}/>
                           <Button title={'ĐĂNG XUẤT'} onPress={this._logout} />
                        </ScrollView>
                        :
                        <NotLogin onPress={() => navigation.navigate("Login")} />
                }
            </View>
        )
    }
}


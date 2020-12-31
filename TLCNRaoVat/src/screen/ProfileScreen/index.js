import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image, ScrollView, RefreshControl } from 'react-native'
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
            filePath: '',
            refreshing: false
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
                            console.log('====================================');
                            console.log("res", res);
                            console.log('====================================');
                            if (res.data.kq == 1) { 
                                this.setState({
                                    user: res.data.User, 
                                    filePath:res.data.User.image
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
        const {user} = this.state
        ImagePicker.showImagePicker(options, (response) => {
            if (!response.didCancel && !response.error) {
                var data = new FormData();
                data.append('hinhdaidien', {
                    uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://", ""),
                    name: `post.png`,
                    type: response.type || 'image/jpeg'
                })

                var axios = require('axios');
                var config = {
                    method: 'post',
                    url: BASE_URL + '/uploadFile',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    data: data
                };
                
                axios(config)
                    .then((response) => {
                      
                        if (response.data.kq == 1) {
                            this.setState({
                                filePath: response.data.urlFile.filename,
                            })
                            var qs = require('qs')
                            var dataImage = qs.stringify({
                               'image': response.data.urlFile.filename,
                               'UserId':  user.IdUser
                               });
                            var configImage = {
                                method:'post',
                                url: BASE_URL + '/account/uploadImage',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                },
                                data: dataImage
                            }
                            axios(configImage)
                            .then((response) => {
                                if(response.data.kq == 1){
                                   
                                }
                            })
                           
                        }else {
                            console.log('====================================');
                            console.log("error");
                            console.log('====================================');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            }
        })
    }
    _onRefresh = () =>{
        this.setState({refreshing:true})
        this._getToken().then(() => {
            this.setState({
                refreshing:false
            })
        })
    }
    render() {
        const { name, user, filePath } = this.state
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header noSearch noBack title={'Thông tin cá nhân'} />
                {
                    user != null
                        ?
                        <ScrollView refreshControl = {
                            <RefreshControl
                                refreshing = {this.state.refreshing}
                                onRefresh = {this._onRefresh}
                            />
                        } style={{ backgroundColor: '#ECEEEF' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16 }}>
                                <TouchableOpacity onPress={this._changeAvatar}>
                                    <Image style={{ width: 65, height: 65, borderRadius: 32.5 }} resizeMode='contain' source={filePath == '' ? iconAvatar : { uri: BASE_URL + '/upload/' + filePath }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>Số điện thoại</Text>
                                    <Text>{user?.phone}</Text>
                                </View>
                            </View>
                           <InforItem title = "Ngày tham gia" nameIcon = "calendar" content = {dateToString(user?.registerDate)}/>
                           <InforItem title = "Đổi mật khẩu" nameIcon = "lock-closed" onPress = {() => navigation.navigate("ChangePassword")}/>
                           <InforItem title = "Cập nhật thông tin" nameIcon = "refresh-circle" onPress = {() => navigation.navigate("UpdateUser", {data: user})}/>
                           <Button title={'ĐĂNG XUẤT'} onPress={this._logout} />
                        </ScrollView>
                        :
                        <NotLogin onPress={() => navigation.navigate("Login")} />
                }
            </View>
        )
    }
}


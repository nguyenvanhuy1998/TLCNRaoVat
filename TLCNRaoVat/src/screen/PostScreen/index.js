import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, RefreshControl, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import { dataPost } from '../../Data'
import { numberToString, dateToString } from '../../util'
import { iconPostEmpty } from '../../images'
import Loader from '../../components/Loader'
import AsyncStorage from '@react-native-community/async-storage'
import { BASE_URL } from '../../network/config'

export default class PostScreen extends Component {
    constructor(props) {
        super(props)
        this._getToken()
        this._getCity()
        this.state = {
            refreshing: false,
            user: null,
            dataPostSingle: {},
            nameCity: {},
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
        this._getCity()
    }
    _getCity = () => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({

        });
        var config = {
            method: 'post',
            url: BASE_URL + '/city',
            headers: {},
            data: data
        };

        axios(config)
            .then((response) => {
                this.setState({
                    nameCity: response.data.list
                })
            })
            .catch(function (error) {
                console.log(error);
            });

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
                                let dataUser = res.data.User
                                this.setState({
                                    user: res.data.User
                                })
                                let dataPost = qs.stringify({

                                })
                                var configPost = {
                                    method: 'post',
                                    url: BASE_URL + '/post',
                                    headers: {},
                                    data: dataPost
                                }
                                axios(configPost)
                                    .then((resPost) => {
                                        if (resPost.data.kq == 1) {
                                            let dataPostList = resPost.data.PostList
                                            this.setState({
                                                dataPostSingle: dataPostList.filter(x => x.UserId == dataUser.IdUser)
                                            })
                                        } else {
                                            console.log("error");
                                        }
                                    })
                                    .catch((error) => {
                                        console.log(error)

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
    _renderItem = ({ item, index }) => {
        const { nameCity } = this.state
        const name = nameCity?.find(x => x._id == item.Thanhpho).Name
        const {navigation} = this.props
        return (
            <TouchableOpacity onPress = {() => navigation.navigate("BatdongsanDetail", {
                dataPost: item,
                city: nameCity
            })} style={styles.containerItem}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 200 }}>
                        <Text numberOfLines={0} style={styles.postTitle}>{item.TieuDe}</Text>
                        <Text style={styles.city}>{name}</Text>
                        <Text style={styles.date}>{dateToString(item.NgayDang)}</Text>
                    </View>
                    <View style={styles.viewImage}>
                        <Image source={{ uri: BASE_URL + '/upload/' + item.Image }} resizeMode="cover" style={{ width: 84, height: 56 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.price}>{numberToString(item.Gia)}</Text>
                        <Text style={{ ...styles.price, marginLeft: 4 }}>VND</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    onRefresh = () => {
        this._getToken()
    }
    render() {
        const { refreshing, user, dataPostSingle} = this.state
        
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <Header noBack noSearch title={'Bài đăng'} />
                {
                    user != null
                        ?
                        <View style={{ flex: 1}}>
                            <View style = {{flex:1}}>
                            {
                                !dataPostSingle.length
                                    ?
                                    <View style={styles.containerPostEmpty}>
                                        <Image source={iconPostEmpty} style={{ marginBottom: 15 }} />
                                        <Text style={styles.emptyText}>Bạn chưa có bài đăng nào</Text>
                                    </View>
                                    :
                                    <FlatList data={dataPostSingle.sort(function(a,b){
                                        return new Date(b.NgayDang) - new Date(a.NgayDang)
                                    })}
                                        style={{ flex: 1, marginHorizontal: 16, paddingTop: 16 }}
                                        renderItem={this._renderItem}
                                        keyExtractor={(item, index) => item._id.toString()}
                                        showsVerticalScrollIndicator={false}
                                        refreshControl={<RefreshControl onRefresh={this.onRefresh} refreshing={refreshing} />}
                                    />
                            }
                            </View>
                         
                            <TouchableOpacity style={styles.btnPost} onPress={() => navigation.navigate("PostStepFirst", { user: user.IdUser })}>
                                <Text style={styles.dangbai}>ĐĂNG BÀI</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <NotLogin onPress={() => navigation.navigate("Login")} />
                }

            </View>
        )
    }
}



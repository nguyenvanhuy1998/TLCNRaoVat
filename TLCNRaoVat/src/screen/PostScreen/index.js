import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, RefreshControl, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import { dataPost } from '../../Data'
import { numberToString } from '../../util'
import { iconPostEmpty } from '../../images'
import Loader from '../../components/Loader'
import AsyncStorage from '@react-native-community/async-storage'
import { BASE_URL } from '../../network/config'

export default class PostScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            user: null
        }
    }
    componentDidMount = async () => {
        try {
            Loader.show()
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
                            Loader.hide()
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
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.containerItem}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 200 }}>
                        <Text numberOfLines={0} style={styles.postTitle}>{item.postTitle}</Text>
                        <Text style={styles.city}>{item.city}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                    <View style={styles.viewImage}>
                        <Image source={item.image} resizeMode="cover" style={{ width: 84, height: 56 }} />
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.price}>{numberToString(item.price)}</Text>
                        <Text style={{ ...styles.price, marginLeft: 4 }}>VND</Text>
                    </View>

                </View>
            </View>
        )
    }
    onRefresh = () => {
        // this.setState({refreshing:true})

    }
    render() {
        const { refreshing, user } = this.state
        console.log('====================================');
        console.log("user", user);
        console.log('====================================');
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <Header noBack title={'Bài đăng'} />
                {
                    user != null
                        ?
                        <View style = {{flex:1,}}>
                            {
                                !dataPost.length
                                    ?
                                    <View style={styles.containerPostEmpty}>
                                        <Image source={iconPostEmpty} style={{ marginBottom: 15 }} />
                                        <Text style={styles.emptyText}>Bạn chưa có bài đăng nào</Text>
                                    </View>
                                    :
                                    <FlatList data={dataPost}
                                        style={{ flex: 1, marginHorizontal: 16, paddingTop: 16 }}
                                        renderItem={this._renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                        showsVerticalScrollIndicator={false}
                                        refreshControl={<RefreshControl onRefresh={this.onRefresh} refreshing={refreshing} />}
                                    />
                            }
                            <TouchableOpacity style={styles.btnPost} onPress={() => navigation.navigate("PostStepFirst")}>
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



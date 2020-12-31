import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { numberToString, dateToString } from '../../util'
import Icon from 'react-native-vector-icons/Ionicons'
import { iconAvatar } from '../../images'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Carousel from 'react-native-snap-carousel';
import metrics from '../../styles/metrics'
import { BASE_URL } from '../../network/config'
import helper from '../../helper'
import Communications from 'react-native-communications';
export default class BatdongsanDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0,
            user: {},
            imageUri: '',
            title: '',
            price: '',
            datePost: '',
            phone: '',
            address: '',
            description: '',
            showEdit: false
        }
    }

    componentDidMount() {
        const dataDetail = this.props.route?.params?.data
        const dataPost = this.props.route?.params?.dataPost
        if (dataDetail) {
            this.setState({
                imageUri: dataDetail?.Image,
                title: dataDetail?.TieuDe,
                price: dataDetail?.Gia,
                datePost: dataDetail?.NgayDang,
                phone: dataDetail?.Sodienthoai,
                address: dataDetail?.Diachi,
                description: dataDetail?.Mota
            })
        } else {
            this.setState({
                imageUri: dataPost?.Image,
                title: dataPost?.TieuDe,
                price: dataPost?.Gia,
                datePost: dataPost?.NgayDang,
                phone: dataPost?.Sodienthoai,
                address: dataPost?.Diachi,
                description: dataPost?.Mota,
                showEdit: true
            })
        }
    }
    _renderItem({ item, index }) {
        return (
            <View key={index} style={styles.slide}>
                <Image source={item} style={{
                    width: metrics.width,
                    height: metrics.width * 2 / 3
                }} resizeMode='stretch' />
            </View>
        );
    }
    deleteFinish = () => {
        const postId = this.props.route?.params?.dataPost?._id
        const { navigation } = this.props
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'postId': postId
        });
        var config = {
            method: 'post',
            url: BASE_URL + '/post/delete',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        helper.confirm("Thông báo", "Bạn có chắc chắn muốn xóa bài đăng này?", () => {
            axios(config)
                .then(function (response) {
                    if (response.data.kq == 1) {
                        navigation.navigate("Post")
                    } else {
                        console.log("Xóa thất bại")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        })

    }
    render() {
        const { navigation } = this.props
        const { imageUri, title, price, datePost, phone, address, description, showEdit } = this.state
        const data = this.props.route?.params

        // const listCarousel = [
        //     data.image_first,
        //     data.image_second,
        //     data.image_third,
        // ]
        return (
            <View style={styles.container}>
                <Header onPress={() => navigation.pop()} noSearch title="Thông tin chi tiết" />
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={styles.slide}>
                            <Image source={{ uri: BASE_URL + '/upload/' + imageUri }} style={{
                                width: metrics.width,
                                height: metrics.width * 2 / 3
                            }} resizeMode='stretch' />
                        </View>
                        {/* <Carousel
                            data={listCarousel}
                            renderItem={(carousel, parallaxProps) => this._renderItem(carousel, parallaxProps)}
                            inactiveSlideScale={1}
                            layout='tinder'
                            autoplay
                            loop
                            loopClonesPerSide={3}
                            autoplayInterval={5000}
                            inactiveSlideOpacity={1}
                            sliderWidth={metrics.width}
                            onSnapToItem={(index) => this.setState({ activeSlide: index })}
                            itemWidth={metrics.width}
                        /> */}
                    </View>

                    <View style={styles.viewTitle}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.viewPrice}>
                            <Text style={styles.price}>{numberToString(price)}</Text>
                            <Text style={{ ...styles.price, marginLeft: 4 }}>VND</Text>
                        </View>
                        <View style={styles.viewDateStar}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="alarm-outline" style={styles.iconDate} />
                                <Text style={styles.date}>{dateToString(datePost)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="star" style={styles.iconStar} />
                                <Text style={styles.date}>Thương lượng</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewInfo}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={iconAvatar} />
                            {/* {
                               data.data.Image != "" 
                                ? 
                                <Image style = {{}} source = {{uri: BASE_URL + '/upload/' + data.data.Image}}/>
                                :
                                <Image source={iconAvatar} /> 
                            } */}
                            <View style={{ flex: 1, marginLeft: 16, justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="call-outline" style={styles.iconDate} />
                                    <Text style={styles.date}>{phone}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                                    <Icon name="location-outline" style={styles.iconDate} />
                                    <Text style={styles.date}>{address}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewDetail}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Mô tả chi tiết</Text>
                        <Text style={{ fontSize: 14 }}>{description}</Text>
                    </View>
                </ScrollView>
                {
                    showEdit == true
                        ?
                        <View style={{ height: 48, flexDirection: 'row', borderTopColor: '#FFAA00', borderTopWidth: 1 }}>
                            <View style={{ flex: 1, backgroundColor: '#FFAA00', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("PostStepThird", {
                                        dataPost: data,
                                    })
                                }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="create" style={styles.iconPhone} />
                                    <Text style={{
                                        fontSize: 16, color: 'white', fontWeight: '600', marginLeft: 4
                                    }}>Chỉnh sửa</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={this.deleteFinish} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="trash" style={styles.iconMess} />
                                    <Text style={{
                                        fontSize: 16, color: '#FFAA00', fontWeight: '600',
                                        marginLeft: 4
                                    }}>Xóa</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        :
                        <View style={{ height: 48, flexDirection: 'row', borderTopColor: '#FFAA00', borderTopWidth: 1 }}>
                            <View style={{ flex: 1, backgroundColor: '#FFAA00', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => Communications.phonecall('+84363121782', true)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="call" style={styles.iconPhone} />
                                    <Text style={{
                                        fontSize: 16, color: 'white', fontWeight: '600', marginLeft: 4
                                    }}>Gọi điện</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => Communications.text('+84363121782')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="mail" style={styles.iconMess} />
                                    <Text style={{
                                        fontSize: 16, color: '#FFAA00', fontWeight: '600',
                                        marginLeft: 4
                                    }}>Gửi SMS</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                }
            </View>
        )
    }
}



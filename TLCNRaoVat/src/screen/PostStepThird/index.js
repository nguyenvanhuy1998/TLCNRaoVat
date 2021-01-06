import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { iconDownFilter } from '../../images'
import ViewTextInputPost from '../../components/ViewTextInputPost'
import ButtonStep from '../../components/ButtonStep'
import Icon from 'react-native-vector-icons/Ionicons'
import { BASE_URL } from '../../network/config'
import helper from '../../helper'
import colors from '../../styles/colors'

export default class PostStepThird extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            price: "",
            address: "",
            phone: "",
            city: "",
            showFinishEdit: false,
            next: true
            // title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    }
    selectCity = (data) => {
        this.setState({
            city: data
        })

    }
    componentDidMount() {
        const { dataPost } = this.props.route?.params
        if (dataPost) {
            const name = dataPost.city.find(x => x._id == dataPost.dataPost.Thanhpho)
            this.setState({
                title: dataPost?.dataPost?.TieuDe,
                description: dataPost?.dataPost?.Mota,
                price: dataPost?.dataPost?.Gia,
                address: dataPost?.dataPost?.Diachi,
                phone: dataPost?.dataPost?.Sodienthoai,
                city: name,
                showFinishEdit: true
            })
        }
    }
   
    editFinish = () => {
        const { dataPost } = this.props.route?.params
        const {title, description, price, address, phone, city } = this.state
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'PostId': dataPost.dataPost._id,
            'TieuDe':title ,
            'Mota': description,
            'Sodienthoai': phone,
            'Diachi': address,
            'Thanhpho': city._id,
            'Gia':price
        });
        var config = {
            method: 'post',
            url: BASE_URL + '/post/update',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then((response) =>  {
                helper.alert("Thông báo", "Cập nhật bài viết thành công", () => this.props.navigation.navigate("Bài đăng"))
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        const { navigation } = this.props
        const dataCategory = this.props.route?.params
        const { title, description, price, address, phone, city, showFinishEdit, next } = this.state
       
        return (
            <View style={styles.container}>
                <Header noSearch onPress={() => navigation.pop()} title={showFinishEdit == true ? "Cập nhật thông tin" : "Nhập thông tin bài đăng"} />
                <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false} alwaysBounceVertical={false}>

                    <ViewTextInputPost
                        marginTop={30}
                        title="Tiêu đề bài đăng:"
                        placeholder="Nhập tiêu đề"
                        value={title}
                        onChangeText={(text) => this.setState({ title: text })}
                    />
                    <ViewTextInputPost
                        marginTop={30}
                        title="Mô tả:"
                        placeholder="Nhập mô tả"
                        value={description}
                        onChangeText={(text) => this.setState({ description: text })}
                    />
                    <ViewTextInputPost
                        marginTop={30}
                        title="Giá:"
                        placeholder="Nhập giá tiền"
                        value={price}
                        onChangeText={(text) => this.setState({ price: text })}
                    />

                    <TouchableOpacity onPress={() => {
                        navigation.navigate("DataCityScreen", {
                            onSelect: this.selectCity
                        })
                    }} style={styles.filterContainer}>
                        <Text style={styles.city}>Tỉnh/Thành Phố</Text>
                        <View style={styles.selectCity}>
                            <Text style={styles.textCity}>{city.Name}</Text>
                            <Image source={iconDownFilter} />
                        </View>
                    </TouchableOpacity>
                    <ViewTextInputPost
                        marginTop={30}
                        title="Địa chỉ:"
                        placeholder="Nhập địa chỉ"
                        value={address}
                        onChangeText={(text) => this.setState({ address: text })}
                    />
                    <ViewTextInputPost
                        marginTop={30}
                        title="Số điện thoại:"
                        placeholder="Nhập số điện thoại"
                        value={phone}
                        onChangeText={(text) => this.setState({ phone: text })}
                    />


                    {/* <View style={styles.viewSelect}>
                        <View style={styles.viewActive}>
                            <View style={styles.viewInActive} />
                        </View>
                        <Text style={styles.single}>Cá nhân</Text>
                    </View>
                    <View style={{ ...styles.viewSelect, marginTop: 10 }}>
                        <View style={styles.viewUnActive} />
                        <Text style={styles.personal}>Chuyên nghiệp</Text>
                    </View>
                    <View style={{ ...styles.viewSelect, marginTop: 10, marginLeft: 28 }}>
                        <View style={styles.ViewNegotiated} />
                        <Text style={styles.negotiated}>Thương lượng giá</Text>
                    </View> */}
                </ScrollView>
                {
                    !showFinishEdit ? 
                    <TouchableOpacity disabled = {
                        (title != '' && description != '' && price != '' && address != '' && phone != '' && city != '') 
                        ? false : true
                    } onPress = {() => {
                        navigation.navigate("PostStepFour", {
                            dataCategory: dataCategory,
                            title: title,
                            description: description,
                            price: price,
                            address: address,
                            phone: phone,
                            city: city
                        })
                    }} style = {{
                        height:48,
                         alignItems:'center', justifyContent:'center',
                         backgroundColor:  (title != '' && description != '' && price != '' && address != '' && phone != '' && city != '')  ? colors.headerColor : 'grey'
                    }}>
                            <Text style = {{
                                  fontSize:24,
                                  color:'white', fontWeight:'bold'
                            }}>Tiếp theo</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={this.editFinish} style = {{
                        height:48,
                         alignItems:'center', justifyContent:'center',
                         backgroundColor: colors.headerColor
                    }}>
                            <Text style = {{
                                  fontSize:24,
                                  color:'white', fontWeight:'bold'
                            }}>Hoàn thành</Text>
                    </TouchableOpacity>
                }


            </View>
        )
    }
}


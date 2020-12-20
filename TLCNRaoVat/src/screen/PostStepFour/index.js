import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator, Platform } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { iconCamera } from '../../images'
import InsertImage from '../../components/InsertImage'
import ButtonStep from '../../components/ButtonStep'
import ImagePicker from 'react-native-image-picker';
import { IS_IOS } from '../../Constants'
import { BASE_URL } from '../../network/config'
import helper from '../../helper'
// import fs from 'fs'
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
    quality: 0.7

};
export default class PostStepFour extends Component {
    constructor(props) {
        super(props)
        console.log(props.route.params);
        this.state = {
            filePath: '',
            imageName:'',
            isLoading: false
        }
    }
    _selectImageGallery = () => {
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
                this.setState({ isLoading: true })
                axios(config)
                    .then((response) => {
                        if (response.data.kq == 1) {
                            this.setState({
                                isLoading: false,
                                filePath: BASE_URL + "/upload/" + response.data.urlFile.filename,
                                imageName: response.data.urlFile.filename
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

    _submitPost = async () => {
        const {navigation} = this.props
        const { title, description, price, address, phone, dataCategory, city } = this.props?.route?.params
        const { imageName } = this.state
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
         'TieuDe': title,
        'Gia': price,
        'Mota': description,
        'Sodienthoai': phone,
        'Diachi': address,
        'Image': imageName,
        'Nhomsanpham': dataCategory.idCategory,
        'Thanhpho': city._id 
        });
        var config = {
          method: 'post',
          url: BASE_URL + '/post/add',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
            if(response.data.kq == 1){
                helper.alert("Thông báo", response.data.errMsg, () => navigation.navigate("Home"))
            }else {

            }
        })
        .catch(function (error) {
          console.log(error);
        });
        


    }
    render() {
        const { navigation } = this.props
        const { filePath, isLoading } = this.state
        return (
            <View style={styles.container}>
                <Header onPress={() => navigation.pop()} title="Chọn ảnh" />
                <View style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}>
                    <Text style={styles.titleInsertImage}>Thêm hình để bán nhanh hơn</Text>
                    <TouchableOpacity onPress={this._selectImageGallery} style={{ ...styles.viewImage, borderWidth: filePath == '' ? 1 : 0 }}>
                        {
                            filePath == ''
                                ?
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={iconCamera} />
                                    <Text style={styles.insertImage}>Thêm hình</Text>
                                </View>
                                :
                                <Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={{ uri: filePath }} />
                        }
                        {
                            isLoading && <ActivityIndicator />
                        }
                    </TouchableOpacity>

                    <View style={{
                        backgroundColor: '#D7EEF7',
                        padding: 16,
                        marginHorizontal: 16,
                        marginTop: 22
                    }}>
                        <Text style={styles.textNote}>Để bán nhanh hơn:</Text>
                        <Text style={styles.textNote}>- Chọn hình khổ ngang để hiển thị hình đẹp hơn</Text>
                        <Text style={styles.textNote}>- Đầy đủ góc của sản phẩm</Text>
                        <Text style={styles.textNote}>- Chụp hình thật dù trên internet có đẹp hơn</Text>
                        <Text style={styles.textNote}>Không nên:</Text>
                        <Text style={styles.textNote}>- Sử dụng hình ảnh trùng lặp hoặc lấy từ internet</Text>
                        <Text style={styles.textNote}>- Chèn số điện thoại/email/logo vào hình</Text>
                    </View>

                </View>
                <ButtonStep onPress={this._submitPost} name="Đăng bài" />

            </View>
        )
    }
}


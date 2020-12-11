import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { iconCamera } from '../../images'
import InsertImage from '../../components/InsertImage'
import ButtonStep from '../../components/ButtonStep'
import ImagePicker from 'react-native-image-picker';
import { IS_IOS } from '../../Constants'
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
export default class PostStepFour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filePath: ''
        }
    }
    _selectImageGallery = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (!response.didCancel && !response.error) {
                this.setState({
                    filePath: response
                })

            }
        })
    }
    render() {
        const { navigation } = this.props
        const { filePath } = this.state

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
                                <Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={{ uri: filePath.uri }} />
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
                <ButtonStep onPress={() => alert("123")} name="Đăng bài" />

            </View>
        )
    }
}


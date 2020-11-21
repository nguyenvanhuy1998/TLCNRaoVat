import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { iconCamera } from '../../images'
import InsertImage from '../../components/InsertImage'
import ButtonStep from '../../components/ButtonStep'
export default class PostStepFour extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header onPress={() => navigation.pop()} title="Chọn ảnh" />
                <View style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}>
                    <Text style={styles.titleInsertImage}>Thêm hình để bán nhanh hơn</Text>
                    <View style={styles.viewImage}>
                        <InsertImage onPress={() => alert("123")} />
                        <InsertImage onPress={() => alert("123")} marginHorizontal={16} />
                        <InsertImage onPress={() => alert("123")} />
                    </View>
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


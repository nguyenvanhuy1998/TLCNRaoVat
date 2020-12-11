import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView, Image } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { iconDownFilter } from '../../images'
import ViewTextInputPost from '../../components/ViewTextInputPost'
import ButtonStep from '../../components/ButtonStep'
export default class PostStepThird extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            price: "",
            address: "",
            phone:"",
            // title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    }
    render() {
        const { navigation } = this.props
        const { title, description, price, address, phone } = this.state
        return (
            <View style={styles.container}>
                <Header onPress={() => navigation.pop()} title="Cập nhật thông tin" />
                <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator = {false} alwaysBounceVertical = {false}>
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
                   
                    <View style={styles.filterContainer}>
                        <Text style={styles.city}>Tỉnh/Thành Phố</Text>
                        <View style={styles.selectCity}>
                            <Text style={styles.textCity}>Hà Nội</Text>
                            <Image source={iconDownFilter} />
                        </View>
                    </View>
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
                    <View style={styles.viewSelect}>
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
                    </View>
                </ScrollView>
                <ButtonStep onPress={() => navigation.navigate("PostStepFour")} name="Tiếp theo" />
            </View>
        )
    }
}


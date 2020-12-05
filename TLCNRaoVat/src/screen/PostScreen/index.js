import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, RefreshControl, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import { dataPost } from '../../Data'
import { numberToString } from '../../util'
import Button from '../../components/Button'
import { iconPostEmpty } from '../../images'
import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

export default class PostScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false
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
        const { refreshing } = this.state
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Header noBack title={'Bài đăng'} />
                <NotLogin/>
                {/* {
                    !dataPost.length ? <View style={styles.containerPostEmpty}>
                        <Image source={iconPostEmpty} style={{ marginBottom: 15 }} />
                        <Text style={styles.emptyText}>Bạn chưa có bài đăng nào</Text>
                    </View> :
                        <FlatList data={dataPost}
                            style={{ flex: 1, marginHorizontal: 16, paddingTop: 16 }}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            refreshControl={<RefreshControl onRefresh={this.onRefresh} refreshing={refreshing} />}
                        />
                }
                <TouchableOpacity style={styles.btnPost} onPress = {()=> navigation.navigate("PostStepFirst")}>
                    <Text style={styles.dangbai}>ĐĂNG BÀI</Text>
                </TouchableOpacity> */}

            </View>
        )
    }
}



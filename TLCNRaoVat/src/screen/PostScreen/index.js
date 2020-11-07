import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, RefreshControl, Image,TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NotLogin from '../../components/NotLogin'
import { dataPost } from '../../Data'
import { iconBack } from '../../images'
import colors from '../../styles/colors'
import { numberToString } from '../../util'

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
                <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style = {{width:200}}>
                        <Text numberOfLines = {0} style = {styles.postTitle}>{item.postTitle}</Text>
                        <Text style = {styles.city}>{item.city}</Text>
                        <Text style = {styles.date}>{item.date}</Text>
                    </View>
                    <View style = {styles.viewImage}>
                            <Image source = {item.image} resizeMode = "cover" style = {{width:84, height:56}}/>
                    </View>
                    
                </View>
                <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text></Text>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {styles.price}>{numberToString(item.price)}</Text>
                        <Text style = {{...styles.price, marginLeft:4}}>VND</Text>
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
        return (
            <View style={styles.container}>
                <Header noBack title={'Bài đăng'} />
                {/* <NotLogin/> */}
                <FlatList data={dataPost}
                    style={{ flex: 1, marginHorizontal: 16, paddingTop:16 }}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl onRefresh={this.onRefresh} refreshing={refreshing} />}
                />
                <TouchableOpacity style = {styles.viewDangBai} onPress = {() => alert('123')}>
                <View style={[StyleSheet.absoluteFill,{ backgroundColor: colors.headerColor, opacity: 0.1}] } />
                    <Text style = {styles.btnPost}>ĐĂNG BÀI</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



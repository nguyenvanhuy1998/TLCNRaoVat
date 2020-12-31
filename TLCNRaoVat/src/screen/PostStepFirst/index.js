import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataHome } from '../../Data'
import IconRight from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'
import { BASE_URL } from '../../network/config'
export default class PostStepFirst extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataAPI:null,
            isLoading: false
        }
    }

    componentDidMount() {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({

        });
        var config = {
            method: 'post',
            url: BASE_URL + '/category',
            headers: {},
            data: data
        };
        this.setState({
            isLoading: true
        })
        axios(config)
            .then((response) => {
                this.setState({
                    isLoading:false,
                    dataAPI: response?.data.CateList
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    _renderItem = ({ item, index }) => {
        const {navigation} = this.props
        const {user} = this.props.route.params
        return (
            <TouchableOpacity onPress = {() => navigation.navigate("PostStepThird", {
                idCategory: item._id,
                nameCate: item.Name,
                user: user 
            }) } style={styles.containerItem}>
                <Text style={{ fontSize: 16 }}>{item.Name}</Text>
                <IconRight name="chevron-forward-outline" style={{ fontSize: 20 }} color={colors.colorRegular} />
            </TouchableOpacity>
        )
    }
    render() {
        const { navigation } = this.props
        const {dataAPI} = this.state
        return (
            <View style={styles.container}>
                <Header noSearch title="Chọn danh mục" onPress={() => navigation.pop()} />
                {this.state.isLoading && <ActivityIndicator/>}
                <FlatList data={dataAPI}
                    alwaysBounceVertical = {false}
                    showsVerticalScrollIndicator = {false}
                    style={{ flex: 1 }}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}


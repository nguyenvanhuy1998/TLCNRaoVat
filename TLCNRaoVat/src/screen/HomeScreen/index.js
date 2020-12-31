import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList, TouchableOpacity, RefreshControl, Dimensions, ImageBackground, Image, TextInput, ActivityIndicator } from 'react-native'
import styles from './styles'
import helper from '../../helper'
import metrics from '../../styles/metrics'
import IconSearch from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import { dataHome } from '../../Data'
import { BASE_URL } from '../../network/config'
const numColumns = 2

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataAPI: [],
            temp: [],
            textSearch: '',
            isLoading: false,
            refreshing: false
        }
    }
    componentDidMount() {
        this.getDataCategory()
    }
    getDataCategory = () => {
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
                    isLoading: false,
                    dataAPI: [...this.state.dataAPI, ...response.data.CateList],
                    temp: [...this.state.temp, ...response.data.CateList]
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // formatData = (dataList, numColumns) => {
    //     console.log('====================================');
    //     console.log("datalIST", dataList);
    //     console.log('====================================');
    //     const totalRows = Math.floor(dataList?.length / numColumns)
    //     let totalLastRow = dataList?.length - (totalRows * numColumns)
    //     while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    //         // dataList.push({ "name": "Null", empty: true })
    //         totalLastRow++
    //     }
    //     return dataList
    // }
    _renderItem = ({ item, index }) => {

        const { navigation } = this.props
        return (
            <TouchableOpacity style={styles.item} onPress={() => {
                navigation.navigate("Batdongsan", {
                    IdCategory: item._id,
                    NameCategory: item.Name
                })
            }}>
                <Image source={{
                    uri: BASE_URL + '/upload/' + item.Image
                }} resizeMode='contain' style={{ width: 84, height: 84 }} />
                <Text>{item.Name}</Text>
            </TouchableOpacity>
        )
    }
    updateSearch = searchTxt => {
        this.setState({ textSearch: searchTxt }, () => {
            if (searchTxt == '') {
                this.setState({
                    dataAPI: [...this.state.temp]
                })
                return;
            }
            this.state.dataAPI = this.state.temp.filter(function (item) {
                return item.Name.includes(searchTxt)
            }).map(function ({ _id, Name, Image }) {
                return { _id, Name, Image }
            })

        })
    }
    onRefresh = () => {
        this.getDataCategory
    }
    render() {
        const { dataAPI, refreshing } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.statusBarHeight} />
                <View style={styles.viewContainerSearch}>
                    <View style={styles.viewSearch}>
                        <IconSearch name="search" size={16} color={colors.grayColor} />
                        <TextInput
                            placeholder={"Tìm kiếm"}
                            style={{
                                flex: 1,
                                marginLeft: 6,
                            }}
                            value={this.state.textSearch}
                            onChangeText={this.updateSearch}

                        />
                    </View>
                    {this.state.isLoading == true ?
                        <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator />
                        </View> :
                        <View style = {{flex:1, backgroundColor:'#ffffff', paddingHorizontal:16}}>
                                <Text style={styles.title}>Khám phá danh mục</Text>
                                 <FlatList
                                style={styles.viewFlatList}
                                data={dataAPI}
                                renderItem={this._renderItem}
                                numColumns={numColumns}
                                showsVerticalScrollIndicator={false}
                                // refreshControl = {<RefreshControl onRefresh={this.onRefresh} refreshing={refreshing} />}
                                keyExtractor={(item, index) => index.toString()}
                                />
                        </View>
                    }
                </View>
            </View>
        )
    }
}



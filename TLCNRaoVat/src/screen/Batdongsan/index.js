import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity,RefreshControl, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { dataTitleBatdongsan, dataBatdongsan } from '../../Data'
import { iconDownFilter, iconBack, iconDownHelp } from '../../images'
import FilterCity from '../../components/FilterCity'
import colors from '../../styles/colors'
import { numberToString } from '../../util'
import { BASE_URL } from '../../network/config'
import metrics from '../../styles/metrics'
import IconSearch from 'react-native-vector-icons/Ionicons'
export default class Batdongsan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataAPI: [],
            nameCity: [],
            temp: [],
            searchText: '',
            city:'Tất cả',
            isLoading: false,
            refreshing: false

        }
    }

    
    componentDidMount() {
        let axios = require('axios')
        let qs = require('qs')
        let dataPost = qs.stringify({

        })
        var configPost = {
            method: 'post',
            url: BASE_URL + '/post',
            headers: {},
            data: dataPost
        }
        this.setState({
            isLoading:true
        })
        axios(configPost)
            .then(async (resPost) => {

                if (resPost.data.kq == 1) {
                    const { IdCategory } = this.props.route?.params
                    let dataPostList = await resPost.data.PostList.filter(x => x.Active == true)
                    
                    this.setState({
                        dataAPI: [...this.state.dataAPI, ...dataPostList.filter(x => x.Nhomsanpham == IdCategory)],
                        temp: [...this.state.temp, ...dataPostList.filter(x => x.Nhomsanpham == IdCategory)]
                    })
                    var dataCity = qs.stringify({

                    });
                    var config = {
                        method: 'post',
                        url: BASE_URL + '/city',
                        headers: {},
                        data: dataCity
                    };

                    axios(config)
                        .then((response) => {
                            this.setState({
                                isLoading:false,
                                nameCity: response.data.list
                            })
                        })
                        .catch(function (error) {
                            console.log(error);
                        });


                } else {
                    console.log("err")
                }

            })
            .catch((error) => {
                console.log(error)

            })

    }
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.viewItemFilter}>
                <Image style={{ flex: 1 }} source={item.image} />
                <Text style={styles.titleFilter}>{item.title}</Text>
            </View>
        )
    }
    _renderItemPrimary = ({ item, index }) => {
        const { navigation } = this.props
        const { nameCity } = this.state
        const thanhpho = nameCity.find(x => x._id == item.Thanhpho)

        return (
            <TouchableOpacity onPress={() => navigation.navigate("BatdongsanDetail", {
                data: item,
                cityName: thanhpho?.Name
            })} style={styles.containerItemPrimary}>
                <Image source={{ uri: BASE_URL + '/upload/' + item.Image }} resizeMode='stretch' style={styles.imageBatdongsan} />
                <Text numberOfLines={1} style={styles.titlePrimary}>{item.TieuDe}</Text>
                <Text style={styles.price}>{numberToString(item.Gia)}</Text>
                <Text style={styles.city}>{thanhpho?.Name}</Text>
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
                return item.TieuDe.includes(searchTxt)
            }).map(function ({ _id, TieuDe, Gia, Image, Thanhpho }) {
                return { _id, TieuDe, Gia, Image, Thanhpho }
            })

        })
    }
    selectCity = (data) => {
        const {dataAPI, temp}= this.state
       
        const dataFilter = temp.filter(x => x.Thanhpho == data._id)
        this.setState({
            city: data.Name,
            dataAPI: dataFilter
        })
       
     
        
    }
    
    render() {
        const { navigation } = this.props
        const { NameCategory } = this.props?.route?.params

        const { dataAPI, refreshing } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.containerSearch}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={iconBack} />
                        </TouchableOpacity>
                        <View style={styles.viewSearch}>
                            <IconSearch name="search" size={16} color={colors.grayColor} />
                            <TextInput
                                placeholder={NameCategory}
                                style={{
                                    flex: 1,
                                    marginLeft: 6,
                                }}
                                value={this.state.textSearch}
                                onChangeText={this.updateSearch}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.containerFilter} onPress={() => {
                    navigation.navigate("DataCityScreen", {
                        onSelect: this.selectCity
                    })
                }}>
                    <IconSearch name="location-outline" size={16} />
                    <Text style={styles.khuvuc}>Khu vực:</Text>
                    <Text style={styles.nameCity}>{this.state.city}</Text>
                    <Image source={iconDownHelp} />
                </TouchableOpacity>
                {this.state.isLoading && <ActivityIndicator/>}
                <FlatList
                    style={{ marginHorizontal: 16, paddingTop: 16 }}
                    data={dataAPI.sort(function(a,b){
                        return new Date(b.NgayDang) - new Date(a.NgayDang)
                    })}
                    numColumns={2}
                    renderItem={this._renderItemPrimary}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}


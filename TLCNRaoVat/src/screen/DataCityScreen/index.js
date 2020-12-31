import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import Header from '../../components/Header'
import { BASE_URL } from '../../network/config'

export default class DataCityScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCity: null,
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
            url: BASE_URL + '/city',
            headers: {},
            data: data
        };
        this.setState({
            isLoading: true
        })
        axios(config)
            .then((response) => {
               
                if (response.data.kq == 1) {
                    this.setState({
                        isLoading: false,
                        dataCity: response.data.list
                    })
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    
    _renderItem = ({ item, index }) => {
        const {navigation} = this.props
        return(
            <TouchableOpacity style = {{
                margin:16,
                
            }} onPress = { async () => {
               await this.props.route.params.onSelect(item)
                navigation.goBack()
            }}>
                    <Text>{item.Name}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { navigation } = this.props
        const {dataCity} = this.state
        return (
            <View style={styles.container}>
                <Header noSearch title="Chọn thành phố" onPress={() => navigation.pop()} />
                {this.state.isLoading && <ActivityIndicator/>}
                <FlatList
                    style={{flex:1, backgroundColor:'white'}}
                    data={dataCity}
                    renderItem={this._renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.viewHeight} />}
                    keyExtractor={(item, index) => item._id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white'
    },
    viewHeight:{
        height: 1, width: "100%", backgroundColor: '#E5E5E5'
    }
})

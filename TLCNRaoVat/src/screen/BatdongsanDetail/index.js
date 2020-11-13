import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import { numberToString } from '../../util'
import Icon from 'react-native-vector-icons/Ionicons'
import { iconAvatar } from '../../images'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Carousel from 'react-native-snap-carousel';
import metrics from '../../styles/metrics'
export default class BatdongsanDetail extends Component {
    constructor(props) {
        super(props)
        const data = props.route.params.data
        this.state = {
            data,
            activeSlide: 0,
        }
    }
    _renderItem({ item, index }) {
        return (
            <View key={index} style={styles.slide}>
                <Image source={item} style={{
                    width: metrics.width,
                    height: metrics.width * 2 / 3
                }} resizeMode='stretch' />
            </View>
        );
    }
    render() {
        const { navigation } = this.props
        const { data } = this.state
        const listCarousel = [
            data.image_first,
            data.image_second,
            data.image_third,
        ]
        return (
            <View style={styles.container}>
                <Header onPress={() => navigation.pop()} noSearch title="Thông tin chi tiết" />
                <ScrollView style={{ flex: 1 }}>
                    {/* <Image
                        source={data.image_first}
                        style={styles.image}
                        resizeMode='stretch'
                    /> */}
                    <View style={{ backgroundColor: 'white' }}>
                        <Carousel
                            data={listCarousel}
                            renderItem={(carousel, parallaxProps) => this._renderItem(carousel, parallaxProps)}
                            inactiveSlideScale={1}
                            layout='tinder'
                            autoplay
                            loop
                            loopClonesPerSide={3}
                            autoplayInterval={5000}
                            inactiveSlideOpacity={1}
                            sliderWidth={metrics.width}
                            onSnapToItem={(index) => this.setState({ activeSlide: index })}
                            itemWidth={metrics.width}
                        />
                    </View>

                    <View style={styles.viewTitle}>
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.viewPrice}>
                            <Text style={styles.price}>{numberToString(data.price)}</Text>
                            <Text style={{ ...styles.price, marginLeft: 4 }}>VND</Text>
                        </View>
                        <View style={styles.viewDateStar}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="alarm-outline" style={styles.iconDate} />
                                <Text style={styles.date}>12/11/2020</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name="star" style={styles.iconStar} />
                                <Text style={styles.date}>Thương lượng</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewInfo}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={iconAvatar} />
                            <View style={{ flex: 1, marginLeft: 16, justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="mail-outline" style={styles.iconDate} />
                                    <Text style={styles.date}>{data.email}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                                    <Icon name="location-outline" style={styles.iconDate} />
                                    <Text style={styles.date}>{data.address}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewDetail}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Mô tả chi tiết</Text>
                        <Text style={{ fontSize: 14 }}>{data.detail}</Text>
                    </View>
                </ScrollView>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.viewButtonCall}>
                        <Icon name="call-outline" style={styles.iconPhone} />
                        <Text style={styles.textCall}>Gọi điện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewButtonMess}>
                        <Icon name="chatbubble-ellipses-outline" style={styles.iconMess} />
                        <Text style={styles.textMess}>Gửi SMS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



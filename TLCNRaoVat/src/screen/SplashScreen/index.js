import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        const {navigation} = this.props
        return (
            <View style = {{
                flex:1,
                backgroundColor:'#ffffff'
            }}>
                <LottieView
                    source={require('../../../assets/splash.json')}
                    autoPlay
                    speed = {2}
                    loop = {false}
                    onAnimationFinish = {() => {
                        navigation.replace("Home")
                    }} 
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({})

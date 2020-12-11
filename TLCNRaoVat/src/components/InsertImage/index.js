import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { iconCamera } from '../../images'

export default class InsertImage extends Component {
    render() {
        const { onPress, marginHorizontal, haveImage, urlImage } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.viewPrimaryImage, marginHorizontal: marginHorizontal }}>
                {
                    haveImage ? <Image source={urlImage} />
                        :
                        <View>
                            <Image source={iconCamera} />
                            <Text style={styles.insertImage}>Thêm hình</Text>
                        </View>

                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    viewPrimaryImage: {
        borderRadius: 8,
        borderColor: '#F7B500',
        borderWidth: 1,
        width: 102,
        height: 102,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insertImage: {
        fontSize: 14,
        color: '#F7B500',
        marginTop: 14
    }
})

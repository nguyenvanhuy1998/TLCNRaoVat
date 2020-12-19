import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import TextInputUser from '../../components/TextInputUser'
import Button from '../../components/Button'
export default class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPass: '',
            newPass: ''
        }
    }
    _changPass = () => {
        
    }
    render() {
        const { navigation } = this.props
        const { currentPass, newPass } = this.state
        return (
            <View style={styles.container}>
                <Header noSearch onPress={() => navigation.pop()} title="Đổi mật khẩu" />
                <TextInputUser
                    security
                    title="Mật khẩu hiện tại"
                    nameIcon="key"
                    value={currentPass}
                    onChangeText={(text) => this.setState({ currentPass: text })}
                    placeholder="Nhập mật khẩu hiện tại" />
                <TextInputUser
                    security
                    title="Mật khẩu mới"
                    nameIcon="key"
                    value={newPass}
                    onChangeText={(text) => this.setState({ newPass: text })}
                    placeholder="Nhập mật khẩu mới" />
                <Button title={'HOÀN TẤT'} onPress={this._changPass} />   
            </View>
        )
    }
}


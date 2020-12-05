import { BlurView } from '@react-native-community/blur';
import React, { PureComponent } from 'react';
import { ActivityIndicator, StatusBar, TouchableOpacity, View } from 'react-native';
import Spiner from 'react-native-loading-spinner-overlay'

// import { IS_IOS } from '~/constants';
import styles from './styles';

class Loader extends PureComponent {

    static instance

    state = {
        loading: false
    }

    constructor(props) {
        super(props);
        Loader.instance = this;
    }

    static show() {
        if (Loader.instance) {
            Loader.instance.setState({
                loading: true
            })
            // StatusBar.setBarStyle('light-content', true)
            // IS_IOS && StatusBar.setNetworkActivityIndicatorVisible(true);
        }
    }

    static hide() {
        if (Loader.instance) {
            Loader.instance.setState({
                loading: false
            })
            // StatusBar.setBarStyle('dark-content', true);
            // IS_IOS && StatusBar.setNetworkActivityIndicatorVisible(false);
        }
    }

    render() {
        const { loading } = this.state
        return (
            !loading ? null :
                <Spiner visible={true} color='#000' />
        )
    }

}

export default Loader;
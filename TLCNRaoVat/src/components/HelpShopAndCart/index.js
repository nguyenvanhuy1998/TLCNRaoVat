import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { iconHelpContent, iconDownHelp } from '../../images'
import Accordion from 'react-native-collapsible/Accordion';
import colors from '../../styles/colors';
export default class HelpShopAndCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSections: []
        }
    }
    _renderHeader = section => {
        return (
            <View style={{
                flexDirection: 'row',
                padding: 16,
                borderBottomWidth: 1,
                borderColor: colors.colorRegular,
            }}>
                <Image source={iconHelpContent} style={{ marginRight: 8 }} />
                <Text style = {{flex:1}}>{section.Title}</Text>
            </View>
        );
    };
    _renderContent = section => {
        return (
            <View style={{
                padding: 16,
                flex: 1,
            }}>
                <Text>{section.Description}</Text>
            </View>
        );
    };
    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        const { data } = this.props
        return (
            <ScrollView style = {{flex:1,}} alwaysBounceVertical ={false} showsVerticalScrollIndicator = {false}>
                <Accordion
                    sections={data}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                    duration={300}
                />
            </ScrollView>


        )
    }
}


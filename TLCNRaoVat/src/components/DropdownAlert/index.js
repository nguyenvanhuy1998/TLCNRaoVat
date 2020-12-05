import React, { Component } from 'react';
import Dropdown from 'react-native-dropdownalert';


class DropdownAlert extends Component {

    static instance = null

    constructor(props) {
        super(props);
    }

    static showError = (message, title = 'Error.error') => {
        DropdownAlert.instance?.dropDownAlertRef.alertWithType('error', title, message)
    }

    static showSuccess = (message, title = 'Error.error') => {
        DropdownAlert.instance?.dropDownAlertRef.alertWithType('success', title, message)
    }

    static showInfo = (message, title = 'Error.error') => {
        DropdownAlert.instance?.dropDownAlertRef.alertWithType('info', title, message)
    }


    componentDidMount() { DropdownAlert.instance = this }

    componentWillUnmount() { DropdownAlert.instance = null }

    render() {
        return (
            <Dropdown
                ref={ref => this.dropDownAlertRef = ref}
                updateStatusBar={false}
                useNativeDriver
            />
        )
    }
}

export { DropdownAlert };

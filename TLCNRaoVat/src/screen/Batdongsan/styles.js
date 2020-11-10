import {
    StyleSheet,
} from 'react-native';
import metrics from '../../styles/metrics';

export default StyleSheet.create({

    container: {
        flex: 1
    },
    primaryFilter: {
        height: 90, backgroundColor: '#DADEE0'
    },
    viewItemFilter: {
        borderRadius: 10,
        borderWidth: 2,
        height: 70,
        width: metrics.width / 4 - 20,
        marginRight: 10,
        alignItems: 'center',
        paddingTop: 10,
        borderColor: '#CCCBCB'
    },
    titleFilter: {
        marginTop: 8,
        fontSize: 10, fontWeight: 'bold',
        color: '#5F6168'
    }


})
import {
    StyleSheet,
} from 'react-native';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
const WIDTH = (metrics.width - 32 - 16) / 2
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
        borderColor: '#CCCBCB',
        backgroundColor: '#EDEEEF'
    },
    titleFilter: {
        marginTop: 8,
        fontSize: 10, fontWeight: 'bold',
        color: '#5F6168'
    },
    containerItemPrimary: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
        marginRight: 16,
        width: WIDTH,
        height: WIDTH * 238 / 183,
        shadowColor: '#121212',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
    },
    imageBatdongsan: {
        width: WIDTH - 20, height: (WIDTH - 20) * 144 / 163
    },
    titlePrimary: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10
    },
    price: {
        fontSize: 16,
        color: colors.colorButton,
        marginTop: 5
    },
    city: {
        fontSize: 10,
        marginTop: 4
    }
})
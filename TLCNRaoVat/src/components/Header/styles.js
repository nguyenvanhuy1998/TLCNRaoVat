import {
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';


export default StyleSheet.create({

    wrapper: {
        backgroundColor: colors.headerColor,
        paddingTop: metrics.safePadding,

    },
    container: {
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    title: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 19,
        textAlign: 'center',
        position: 'absolute',
        textAlign: 'center',
        left: 50,
        right: 50
    },
    iconLeft:{
        width: 50,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconRight:{
        width: 50,
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
   



})
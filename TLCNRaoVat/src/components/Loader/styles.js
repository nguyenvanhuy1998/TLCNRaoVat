import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textContent:{
        color: 'white',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        marginTop: 20
    }
});
import {
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';


export default StyleSheet.create({
   
    container:{
      flex:1,
      backgroundColor:'#ffffff',
      justifyContent:'center',
      alignItems:'center'
    },
    viewIcon:{
        color: 'white',
        // borderColor: COLOR_ACCENT,
        textShadowColor: '#102551',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
        fontSize: 100,
    },
    titleError: {
        textAlign: 'center',
        color: colors.colorDisplay,
        fontWeight: '500',
        marginBottom: 15,
        fontSize: 22,
        letterSpacing: 2
    },
    text: {
        textAlign: 'center',
        color: colors.colorRegular,
        lineHeight: 20,
        fontSize: 13,
        marginBottom: 24
    },
    viewButtonDangNhap:{
        backgroundColor:'white',
        borderRadius:8,
        borderColor:colors.colorBorderOrange,
        borderWidth:2,
        width:metrics.width/2,
        height:37,
        justifyContent:'center',
        alignItems:'center'
    },
    btnLogin:{
        color:"#F7B500",
        fontSize:16,
    }
    
    
})
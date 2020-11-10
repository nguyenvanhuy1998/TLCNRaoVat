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
        marginBottom: 30
    },
    viewButtonDangNhap:{
        width:metrics.width/2,
        padding:12,
        borderRadius: 8,
        overflow:'hidden',
       
    },
    btnLogin:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold'
    }
    
    
})
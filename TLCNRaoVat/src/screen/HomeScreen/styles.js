import {
    StyleSheet,
    Dimensions
} from 'react-native';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';
const WIDTH = Dimensions.get('screen').width
const widthHome = (WIDTH - 32 - 16)/2
export default StyleSheet.create({
   
    container:{
      flex:1,
      backgroundColor:'#ffffff',
    },
    statusBarHeight:{
        backgroundColor:colors.headerColor,
        height:metrics.statusBarHeight
    },
    viewContainerSearch:{
        backgroundColor: colors.headerColor,
        flex:1
    },
    viewSearch:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        padding:10,
        marginHorizontal:16,
        marginVertical:24,
        borderRadius:4,
        alignItems:'center',
       
    },
    textSearch:{
        color:colors.grayColor,
        marginLeft:4,
        fontSize:14

    },
    item:{
        flex:1,
        marginBottom:8,
        marginRight:4,
        marginLeft:4,
        backgroundColor:'white',
        borderRadius:8,
        
        borderColor:'#979797',
        width:widthHome, 
        height: widthHome*142/192,
        alignItems:'center',
        shadowColor:'#121212',
        shadowOffset:{
            width:0,
            height:0,
        },
        shadowOpacity:0.15,
        shadowRadius:4
    },
    viewPrimary:{
       flex:1, backgroundColor:'#ffffff', paddingHorizontal:12,
    },
    title:{
        fontSize:24, fontWeight:'600', marginTop:16, marginLeft:4
    },
    viewFlatList:{
        flex:1, marginTop:16, paddingTop:4
    }
    
    
})
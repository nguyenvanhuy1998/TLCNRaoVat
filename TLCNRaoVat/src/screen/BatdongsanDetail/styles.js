
import {
    StyleSheet,
} from 'react-native';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';

export default StyleSheet.create({

    container: {
        flex: 1
    },
    image:{
        width:metrics.width,
        height:metrics.width*2/3
    },
    viewTitle:{
        padding:16,
        backgroundColor:'white'
    },
    title:{
        fontSize:22,
        fontWeight:'bold'
    },
    viewPrice:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:4
    },
    price:{
        fontSize:16,
        color:colors.colorButton,
        fontWeight:'600'
    },
    iconDate:{
        fontSize:16,
        color:colors.colorRegular
    },
    iconStar:{
        fontSize:16,
        color:'#FFC12C'
    },
    date:{
        fontSize: 14,
        color:colors.colorRegular,
        marginLeft:4
    },
    viewDateStar:{
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 
    },
    viewInfo:{
        marginTop:8,
        backgroundColor:'white',
        padding:16
    },
    viewDetail:{
        padding:16,
        backgroundColor:'white',
        marginTop:8
    },
    viewButton:{
        flexDirection: 'row',
        width: metrics.width,
        position: 'absolute',
        bottom: metrics.safePadding,
        paddingHorizontal: 16,
        justifyContent:'space-between'
    },
    viewButtonCall:{
        backgroundColor: '#FFAA00',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width:metrics.width/2 - 32,
        paddingVertical:8
    },
    viewButtonMess:{
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFAA00',
        justifyContent: 'center',
        alignItems: 'center',
        width:metrics.width/2 - 32,
        paddingVertical:8
    },
    iconPhone:{
        fontSize: 16, color: 'white', fontWeight: 'bold' 
    },
    textCall:{
        fontSize: 16, color: 'white', fontWeight: '600' 
    },
    iconMess:{
        fontSize: 16, color: '#FFAA00', fontWeight: 'bold' 
    },
    textMess:{
        fontSize: 16, color: '#FFAA00', fontWeight: '600'
    },
    slide: {
        borderRadius: 10,
        marginHorizontal:16,
        marginTop:16,
        overflow:'hidden',
        backgroundColor:'white',
    },
})
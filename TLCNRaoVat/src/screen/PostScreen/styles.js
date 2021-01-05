import {
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import { color } from 'react-native-reanimated';
import metrics from '../../styles/metrics';


export default StyleSheet.create({
   
    container:{
      flex:1,
      backgroundColor:'#ffffff',
    },
    containerItem:{
      flex:1,
      borderRadius:8,
      borderWidth:2,
      borderColor:'#ECEFF1',
      shadowColor:'#121212',
      shadowOffset:{
          width:0,
          height:0,
      },
      shadowOpacity:0.15,
      shadowRadius:4,
      marginBottom:8,
      padding:16
    },
    viewHeight:{
      height: 0.5, width: "100%", backgroundColor: '#E5E5E5'
    },
    viewImage:{
    borderRadius: 8,
    width: 84,
    height: 56,
    shadowOffset:{width:0, height:2},
    shadowOpacity: 0.1,
    shadowColor:'#455A64',
    elevation:1,
    borderWidth:1,
    borderColor:'#ECEFF1',
    justifyContent:'center',
    alignItems:'center'
    },
    price:{
        fontSize:16,
        color:colors.colorDisplay,
        fontWeight:'600',
        color:colors.colorButton
    },
    city:{
      fontSize:12,
      color:colors.colorDisplay
    },
    date:{
      fontSize:12,
      color:colors.colorDisplay
    },
    postTitle:{
      fontSize:16,
      color:colors.colorDisplay,
      fontWeight:'600',
      marginBottom:4,

    },
    viewDangBai:{
      justifyContent:'center',
      alignItems:'center',
      padding:16,
      borderRadius: 8,
      overflow:'hidden',
    },
    btnPost:{
        height:48,
        backgroundColor:'#FFAA00',
        justifyContent:'center', alignItems:'center',
        
    },
    viewHeight:{
      height: 0.5, width: "100%", backgroundColor: '#E5E5E5'

    },
    containerPostEmpty:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    emptyText:{
      fontSize:16,
    },
    dangbai:{
      fontSize:16,
      color:'white',
      fontWeight:'bold'
    }
    
})
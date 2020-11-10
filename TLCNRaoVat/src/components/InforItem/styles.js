import {
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
      },
      containerItem:{
          flex:1,
          paddingVertical:30,
          paddingHorizontal:16,
          flexDirection:'row',
          justifyContent:'space-between'
      },
      viewHeight:{
          height: 0.5, width: "100%", backgroundColor: '#E5E5E5'
    
      }
    
    
})
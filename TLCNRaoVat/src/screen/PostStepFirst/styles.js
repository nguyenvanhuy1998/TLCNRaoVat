import {
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
   
    container:{
      flex:1,
      backgroundColor:'#ffffff'
    },
    containerItem:{
      flex:1,
      backgroundColor:'white',
      padding:16,
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomWidth:0.5, 
      borderBottomColor:colors.colorRegular      
    }
   
  
    
})
import {
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
const WIDTH = metrics.width - 64
export default StyleSheet.create({
   
    container:{
      flex:1,
      backgroundColor:'#ffffff'
    },
    titleInsertImage:{
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 25
    },
    viewImage: {
      marginTop: 25,
      marginHorizontal:32,
      backgroundColor:'#ffffff',
      borderColor:'#F7B500',
      borderWidth:1,
      width:WIDTH,
      height: WIDTH*2/3,
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center'
      
  },
  textNote:{
      fontSize:15,
      color:'#35718E'
  },
  viewPrimaryImage: {
    borderRadius: 8,
    borderColor: '#F7B500',
    borderWidth: 1,
    width: 102,
    height: 102,
    justifyContent: 'center',
    alignItems: 'center'
},
insertImage: {
    fontSize: 24,
    color: '#F7B500',
    marginTop: 14,
    fontWeight:'bold'
}
   
    
   
  
    
})
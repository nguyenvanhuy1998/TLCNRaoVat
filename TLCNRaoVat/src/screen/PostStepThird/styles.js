import {
    StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
   
    container:{
      flex:1,
      backgroundColor:'#ffffff'
    },
    viewTitle:{
        borderWidth:1,
        borderColor:'#979797',
        marginTop:32,
        padding:10,
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#979797',
        marginTop: 10,
        padding: 10,
        textAlign:'justify',
        
    },
    filterContainer:{
        borderBottomWidth: 1,
        marginTop: 10,
        borderColor: '#979797'
    },
    city:{
        fontSize: 12,
        color: '#B9B9B9',
    },
    selectCity:{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' 
    },
    textCity:{
        fontSize: 16,
        paddingBottom: 10,
        marginTop: 8,
    },
    containerScroll:{
        flex: 1, backgroundColor: 'white', paddingHorizontal: 16 
    },
    viewSelect:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center'
    },
    viewActive:{
        width: 22, height: 22, borderRadius: 11, borderColor: '#32C5FF', borderWidth: 1, alignItems: 'center', justifyContent: 'center' 
    },
    viewInActive:{
        height: 16, width: 16, backgroundColor: '#32C5FF', borderRadius: 8 
    },
    single:{
        fontSize: 14,
        color: '#080707',
        marginLeft: 8
    },
    viewUnActive:{
        width: 22, height: 22, borderRadius: 11, borderColor: '#C1BDBD', borderWidth: 1, alignItems: 'center', justifyContent: 'center'
    },
    personal:{
        fontSize: 14,
        color: '#080707',
        marginLeft: 8
    },
    ViewNegotiated:{
        width: 22, height: 22, borderColor: '#C1BDBD', borderWidth: 1, alignItems: 'center', justifyContent: 'center' 
    },
    negotiated:{
        fontSize: 14,
        color: '#080707',
        marginLeft: 8
    }
  
    
})
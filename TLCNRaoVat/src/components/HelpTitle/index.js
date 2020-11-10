import React, { Component } from 'react'
import { Text, StyleSheet, View, Image ,TouchableOpacity} from 'react-native'
import colors from '../../styles/colors'

export default class HelpTitle extends Component {
    render() {
        const {image, title,content, onPress} = this.props
        return (
            <TouchableOpacity style = {styles.container} onPress = {onPress}>
                    <View style = {{width:64, height:64, borderRadius:32, borderColor:colors.colorButton, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
                            <Image source = {image}  style = {{width:30, height:30}}/>
                    </View>
                    <View style = {{marginLeft:8, justifyContent:'center', flex:1}}>
                         <Text style = {styles.title}>{title}</Text>
                         <Text numberOfLines = {3} style = {styles.content}>{content}</Text>
                    </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        borderRadius:8,
        borderWidth:1,
        borderColor:'gray',
        marginBottom:16,
    
    },
    title:{
        fontSize:16,
        color:colors.colorDisplay,
        fontWeight:'bold'
    },
    title:{
        fontSize:16,
        color:colors.colorDisplay,
        fontWeight:'600'
    },
    content:{
       
            fontSize:13,
            color:colors.colorRegular,
           
       
    }
})

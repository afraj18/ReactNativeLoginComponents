import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text, type="PRIMARY",bgColor,fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`], bgColor ? {backgroundColor: bgColor}:{}]}>
      <Text style={[styles.text,styles[`text_${type}`], fgColor ? {color: fgColor}: {} ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        
        width:'100%',
        // height : 50,

        padding : 15,
        marginVertical:5,
        
        alignItems : "center",

        borderRadius: 5,
    },
    container_PRIMARY : {
        backgroundColor: '#3B71F3',
    },
    container_TERITARY : {},
    text:{
        color: 'white',
        fontWeight: 'bold'
    },
    text_PRIMARY: {

    },
    text_TERITARY : {
        color: "grey",
    }
})
export default CustomButton
import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder} 
      secureTextEntry  = {secureTextEntry}
      style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        margin: 150,
        backgroundColor: "white",
        width :'100%',
        height : 50,
        justifyContent: "center",

        borderColor : '#e8e8e8',
        borderWidth : 1,
        borderRadius: 5,

        paddingHorizontal : 10,
        marginVertical: 5,
    },
    input : {

    },
})

export default CustomInput
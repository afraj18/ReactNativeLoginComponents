import { View, Text ,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import { useNavigation } from '@react-navigation/native'


import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomButton from '../../Components/CustomButton'
import SocialSignInButtons from '../../Components/SocialSignInButtons/SocialSignInButtons'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    const {userName,setUserName} = useState('');
    

    const onSendPress = () =>{
      // console.warn("onSendPress")
      
      navigation.navigate('NewPasswordScreen');

    }
   const onSignInPress = () => {
    //  console.warn('onSignInPress')

    navigation.navigate('SignIn')
   }
   const onResendPress = () => {
     console.warn('onResendPress')
   }
    
  return (
   <ScrollView>
      <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput 
        placeholder="User Name"
        value={userName}
        setValue={setUserName}
        secureTextEntry={false}
      />
       
      <CustomButton onPress={onSendPress} text="Send"/>
      
      <CustomButton onPress={onSignInPress}text="Back to Sign In" type="TERITARY"/>
    </View>
   </ScrollView>
  )
}
const styles = StyleSheet.create({
    logo:{
        width : '70%',
        maxHeight: 300,
        maxWidth : 300,

    },
    root: {
        alignItems: "center",
        padding :20,
    },
    title : {
      fontWeight: 'bold',
      fontSize: 24, 
      color: "#051C60",
      margin : 10,
    },
    text:{
      color: 'grey',
      marginVertical: 10,
    },
    link:{
      color: 'orange'
    }
})

export default ForgotPasswordScreen;
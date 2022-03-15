import { View, Text ,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../../assets/Images/Logo_1.png'
import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomButton from '../../Components/CustomButton'
import SocialSignInButtons from '../../Components/SocialSignInButtons/SocialSignInButtons'

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {userName,setUserName} = useState('');
    const {password,setPassword} = useState('');

    const onSignInPress = () =>{
      // console.warn("Sign In");
      //Validation Added later

      navigation.navigate('HomeScreen')
    }
    const onForgetPasswordPress = () => {
      // console.warn('onForgetPasswordPressed')

      navigation.navigate('ForgetPassword')
    }
    
    const onSignUpPress = () => {
      // console.warn('onSignUpPress')

      navigation.navigate('SignUp')
    }
    
  return (
   <ScrollView>
      <View style={styles.root}>
      <Image source={Logo} style={[styles.logo,{height : height*0.3}]} resizeMode="contain"/>
      <CustomInput 
        placeholder="UserName"
        value={userName}
        setValue={setUserName}
        secureTextEntry={false}
      />
       <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton onPress={onSignInPress} text="Sign In"/>
      <CustomButton onPress={onForgetPasswordPress} text="Forgot Password?" type="TERITARY"/>

      <SocialSignInButtons/>

      <CustomButton onPress={onSignUpPress} text="Don't have an account? Create one" type="TERITARY"/>
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
    }
})

export default SignInScreen
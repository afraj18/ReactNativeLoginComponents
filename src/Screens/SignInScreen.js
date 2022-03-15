import { View, Text ,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'

import Logo from '../../assets/Images/Logo_1.png'
import CustomInput from '../Components/CustomInput/CustomInput'
import CustomButton from '../Components/CustomButton'

const SignInScreen = () => {
    const {height} = useWindowDimensions();

    const {userName,setUserName} = useState('');
    const {password,setPassword} = useState('');

    const onSignInPress = () =>{
      console.warn("Sign In")
    }
    const onForgetPasswordPress = () => {
      console.warn('onForgetPasswordPressed')
    }
    const onSignInWithFacebook = () => {
      console.warn("onSignInWithFaceBook")
    }
    const onSignInWithGoogle = () => {
      console.warn("onSignInWithGoogle")
    }
    const onSignInWithApple = () => {
      console.warn("onSignInWithApple")
    }
    const onSignUpPress = () => {
      console.warn('onSignUpPress')
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

      <CustomButton onPress={onSignInWithFacebook} bgColor="#E7EAF4" fgColor="#4765A9" text="Sign In with Facebook"/>
      <CustomButton onPress={onSignInWithGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" text="Sign In with Google"/>
      <CustomButton onPress={onSignInWithApple} bgColor="#e3e3e3" fgColor="#363636" text="Sign In with Apple"/>

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
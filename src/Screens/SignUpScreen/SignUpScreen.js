import { View, Text ,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'


import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomButton from '../../Components/CustomButton'
import SocialSignInButtons from '../../Components/SocialSignInButtons/SocialSignInButtons'

const SignUpScreen = () => {


    const {userName,setUserName} = useState('');
    const {email,setEmail} = useState('');
    const {password,setPassword} = useState('');
    const {passwordRepeat,setPasswordRepeat} = useState('');

    const onRegisterPress = () =>{
      console.warn("Sign In")
    }
    const onSignInPress = () => {
      console.warn('onSignInPress')
    }
    const OnTermofUsePress = () =>{
      console.warn("OnTermofUsePress")
    }
    const OnPrivacyPolicyPress = ()=>{
      console.warn('OnPrivacyPolicyPress')
    }
    
  return (
   <ScrollView>
      <View style={styles.root}>
      <Text style={styles.title}>Create new account</Text>
      <CustomInput 
        placeholder="UserName"
        value={userName}
        setValue={setUserName}
        secureTextEntry={false}
      />
       <CustomInput 
        placeholder="Email Address"
        value={email}
        setValue={setEmail}
        secureTextEntry={false}
      />
       <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
       <CustomInput 
        placeholder="Confirm Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />
      <CustomButton onPress={onRegisterPress} text="Register"/>
      <Text style={styles.text}>By registering, you confirm that you accepts our 
            <Text style={styles.link} onPress={OnTermofUsePress}>Terms of use</Text> and
            <Text style={styles.link} onPress={OnPrivacyPolicyPress}> Privacy Policies</Text>
      </Text>

     <SocialSignInButtons/>

      <CustomButton onPress={onSignInPress} text="Have an account? Sign In" type="TERITARY"/>
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

export default SignUpScreen;
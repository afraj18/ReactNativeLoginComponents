import { View, Text ,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import { useNavigation } from '@react-navigation/native'


import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomButton from '../../Components/CustomButton'
import SocialSignInButtons from '../../Components/SocialSignInButtons/SocialSignInButtons'

const NewPasswordScreen = () => {
    const navigation = useNavigation();

    const {code,setCode} = useState('');
    const {newPassword,setNewPassword} = useState('');
    

    const onSubmitPress = () =>{
      // console.warn("onSubmitPress")
      navigation.navigate('HomeScreen')
    }
   const onSignInPress = () => {
    //  console.warn('onSignInPress')
     navigation.navigate('SignIn');
   }
   
    
  return (
   <ScrollView>
      <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput 
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
        secureTextEntry={false}
      />
      <CustomInput 
        placeholder="New Password"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry={true}
      />
       
      <CustomButton onPress={onSubmitPress} text="Submit"/>
      
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

export default NewPasswordScreen;
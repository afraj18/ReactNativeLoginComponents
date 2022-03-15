import { View, Text } from 'react-native'
import React from 'react'

import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInWithFacebook = () => {
        console.warn("onSignInWithFaceBook")
      }
      const onSignInWithGoogle = () => {
        console.warn("onSignInWithGoogle")
      }
      const onSignInWithApple = () => {
        console.warn("onSignInWithApple")
      }
  return (
    <>
        <CustomButton onPress={onSignInWithFacebook} bgColor="#E7EAF4" fgColor="#4765A9" text="Sign In with Facebook"/>
        <CustomButton onPress={onSignInWithGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" text="Sign In with Google"/>
        <CustomButton onPress={onSignInWithApple} bgColor="#e3e3e3" fgColor="#363636" text="Sign In with Apple"/>
    </>
  )
}

export default SocialSignInButtons
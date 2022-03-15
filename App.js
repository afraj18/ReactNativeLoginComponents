import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen/> */}
      <SignUpScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root : {
    flex :1,
    backgroundColor: '#F9FBFC'
    
  },
  
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView } from 'react-native';


import Navigation from './src/Navigation/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
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

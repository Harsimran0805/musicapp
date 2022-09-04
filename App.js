import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignInscreen from './src/screens/SignInscreen';
import SignUpscreen from './src/screens/SignUpscreen/SignUpscreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen copy/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import index from './src/components/Post'
import 'react-native-gesture-handler';
 import Navigation from './src/Navigation';

const App= () => {
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style= {{flex: 1, backgroundColor: "black"}}>
    <Navigation/>
   </SafeAreaView>
    </>
  
    



   
      
      
  );
    
}; 



export default App

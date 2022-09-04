import React, {useState} from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/Custominputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const ConfirmEmailScreen = () => {
    
    const [Code, SetCode] = useState('');

     const onConfirmPressed = () => {
        console.warn("onConfirmPressed");
    };

    const onSignInPressed = () => {
        console.warn('onSignInPressesd');
    };
    
    const onResendPressed = () => {
        console.warn('onResendPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
    <Text style={styles.title}>Confirm your email</Text>
    
    <CustomInput 
    placeholder="Enter your Confirmation code" 
     value={Code}
      setValue={SetCode}
       />
       

<CustomButton text="Confirm" onPress={onConfirmPressed}
bgColor="#E7EAF4"
fgColor="#4765A9" />

<CustomButton 
text="Resend Code" 
onPress={onResendPressed} 
bgColor="#E7EAF4"
fgColor="#4765A9"
type="SECONDARY"
/>

<CustomButton 
text="Back to Sign In" 
onPress={onSignInPressed} 
bgColor="#E7EAF4"
fgColor="#4765A9"
type="TERTIARY"
/>

</View>
</ScrollView>
        
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    
text: {
    color:'gray',
    marginVertical: 10,
},
link: {
    color:'#FDB075',
},
    });

export default ConfirmEmailScreen;
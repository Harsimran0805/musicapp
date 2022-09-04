import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/Custominputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";


const SignInscreen = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {height}= useWindowDimensions();

    const onSigninPressed = () => {
        console.warn("Sign in");
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };

    const onSignUpPressed = () => {
        console.warn('onSignUpPressesd')
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
    <Image source={Logo} style={[StyleSheet.Logo, {height: height * 0.3}]} resizeMode="contain"/>
    
    
    <CustomInput 
    placeholder="Username" 
     value={Username}
      setValue={setUsername}
       />
    <CustomInput
     placeholder="Password"
      value={Password} 
      setValue={setPassword} secureTextEntry
       />
<CustomButton text="Sign in" onPress={onSigninPressed}
bgColor="#E7EAF4"
fgColor="#4765A9" />

<CustomButton 
text="Forgot password?" 
onPress={onForgotPasswordPressed} 
bgColor="#E7EAF4"
fgColor="#4765A9"
type="TERTIARY"
/>
< SocialSignInButtons />

<CustomButton 
text="Don't have an account? Create one" 
onPress={onSignUpPressed} 
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
    Logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInscreen;
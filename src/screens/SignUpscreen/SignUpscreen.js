import React, {useState} from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/Custominputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignUpscreen = () => {
    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordRepeat, SetPasswordRepeat] = useState('');

     const onRegisterPressed = () => {
        console.warn("onRegisterPressed");
    };

    const onSignInPressed = () => {
        console.warn('onSignInPressesd');
    };
    
    const onTermsOfUsePressed = () => {
        console.warn('onTermOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
    <Text style={styles.title}>Create an account</Text>
    
    <CustomInput 
    placeholder="Username" 
     value={Username}
      setValue={setUsername}
       />
       <CustomInput 
    placeholder="Email" 
     value={email}
      setValue={setEmail}
       />
     <CustomInput
     placeholder="Password"
      value={Password} 
      setValue={setPassword} secureTextEntry
       />
       <CustomInput
     placeholder="Repeat Password"
      value={PasswordRepeat} 
      setValue={SetPasswordRepeat} 
      secureTextEntry
       />

<CustomButton text="Register" onPress={onRegisterPressed}
bgColor="#E7EAF4"
fgColor="#4765A9" />

<Text style={styles.text}> By registering, you confirm that you accept our {' '}
<Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and{' '}
<Text style={styles.link} onPress={onPrivacyPressed}> Pr ivacy Policy </Text>
</Text>
<SocialSignInButtons />

<CustomButton 
text="Have an account? Sign In" 
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

export default SignUpscreen;
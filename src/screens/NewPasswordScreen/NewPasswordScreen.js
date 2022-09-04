import React, {useState} from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from "react-native"
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/Custominputs/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const NewPasswordScreen = () => {
    
    const [Code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

     const onSubmitPressed = () => {
        console.warn("onSubmitPressed");
    };

    const onSignInPressed = () => {
        console.warn('onSignInPressesd');
    };
    


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
    <Text style={styles.title}>Reset your Password</Text>
    

    <CustomInput 
    placeholder="Code" 
     value={Code}
      setValue={setCode}
       />

<CustomInput 
    placeholder="Enter your new password" 
     value={newPassword}
      setValue={setNewPassword}
       />
       
       

<CustomButton text="Submit" onPress={onSubmitPressed}
bgColor="#E7EAF4"
fgColor="#4765A9" />


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

export default NewPasswordScreen;
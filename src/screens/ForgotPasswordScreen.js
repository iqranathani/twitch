import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ErrorMessage from '../components/ErrorMessage';

const ForgotPasswordScreen = ({navigation}) => {
    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }
    const registerUser = () => {
        if (isEmailValid(email)) {
            setErrorMessage('Email not valid')
        }
        else {
        navigation.navigate('Login')
        // console.log(userName,email,companyName,password,confirmPassword);
        }

    }
    const [email, setEmail] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    return (
        <View>
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <View style = {styles.backgroundStyle} >
            <MaterialCommunityIcons name="email-outline" style={styles.iconStyle} />
            <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Enter Your Email"
               value={email}
               onChangeText={(newEmail) => setEmail(newEmail)}
            />
            </View>
            <View><ErrorMessage error={errorMessage}/></View>
            <TouchableOpacity style={styles.TouchableOpacityStyle}
            onPress={()=>
                registerUser()
            }
            >
                <Text style={styles.submitStyle}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width:"100%"
    },
    backgroundStyle: {
        marginTop: 60 ,
        backgroundColor: 'white' ,
        height: 40 ,
        borderRadius: 30,
        marginHorizontal: 60 ,
        flexDirection: "row",
        borderWidth: 1 ,
        borderColor: '#DCDCDC',
        color: 'black'
    },
    inputStyle: {
        flex: 1,
        fontSize: 14
    },
    iconStyle: {
        fontSize: 20,
        alignSelf:'center',
        marginHorizontal: 20,
        color:'#274962'
        
    },
    submitStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14
    },
    TouchableOpacityStyle: {
        marginTop: 20 ,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 35 ,
        borderRadius: 30,
        marginHorizontal: 90 ,
        color: 'black',
        justifyContent: "center"
    }
});

export default ForgotPasswordScreen;

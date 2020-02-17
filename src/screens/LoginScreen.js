import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView  } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import ErrorMessage from '../components/ErrorMessage';
import api from '../api/api'

const LoginScreen = ({navigation}) => {
    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }
    const loginUser = () => {
        if ( !email || !password ) {
            setErrorMessage('Please Provide all the requirements')
        }
        else if (password.length < 5) {
            setErrorMessage('Password should be more than 5 characters')
        }
        else if (isEmailValid(email)){
            setErrorMessage('Email not valid')
        }
        else {
        // navigation.navigate('Index')
        loginApi(email, password)
        }

    }
    const loginApi = async (email, password) => {
     
        setErrorMessage('')
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            });
            console.log("Response is", response.data)
            // console.log("Response is", apiResponse)
            setApiResponse(response.data);
            setErrorMessage('')
            // navigation.navigate('Category')
        }
        catch (error) {
            console.log(error.response.data.error)
            setErrorMessage(error.response.data.error);

        }
    }
    const [email, setEmail] = useState('iqra@test.com');
    const [password, setPassword] = useState('123456');
    const [errorMessage,setErrorMessage] = useState('');
    const [apiResponse,setApiResponse] = useState('');
    
    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView>


        <View>
            <Image style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
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
            <View style = {styles.backgroundStyle} >
            <Ionicons name="md-unlock" style={styles.iconStyle} />
            <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Enter Your Password"
               secureTextEntry={true}
               value={password}
               onChangeText={(newPassword) => setPassword(newPassword)}
            />
            </View>
            <TouchableOpacity 
               style={styles.forgotPasswordStyle}
               onPress = {() => navigation.navigate('Forgot')}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <View><ErrorMessage error={errorMessage}/></View>
            <TouchableOpacity
                onPress = {() => loginUser()} 
                style = {styles.TouchableOpacityStyle}
            >
                <Text style = {styles.loginStyle}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.TouchableOpacityStyle1} >
                <Entypo name="facebook-with-circle" style={styles.fbIconStyle} />
                <Text style = {styles.fbStyle}>Login Via Facebook</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 1 }}>
            <Text>New To App? </Text>
            <TouchableOpacity onPress = {() => navigation.navigate('Index')}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
            </View> 
        </View>

        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width:"100%"
    },
    backgroundStyle: {
        marginTop: 10 ,
        backgroundColor: 'white' ,
        height: 40 ,
        borderRadius: 30,
        marginHorizontal: 50 ,
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
    forgotPasswordStyle: {
        marginLeft: 200
        
    },
    TouchableOpacityStyle: {
        marginTop: 10 ,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 35 ,
        borderRadius: 30,
        marginHorizontal: 90 ,
        color: 'black',
        justifyContent: "center"
    },
    TouchableOpacityStyle1: {
        marginTop: 10 ,
        backgroundColor: '#0c70d0',
        flexDirection: "row",
        height: 35 ,
        borderRadius: 30,
        marginHorizontal: 90 ,
        color: 'black'
    },
    loginStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14
    },
    fbStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14

    },
    fbIconStyle: {
        fontSize: 25,
        alignSelf:'center',
        marginHorizontal: 15,
        color:'white',

    }
});

export default LoginScreen;
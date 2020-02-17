import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import ErrorMessage from '../components/ErrorMessage';
import api from '../api/api'


const IndexScreen = ({navigation}) => {
    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }
    const registerUser = () => {
        if (!userName || !email || !companyName || !password || !confirmPassword ) {
            setErrorMessage('Please Provide all the requirements')
        }
        else if (password !== confirmPassword) {
            setErrorMessage('Password doesnt match');
        }
        else if (password.length < 5) {
            setErrorMessage('Password should be more than 5 characters')
        }
        else if (isEmailValid(email)){
            setErrorMessage('Email not valid')
        }
        else {
         registerApi(userName,email,companyName,password)
        // console.log(userName,email,companyName,password,confirmPassword);
        }

    }




   const registerApi = async (userName,email,companyName,password,confirmPassword) => {
        setErrorMessage('')
        console.log(`${email} ${userName} ${password} ${companyName} `)
        
        try {
            const response = await api.post('/signup', {
                
                email: email,
                password: password, 
                userName:userName,                
                firstName: `test`,
                lastName: `test`,
                company:companyName,
                
                
            });
            console.log("Response is", response.data)
            // console.log("Response is", apiResponse)
            setApiResponse(response.data);
            // navigation.navigate('Login')
            setErrorMessage('')
        }
        catch (error) {
            console.log(error.response.data.error)
            setErrorMessage(error.response.data.error);
        }
    }
    const [userName, setUserName] = useState('iqranathani');
    const [email, setEmail] = useState('iqra@test.com');
    const [companyName, setCompanyName] = useState('Zenveus');
    const [password, setPassword] = useState('123456');
    const [confirmPassword, setConfirmPassword] = useState('123456');
    const [errorMessage,setErrorMessage] = useState('');
    const [apiResponse,setApiResponse] = useState('');

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView>
            
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
        
        <View>
            <View style = {styles.backgroundStyle} >
            <FontAwesome name="user-o" style={styles.iconStyle} />
            <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Enter User Name"
               value={userName}
               onChangeText={(newUserName) => setUserName(newUserName)}
            />
            </View>
            <View style = {styles.backgroundStyle} >
            <MaterialIcons name="email" style={styles.iconStyle} />
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
            <FontAwesome name="building" style={styles.iconStyle} />
            <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Enter Company name"
               value={companyName}
               onChangeText={(newCompanyName) => setCompanyName(newCompanyName)}
            />
            </View>
            <View style = {styles.backgroundStyle} >
            <Ionicons name="md-lock" style={styles.iconStyle} />
            <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Enter Your Password"
               value={password}
               secureTextEntry={true}
               onChangeText={(newPassword) => setPassword(newPassword)}
            />
            </View>
            <View style = {styles.backgroundStyle} >
            <Ionicons name="md-lock" style={styles.iconStyle} />
            <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Re-Enter Your Password"
               value={confirmPassword}
               secureTextEntry={true}
               onChangeText={(newConfirmPassword) => setConfirmPassword(newConfirmPassword)}
            />
            
            </View>
            <View><ErrorMessage error={errorMessage}/></View>
            <TouchableOpacity 
               style = {styles.TouchableOpacityStyle} 
               onPress = {() => registerUser()}
            >
                <Text style = {styles.signUpStyle}>SIGN UP</Text>
            </TouchableOpacity>
           
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
        height: 45 ,
        borderRadius: 30,
        marginHorizontal: 50 ,
        flexDirection: "row",
        borderWidth: 1 ,
        borderColor: '#DCDCDC',
        color: 'black'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 25,
        alignSelf:'center',
        marginHorizontal: 20,
        color:'#274962'
        
    },
    TouchableOpacityStyle: {
        marginTop: 10 ,
        backgroundColor: '#274962',
        height: 40 ,
        borderRadius: 30,
        // width: 250 ,
        marginHorizontal: 70 ,
        color: 'black',
        justifyContent: "center"
    },
    signUpStyle: {
       alignSelf: "center",
       color: 'white',
       fontSize: 14
    }
});

export default IndexScreen;
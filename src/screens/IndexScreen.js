import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const registerUser = () => {
        if (!userName || !email || !companyName || !password || !confirmPassword ) {
            alert('Please Provide all the requirements')
        }
        else if (password !== confirmPassword) {
            alert('Password doesnt match');
        }
        else if (password.length < 5) {
            alert('Password should be more than 5 characters')
        }
        else {
        navigation.navigate('Login')
        // console.log(userName,email,companyName,password,confirmPassword);
        }

    }
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
   
        <ScrollView>
             <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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
            <TouchableOpacity 
               style = {styles.TouchableOpacityStyle} 
               onPress = {() => registerUser()}
            >
                <Text style = {styles.signUpStyle}>SIGN UP</Text>
            </TouchableOpacity>
           
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
     
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 220,
        width:"100%"
    },
    backgroundStyle: {
        marginTop: 10 ,
        backgroundColor: 'white' ,
        height: 50 ,
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
        marginTop: 30 ,
        backgroundColor: '#274962',
        height: 45 ,
        borderRadius: 30,
        width: 250 ,
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
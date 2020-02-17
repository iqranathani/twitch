import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LandingScreen = ({navigation}) => {
    return (
        <View>
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                    style={styles.TouchableOpacityStyle}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.loginStyle} >LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.TouchableOpacityStyle1}
                    onPress={() => navigation.navigate('Index')}
                >
                    <Text  style = {styles.registerStyle}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ alignSelf: "center", fontSize: 16, marginTop: 5 }}>NEED ASSISTANCE?</Text>
                <TouchableOpacity 
                    style={styles.TouchableOpacityStyle2}
                    onPress = {() => navigation.navigate('Category')}>
                    <Text style={styles.textStyle}>Auditing & Accounting</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.TouchableOpacityStyle2}>
                    <Text style={styles.textStyle}>Tax</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.TouchableOpacityStyle2}>
                    <Text style={styles.textStyle}>Legal Services</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.TouchableOpacityStyle2}>
                    <Text style={styles.textStyle}>Private</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.TouchableOpacityStyle2}>
                    <Text style={styles.textStyle}>Advisory</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.TouchableOpacityStyle2}>
                    <Text style={styles.textStyle}>Fiduciary & Estate Planning</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width:"100%"
    },
    TouchableOpacityStyle: {
        marginTop: 15 ,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 35 ,
        borderRadius: 15,
        marginLeft: 50 ,
        marginRight: 20,
        color: 'white',
        justifyContent: "center",
        width: 130
    },
    loginStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14
    },
    TouchableOpacityStyle1: {
        marginTop: 15 ,
        backgroundColor: 'white',
        flexDirection: "row",
        height: 35 ,
        borderRadius: 15,
        marginRight: 50 ,
        marginLeft: 20 ,
        color: '#274962',
        justifyContent: "center",
        borderWidth: 1 ,
        borderColor: 'grey',
        width: 130
    },
    registerStyle: {
        alignSelf: "center",
        color: '#274962',
        fontSize: 14
    },
    TouchableOpacityStyle2: {
        marginTop: 5 ,
        backgroundColor: '#274962',
        height: 50 ,
        borderRadius: 10,
        width: 220 ,
        // marginHorizontal: 70 ,
        color: 'black',
        alignSelf: 'center',
        justifyContent: "center"
    },
    textStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 16
    }
});

export default LandingScreen;
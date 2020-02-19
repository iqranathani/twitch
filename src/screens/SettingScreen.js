import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const SettingScreen = ({navigation}) => {
    return (
        <View>
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={styles.viewStyle}>
                    <MaterialCommunityIcons name="information-outline" style={styles.iconStyle}/>
                    <Text style={styles.textStyle}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewStyle}>
                    <MaterialIcons name="share" style={styles.iconStyle} />
                    <Text style={styles.textStyle}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewStyle}>
                    <Feather name="phone" style={styles.iconStyle} />
                    <Text style={styles.textStyle}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.logOutStyle}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Feather name="log-out" style={styles.logoutIconStyle} />
                    <Text style={styles.logoutTextStyle}>LOG OUT</Text>
                </TouchableOpacity>

                
               
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },
    viewStyle: {
        marginTop: 5 ,
        backgroundColor: 'white' ,
        height: 40 ,
        flexDirection: "row",
        borderTopWidth: 1 ,
        borderBottomWidth: 1 ,
        borderBottomColor: 'lightgrey',
        borderTopColor: 'lightgrey',
        flexDirection: "row"
    },
    logOutStyle: {
        marginTop: 5 ,
        backgroundColor: '#274962' ,
        height: 40 ,
        flexDirection: "row",
        borderTopWidth: 1 ,
        borderBottomWidth: 1 ,
        borderBottomColor: 'lightgrey',
        borderTopColor: 'lightgrey',
        flexDirection: "row"
    },
    iconStyle: {
        fontSize: 18,
        alignSelf:'center',
        marginHorizontal: 10,
        color:'grey'
    },
    textStyle: {
        color: '#3d3b35',
        alignSelf:'center'
        
    },
    logoutIconStyle: {
        fontSize: 18,
        alignSelf:'center',
        marginHorizontal: 10,
        color:'white'
    },
    logoutTextStyle: {
        color: 'white',
        alignSelf:'center'
        
    }
});

export default SettingScreen;
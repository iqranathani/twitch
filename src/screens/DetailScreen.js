import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

const DetailScreen = ({navigation}) => {
    const details = navigation.getParam('details');

    return (
    <View>
        <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
        <View>
            <Text style={styles.textStyle}>Name of the Firm</Text>
            <Text style={styles.inputStyle}>{details.CompanyName}</Text>
        </View>
        <View>
            <Text style={styles.textStyle}>City</Text>
            <Text style={styles.inputStyle}>{details.City}</Text>
        </View>
        <View>
            <Text style={styles.textStyle}>Country</Text>
            <Text style={styles.inputStyle}>{details.Country}</Text>
        </View>
        <View>
            <Text style={styles.textStyle}>Services</Text>
            <Text style={styles.inputStyle}>{details.Service}</Text>
        </View>
        <View>
            <Text style={styles.textStyle}>Language</Text>
            <Text style={styles.inputStyle}>{details.Language}</Text>
        </View>
        <TouchableOpacity 
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate('Request')}>
                <Text style={styles.sendRequest}>SEND REQUEST</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },
    textStyle:{
        marginTop: 5 ,
        marginHorizontal: 5 ,
        flexDirection: "row",
        color: 'black',
        fontSize: 15
    },
    inputStyle: {
        marginTop: 5 ,
        backgroundColor: 'white' ,
        height: 30 ,
        marginHorizontal: 5 ,
        flexDirection: "row",
        borderWidth: 1 ,
        borderColor: '#DCDCDC',
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    sendRequest: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14
    },
    TouchableOpacityStyle: {
        marginTop: 25 ,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 35 ,
        borderRadius: 30,
        marginHorizontal: 90 ,
        color: 'black',
        justifyContent: "center"
    }
});

export default DetailScreen;
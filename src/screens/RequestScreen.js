import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RequestScreen = () => {
    return (
        <View>
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <Text>Contact Directly Via</Text>
            <TouchableOpacity style={styles.TouchableOpacityStyle}>
                <Text style={styles.textStyle}>Fiduciary & Estate Planning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacityStyle}>
                <Text style={styles.textStyle}>Fiduciary & Estate Planning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacityStyle}>
                <Text style={styles.textStyle}>Fiduciary & Estate Planning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacityStyle}>
                <Text style={styles.textStyle}>Fiduciary & Estate Planning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacityStyle}>
                <Text style={styles.textStyle}>Fiduciary & Estate Planning</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },
    TouchableOpacityStyle: {
        marginTop: 5 ,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 35 ,
        borderRadius: 15,
        marginLeft: 50 ,
        marginRight: 20,
        color: 'white',
        width: "45%",
        alignSelf: "center"
    },
    textStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 12 ,
        marginHorizontal: 10
    }
});

export default RequestScreen;
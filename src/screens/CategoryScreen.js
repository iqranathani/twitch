import React from 'react';
import { View, Text, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';

const CategoryScreen = () => {
    return (
        <View>
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <View>
                <Picker>
                    <Picker.Item label="Select Service" value="1" />
                    <Picker.Item label="Select Service" value="1" />
                    <Picker.Item label="Select Service" value="1" />
                    <Picker.Item label="Select Service" value="1" />
                </Picker>
                <Picker>
                    <Picker.Item label="Select Category" value="1" />
                    <Picker.Item label="Select Service" value="1" />
                    <Picker.Item label="Select Service" value="1" />
                    <Picker.Item label="Select Service" value="1" />
                </Picker>
                <Picker>
                    <Picker.Item label="Select Country" value="1" />
                    <Picker.Item label="Pakistan" value="1" />
                    <Picker.Item label="India" value="1" />
                    <Picker.Item label="Iran" value="1" />
                </Picker>
                <Picker>
                    <Picker.Item label="Select City" value="1" />
                    <Picker.Item label="Karachi" value="1" />
                    <Picker.Item label="Hyderabad" value="1" />
                    <Picker.Item label="Thatta" value="1" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.TouchableOpacityStyle}>
                <Text style={styles.searchStyle}>SEARCH</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height:200,
        width:"100%"
    },
    searchStyle: {
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
        width: 180,
        // marginHorizontal: 90 ,
        color: 'black',
        justifyContent: "center",
        alignSelf: "center"
    }
});

export default CategoryScreen;
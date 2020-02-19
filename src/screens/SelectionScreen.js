import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';

const SelectionScreen = () => {
    const searchUser = () => {
        navigation.navigate('Landing')
    }

    const showService = (value) => {
        setService(value)
    }

    const showCategory = (value) => {
        setCategory(value)
    }

    const [service,setService] = useState('');
    const [category,setCategory] = useState(''); 

    return (
        <View>
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <View style={{marginTop: 10}}>
                <View style={styles.pickerContainers}>
                <Picker
                   selectedValue={category}
                   onValueChange={showCategory.bind()}
                   style={styles.pickerStyle}
                //    mode="dropdown"
                >
                    <Picker.Item label="Select Category" value="1" />
                    <Picker.Item label="Auditing & Accounting" value="2" />
                    <Picker.Item label="Tax" value="3" />
                    <Picker.Item label="Private" value="4" />
                    <Picker.Item label="Litigation & Dispute Resolution" value="5" />
                    <Picker.Item label="Administrative & Government Affairs" value="6" />
                    <Picker.Item label="Advisory" value="7" />
                    <Picker.Item label="Corporate Finance" value="8" />
                    <Picker.Item label="Fiduciary & Estate Planning" value="9" />
                    <Picker.Item label="Corporate" value="10" />
                </Picker> 
                </View>
                <View style={styles.pickerContainers}>
                <Picker
                  selectedValue={service}
                  onValueChange={showService.bind()}
                  style={styles.pickerStyle}
                //   mode="dropdown"
                >
                    <Picker.Item label="Select Service" value="11" />
                    <Picker.Item label="Select Service" value="12" />
                    <Picker.Item label="Select Service" value="13" />
                    <Picker.Item label="Select Service" value="14" />
                    <Picker.Item label="Select Service" value="15" />
                </Picker>
                </View>
               
                </View>
                <TouchableOpacity 
                   style={styles.TouchableOpacityStyle}
                >
                   <Text style={styles.registerStyle}>REGISTER</Text>
                </TouchableOpacity>
            </View>
      
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height:200 , 
        width: "100%"
    },
    pickerContainers: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: "center",
        width:"80%",
        alignSelf: "center",
        marginVertical: 3 ,
        borderColor: 'grey',
        height: 35,
        borderRadius: 8

    },
    pickerStyle: {
        color:'#274962'
    },
    registerStyle: {
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
        color: 'black',
        justifyContent: "center",
        alignSelf: "center"
    }
});

export default SelectionScreen;
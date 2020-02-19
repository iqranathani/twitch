import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';

// const data = [
//     {
//         "country":"Afghanistan",
//         "cities": [
//             "Herat",
//             "Kabul",
//             "Kandahar",

//         ]
//     },
//     {
//         "country":"Albania",
//         "cities": [
//             "Elbasan",
//             "Petran",
//             "Pogradec",

//         ]
//     },
//     {
//         "country":"Pakistan",
//         "cities": [
//             "Lahore",
//             "Islamabad",
//             "Karachi",

//         ]
//     }

// ]

const CategoryScreen = ({navigation}) => {
    const searchUser = () => {
        navigation.navigate('Landing')
    }

    const showService = (value) => {
        setService(value)
    }

    const showCategory = (value) => {
        setCategory(value)
    }

    // const showCountry = (value) => {
    //     setCountry(value)
    // }

    // const showCity = (value) => {
    //     setCity(value)
    // }

    const [service,setService] = useState('');
    const [category,setCategory] = useState('');
    // const [country,setCountry] = useState('');
    // const [city,setCity] = useState('');
    // const [countryData, setCountryData] = useState(["India", "Pakistan", "USA"])

    // const countryList = () => {
    //     return (data.map((x, i) => {            
    //         return (<Picker.Item label={x.country} key={i} value={x.country} />)
    //     }));
    // }

    // const cityList = () => {
    //     return (data.map((x) => {
    //         if (x.country == country){
    //         console.log(x.country)            
    //         return (x.cities.map((city)=>{
    //             console.log("Cities: ",city)
    //             return (<Picker.Item label={city} value={city} />)

    //         }))
    //     }
    //     }
    //         ))
      
      
    // }


    return (
        <View>
            <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
            <View style={{marginTop: 10}}>
                <View style={styles.pickerContainers}>
                <Picker
                  selectedValue={service}
                  onValueChange={showService.bind()}
                  style={styles.pickerStyle}
                //   mode="dropdown"
                >
                    <Picker.Item label="Select Service" value="1" />
                    <Picker.Item label="Select Service" value="2" />
                    <Picker.Item label="Select Service" value="3" />
                    <Picker.Item label="Select Service" value="4" />
                </Picker>
                </View>
                <View style={styles.pickerContainers}>
                <Picker
                   selectedValue={category}
                   onValueChange={showCategory.bind()}
                   style={styles.pickerStyle}
                //    mode="dropdown"
                >
                    <Picker.Item label="Select Category" value="5" />
                    <Picker.Item label="Select Category" value="6" />
                    <Picker.Item label="Select Category" value="7" />
                    <Picker.Item label="Select Category" value="8" />
                </Picker>
                </View>
                {/* <View style={styles.pickerContainers}>
                <Picker
                  selectedValue={country}
                  onValueChange={showCountry.bind()}
                  style={styles.pickerStyle}
                //   mode="dropdown"
                >
                  {countryList()}
                </Picker>
                </View>
                <View style={styles.pickerContainers}>
                <Picker
                  selectedValue={city}
                  onValueChange={showCity.bind()}
                  style={styles.pickerStyle}
                //   mode="dropdown"
                >
                  {cityList()}  
                </Picker>
                </View> */}
            </View>
            <TouchableOpacity 
                style={styles.TouchableOpacityStyle}
                onPress = {() => searchUser()}>
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
        // borderWidth: 1
        // width:"80%",
        // alignSelf: "center"

    }
});

export default CategoryScreen;
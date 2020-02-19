import React from 'react';
import {View, Text, FlatList, Image, StyleSheet } from 'react-native';




const data = [
    {
        "id": "1",
        "Image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "CompanyName": "Zenveus",
        "City": "Karachi",
        "Service": "App Development"
    },
    {
        "id": "2",
        "Image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "CompanyName": "Ekstek",
        "City": "Karachi",
        "Service": "Web Development"
    },
    {
        "id": "3",
        "Image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "CompanyName": "Zen Koders",
        "City": "Karachi",
        "Service": "App Development"
    },
    {
        "id": "4",
        "Image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "CompanyName": "Zeneks",
        "City": "Karachi",
        "Service": "Web Development"
    }

]
const ListScreen = () => {

    const renderItem=({item})=>{
        // console.log("Item: ",item)
        return(

            <View style={styles.flatListStyle}>
                <View><Image style={styles.image} source={{ uri: item.Image }}/></View>
                <View>
                    <Text style={{ fontSize:16 }}>
                   {item.CompanyName}
                   </Text>
                   <Text style={{ fontSize:13 }}>
                   {item.City} 
                   </Text>
                   <Text style={{ fontSize:13 }}>
                   {item.Service}
                   </Text>
                </View>
            </View>
        )

    }
    return (
        <View>
             <Image  style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
             <FlatList 
             data={data}
             keyExtractor={(item)=>item.id}
             renderItem={( item ) => renderItem(item)}
            // renderItem={renderItem()}
             />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width:"100%",
        height:200
    },
    flatListStyle: {
        marginTop: 10,
        width:"90%",
        borderWidth: 1,
        borderColor: 'lightgrey',
        alignSelf: "center",
        padding: 10,
        borderRadius:5,
        flexDirection: 'row',
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 10
    }
});

export default ListScreen;
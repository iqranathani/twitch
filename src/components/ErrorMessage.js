import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({error}) => {
    return (
         <View>
             <Text style={styles.errorStyle}>{error}</Text>
         </View>
    );
};
const styles =StyleSheet.create({
    errorStyle: {
        alignSelf: "center",
        color: 'red',
        marginTop: 5
    }
});

export default ErrorMessage;
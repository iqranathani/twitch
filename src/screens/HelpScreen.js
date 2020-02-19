import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Modal, { ModalContent ,ModalTitle} from 'react-native-modals';
import ErrorMessage from '../components/ErrorMessage';

const HelpScreen = () => {
    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }

    const sendRequest = () => {
        if (!Request || !info || !email || !name || !companyName) {
            setErrorMessage('Please Provide all the requirements')
        }
        else if (isEmailValid(email)) {
            setErrorMessage('Email not valid')
        }
        else {
            // alert('Your Request has been send to the admin Successfully!')
            setIsAlert(true)
        }

    }
    const [request, setRequest] = useState('test');
    const [info, setInfo] = useState('test');
    const [email, setEmail] = useState('test@test.com');
    const [name, setName] = useState('Zenveus');
    const [companyName, setCompanyName] = useState('Zenveus');
    const [errorMessage, setErrorMessage] = useState('');
    const [isAlert, setIsAlert] = useState(false)

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            {

                isAlert &&

            // <Modal visible={true}
            // style={styles.viewStyle}
            // modalTitle={<ModalTitle title="Alert" />}
            // >
                <View style={styles.viewStyle}>
                    {/* <ModalContent> */}
                        <Text style={{ alignSelf: 'center', color: 'red', marginTop: 8 }}>Alert</Text>

                        <Text style={{ alignSelf: 'center', fontSize: 13, marginHorizontal: 10, marginVertical: 10 }} >
                            Your Request has been send to the admin Successfully!
                        </Text>


                        <TouchableOpacity
                            onPress={() => setIsAlert(false)}
                            style={styles.TouchableOpacityStyle1}>
                            <Text style={styles.okStyle}>Ok</Text>
                        </TouchableOpacity>
                    {/* </ModalContent> */}
                </View>
            // </Modal>
                
            }
            <ScrollView>

                <Image style={styles.imageStyle} source={require('../../assets/twitch.jpg')} />
                <View style={{ marginTop: 8 }}>
                    <View style={styles.backgroundStyle} >
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputStyle}
                            placeholder="My Request"
                            value={request}
                            onChangeText={(newRequest) => setRequest(newRequest)}
                        />
                    </View>
                    <View style={styles.backgroundStyle} >
                        <TextInput
                            textAlignVertical="top"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputStyle}
                            placeholder="Description & Information"
                            multiline={true}
                            numberOfLines={10}
                            value={info}
                            onChangeText={(newInfo) => setInfo(newInfo)}
                        />
                    </View>
                    <View style={styles.backgroundStyle} >
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputStyle}
                            placeholder="Email Address"
                            value={email}
                            onChangeText={(newEmail) => setEmail(newEmail)}
                        />
                    </View>
                    <View style={styles.backgroundStyle} >
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputStyle}
                            placeholder="Name"
                            value={name}
                            onChangeText={(newName) => setName(newName)}
                        />
                    </View>
                    <View style={styles.backgroundStyle} >
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputStyle}
                            placeholder="Company Name"
                            value={companyName}
                            onChangeText={(newCompanyName) => setCompanyName(newCompanyName)}
                        />
                    </View>
                    <View><ErrorMessage error={errorMessage} /></View>
                    <TouchableOpacity
                        style={styles.TouchableOpacityStyle}
                        onPress={() => sendRequest()}
                    >
                        <Text style={styles.sendStyle}>SEND</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },
    backgroundStyle: {
        marginTop: 8,
        backgroundColor: 'white',
        // height: 30 ,
        borderRadius: 8,
        alignSelf: "center",
        width: "75%",
        // flexDirection: "row",
        borderWidth: 1,
        borderColor: '#DCDCDC',
        color: 'black',
        paddingHorizontal: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 14
    },
    TouchableOpacityStyle: {
        marginTop: 20,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 35,
        borderRadius: 30,
        width: 180,
        // marginHorizontal: 90 ,
        color: 'black',
        justifyContent: "center",
        alignSelf: "center"
    },
    sendStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14
    },
    TouchableOpacityStyle1: {
        marginVertical: 10,
        backgroundColor: '#274962',
        flexDirection: "row",
        height: 30,
        borderRadius: 30,
        width: 180,
        // marginHorizontal: 90 ,
        color: 'black',
        justifyContent: "center",
        alignSelf: "center"
    },
    okStyle: {
        alignSelf: "center",
        color: 'white',
        fontSize: 14
    },
    viewStyle: {
        // opacity: 1,
        zIndex: 1,
        top: '40%',
        height: 140,
        position: 'absolute',
        width: '70%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
        // justifyContent: "center",
        alignSelf: "center",
        borderRadius: 5
    }
});

export default HelpScreen;
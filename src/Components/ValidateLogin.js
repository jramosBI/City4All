import { View, Alert, Text } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import React, { useEffect } from 'react';


const ValidateLogin = ({ route, navigation }) => {
    const { token } = route.params
    useEffect(() => {
        getValueFor();
    }, []);

    async function getValueFor() {
        let result = await SecureStore.getItemAsync("token");
        if (result) {
            Alert.alert('City4All Says:', 'Welcome Back ' + result)
        } else {
            alert("You're not logged in!");
            navigation.navigate('Login')
        }
    }

    return (
        <View>
            <Text>{token}</Text>
        </View>
    );
};

export default ValidateLogin;
import { View, Alert, Text } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';

function ValidateLogin({ navigation }) {
    const [token, setToken] = useState(null);

    async function GetToken() {
        try {
            const token = await SecureStore.getItemAsync('token');
            setToken(token);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetToken();
    }, []);
    return (
        <View>
            {token ? (
                <Text>O token é {token}</Text>
            ) : (
                <Text>Nenhum token encontrado</Text>
            )}
        </View>
    );
};

export default ValidateLogin;
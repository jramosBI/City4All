import { Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, Pressable, useColorScheme } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export default function AddOrder({ navigation }) {
    const colorScheme = useColorScheme();
    const [deliveryStatus, setDeliveryStatus] = React.useState('300001');
    const [recipientId, setRecipientId] = React.useState('');
    const [details, setDetails] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [shippingCode, setShippingCode] = React.useState('');
    const [shippingCompany, setShippingCompany] = React.useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState(null);

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync('token');
            const recipientId = await SecureStore.getItemAsync('userId');
            setRecipientId(recipientId);
            setToken(token);
        };
        loadToken();
    }, []);

    async function handleSubmit() {
        try {
            const response = await axios.post('https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Deliveries', {
                deliveryStatus,
                recipientId,
                details,
                description,
                shippingCode,
                shippingCompany
            }, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status !== 200) {
                throw new Error('API error');
            } else if (response.status == 200) {
                Alert.alert(
                    'Success',
                    'Your Order Was Inserted With Success',
                    [
                        { text: 'OK', onPress: () => navigation.navigate('Orders') }
                    ]
                );
            }

        } catch (error) {
            setMessage(error.message);
            console.error(error);
        }
    }
    return (
        <KeyboardAvoidingView style={[styles.container, colorScheme === 'light' ? styles.lightMode : styles.darkMode]}>
            <TextInput
                style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}
                onChangeText={setDetails}
                value={details}
                placeholder="Details..."
                keyboardType="default"
            />
            <TextInput
                style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}
                onChangeText={setDescription}
                value={description}
                placeholder="Description..."
                keyboardType="default"
            />
            <TextInput
                style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}
                onChangeText={setShippingCode}
                value={shippingCode}
                placeholder="Shipping Code..."
                keyboardType="default"
            />
            <TextInput
                style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}
                onChangeText={setShippingCompany}
                value={shippingCompany}
                placeholder="Shipping Company..."
                keyboardType="default"
            />
            {message && (
                <Text>{message}</Text>
            )}
            <Pressable style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.label}>Add New Order</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: '70%',
        borderColor: '#43c1c9',
    }, btn: {
        width: '70%',
        height: 40,
        borderRadius: 15,
        backgroundColor: '#43c1c9',
        justifyContent: 'center',
        alignItems: 'center'
    }, label: {
        color: 'white'
    }, btnSignUpText: {
        marginTop: 10,
        color: '#43c1c9',
        fontSize: 15,
    },
    lightMode: {
        backgroundColor: '#EFEFEF', // white background for light mode
    },
    darkMode: {
        backgroundColor: '#000000', // black background for dark mode
    }, darkInput: {
        color: 'dark'
    }, lightInput: {
        color: 'white'
    }
})
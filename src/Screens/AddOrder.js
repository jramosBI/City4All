import { Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export default function AddOrder({ navigation }) {
    const [deliveryStatus, setDeliveryStatus] = React.useState('0');
    const [recipientId, setRecipientId] = React.useState('B257AC8B-70A4-4EF5-9E26-CDAA8634E031');
    const [details, setDetails] = React.useState('2 embalagens');
    const [description, setDescription] = React.useState('Raquete de Padel Teste');
    const [shippingCode, setShippingCode] = React.useState('rrtt5674TESTE');
    const [shippingCompany, setShippingCompany] = React.useState('DHL');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState(null);

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync('token');
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
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setDeliveryStatus}
                value={deliveryStatus}
                placeholder="Add your Name..."
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setRecipientId}
                value={recipientId}
                placeholder="Add your Name..."
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDetails}
                value={details}
                placeholder="Add your Name..."
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
                placeholder="Add your Name..."
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setShippingCode}
                value={shippingCode}
                placeholder="Add your Name..."
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setShippingCompany}
                value={shippingCompany}
                placeholder="Add your Name..."
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
})